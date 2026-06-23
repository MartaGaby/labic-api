from django.contrib.auth.models import User
from rest_framework import serializers, exceptions
from rest_framework_simplejwt.views import TokenObtainPairView
from rest_framework_simplejwt.tokens import RefreshToken
from .models import PesquisadorProfile, Projeto, Artigo


# -------------------------------------------------------
# AUTENTICAÇÃO
# -------------------------------------------------------

class CustomTokenObtainPairSerializer(serializers.Serializer):
    email = serializers.EmailField()
    password = serializers.CharField(write_only=True)

    def validate(self, attrs):
        email = attrs.get('email')
        password = attrs.get('password')

        try:
            user = User.objects.get(email=email)
        except User.DoesNotExist:
            raise exceptions.AuthenticationFailed(
                'Credenciais inválidas. Verifique o email e a senha.',
                'no_active_account',
            )

        if not user.check_password(password):
            raise exceptions.AuthenticationFailed(
                'Credenciais inválidas. Verifique o email e a senha.',
                'no_active_account',
            )

        if not user.is_active:
            raise exceptions.AuthenticationFailed(
                'Esta conta está inativa.',
                'no_active_account',
            )

        refresh = RefreshToken.for_user(user)
        return {
            'refresh': str(refresh),
            'access': str(refresh.access_token),
        }


class CustomTokenObtainPairView(TokenObtainPairView):
    serializer_class = CustomTokenObtainPairSerializer


# -------------------------------------------------------
# PESQUISADOR
# -------------------------------------------------------

class PesquisadorProfileSerializer(serializers.ModelSerializer):
    # Campos vindos do User nativo
    nome = serializers.SerializerMethodField()
    email = serializers.SerializerMethodField()

    class Meta:
        model = PesquisadorProfile
        fields = [
            'id', 'nome', 'email', 'area_atuacao',
            'lattes_url', 'bio', 'foto_url', 'nivel_acesso'
        ]

    def get_nome(self, obj):
        return obj.user.get_full_name() or obj.user.username

    def get_email(self, obj):
        return obj.user.email


class PesquisadorCreateSerializer(serializers.Serializer):
    """Serializer para criação de um novo pesquisador (User + Profile)."""
    nome = serializers.CharField(max_length=255)
    email = serializers.EmailField()
    senha = serializers.CharField(write_only=True, min_length=6)
    area_atuacao = serializers.CharField(max_length=255, required=False, allow_blank=True)
    lattes_url = serializers.URLField(required=False, allow_blank=True)
    bio = serializers.CharField(required=False, allow_blank=True)
    foto_url = serializers.URLField(required=False, allow_blank=True)
    nivel_acesso = serializers.ChoiceField(
        choices=['membro', 'coordenador', 'admin'],
        default='membro'
    )

    def validate_email(self, value):
        if User.objects.filter(email=value).exists():
            raise serializers.ValidationError('Já existe um pesquisador com este email.')
        return value

    def create(self, validated_data):
        nome = validated_data.pop('nome')
        email = validated_data.pop('email')
        senha = validated_data.pop('senha')

        # Divide o nome em first_name e last_name
        partes = nome.split(' ', 1)
        first_name = partes[0]
        last_name = partes[1] if len(partes) > 1 else ''

        user = User.objects.create_user(
            username=email,
            email=email,
            password=senha,
            first_name=first_name,
            last_name=last_name,
        )
        profile = PesquisadorProfile.objects.create(user=user, **validated_data)
        return profile


# -------------------------------------------------------
# PROJETO
# -------------------------------------------------------

class ProjetoSerializer(serializers.ModelSerializer):
    equipe = PesquisadorProfileSerializer(many=True, read_only=True)
    equipe_ids = serializers.PrimaryKeyRelatedField(
        source='equipe',
        many=True,
        queryset=User.objects.all(),
        write_only=True,
        required=False
    )

    class Meta:
        model = Projeto
        fields = [
            'id', 'titulo', 'descricao', 'metodologia',
            'data_inicio', 'data_fim', 'status',
            'equipe', 'equipe_ids', 'criado_em', 'atualizado_em'
        ]
        read_only_fields = ['criado_em', 'atualizado_em']

    def validate_titulo(self, value):
        if not value or not value.strip():
            raise serializers.ValidationError('O título do projeto é obrigatório.')
        return value

    def validate_descricao(self, value):
        if not value or not value.strip():
            raise serializers.ValidationError('A descrição do projeto é obrigatória.')
        return value


# -------------------------------------------------------
# ARTIGO (Regra de Negócio Principal)
# -------------------------------------------------------

class ArtigoSerializer(serializers.ModelSerializer):
    autores = PesquisadorProfileSerializer(many=True, read_only=True)
    autores_ids = serializers.PrimaryKeyRelatedField(
        source='autores',
        many=True,
        queryset=User.objects.all(),
        write_only=True,
        required=False
    )
    projeto_detalhe = ProjetoSerializer(source='projeto', read_only=True)
    projeto_id = serializers.PrimaryKeyRelatedField(
        source='projeto',
        queryset=Projeto.objects.all(),
        write_only=True,
        required=False,
        allow_null=True
    )

    class Meta:
        model = Artigo
        fields = [
            'id', 'titulo', 'resumo', 'metodologia', 'revisao_bibliografica',
            'area_relacionada', 'pdf_url', 'data_publicacao', 'status',
            'projeto_id', 'projeto_detalhe',
            'autores_ids', 'autores',
            'criado_em', 'atualizado_em'
        ]
        read_only_fields = ['criado_em', 'atualizado_em']

    # --- REGRAS DE NEGÓCIO ---
    def validate_metodologia(self, value):
        if not value or not value.strip():
            raise serializers.ValidationError(
                'O campo "metodologia" é obrigatório. O artigo não pode ser salvo sem ele.'
            )
        return value

    def validate_revisao_bibliografica(self, value):
        if not value or not value.strip():
            raise serializers.ValidationError(
                'O campo "revisão bibliográfica" é obrigatório. O artigo não pode ser salvo sem ele.'
            )
        return value

    def validate_titulo(self, value):
        if not value or not value.strip():
            raise serializers.ValidationError('O título do artigo é obrigatório.')
        return value

    def validate_resumo(self, value):
        if not value or not value.strip():
            raise serializers.ValidationError('O resumo do artigo é obrigatório.')
        return value
