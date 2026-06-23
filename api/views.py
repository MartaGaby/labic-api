from rest_framework.decorators import api_view, permission_classes
from rest_framework.response import Response
from rest_framework import status, exceptions
from django.shortcuts import get_object_or_404
from rest_framework.permissions import IsAuthenticated, IsAdminUser, AllowAny

from .models import PesquisadorProfile, Projeto, Artigo
from .serializers import (
    PesquisadorProfileSerializer,
    PesquisadorCreateSerializer,
    ProjetoSerializer,
    ArtigoSerializer,
)

# -------------------------------------------------------
# TRAVA DE SEGURANÇA — Passo 4
# Exige autenticação de Admin para qualquer método de escrita.
# Rotas de leitura (GET) são livres para todos.
# -------------------------------------------------------

def exigir_admin_para_escrita(request):
    """
    Lança exceção se o método for de escrita (POST, PUT, PATCH, DELETE)
    e o usuário não for um Admin autenticado.
    """
    if request.method in ['POST', 'PUT', 'PATCH', 'DELETE']:
        if not request.user or not request.user.is_authenticated:
            raise exceptions.NotAuthenticated(
                detail='Autenticação necessária. Envie um Token JWT válido no header Authorization.'
            )
        if not (request.user.is_staff or request.user.is_superuser):
            raise exceptions.PermissionDenied(
                detail='Acesso negado. Apenas administradores podem realizar esta operação.'
            )

# --- HOME ---
@api_view(['GET'])
def home(request):
    return Response({"message": "Bem-vindo à API do LABIC - MVP v2"})

# -------------------------------------------------------
# PESQUISADORES
# -------------------------------------------------------

@api_view(['GET', 'POST'])
def pesquisadores(request):
    exigir_admin_para_escrita(request)

    if request.method == 'GET':
        perfis = PesquisadorProfile.objects.select_related('user').all()
        serializer = PesquisadorProfileSerializer(perfis, many=True)
        return Response(serializer.data)
    elif request.method == 'POST':
        serializer = PesquisadorCreateSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        perfil = serializer.save()
        return Response(
            PesquisadorProfileSerializer(perfil).data,
            status=status.HTTP_201_CREATED
        )
        
@api_view(['GET', 'PUT', 'DELETE'])
def pesquisador_detail(request, id):
    exigir_admin_para_escrita(request)

    perfil = get_object_or_404(PesquisadorProfile, id=id)
    if request.method == 'GET':
        serializer = PesquisadorProfileSerializer(perfil)
        return Response(serializer.data)
    elif request.method == 'PUT':
        serializer = PesquisadorProfileSerializer(perfil, data=request.data, partial=True)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data)
    elif request.method == 'DELETE':
        perfil.user.delete()  # deleta o User e o Profile em cascata
        return Response(
            {"mensagem": "Pesquisador removido com sucesso."},
            status=status.HTTP_204_NO_CONTENT
        )

# -------------------------------------------------------
# PROJETOS
# -------------------------------------------------------

@api_view(['GET', 'POST'])
def projetos(request):
    exigir_admin_para_escrita(request)

    if request.method == 'GET':
        lista = Projeto.objects.prefetch_related('equipe').all()
        serializer = ProjetoSerializer(lista, many=True)
        return Response(serializer.data)
    elif request.method == 'POST':
        serializer = ProjetoSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)

@api_view(['GET', 'PUT', 'DELETE'])
def projeto_detail(request, id):
    exigir_admin_para_escrita(request)

    projeto = get_object_or_404(Projeto, id=id)
    if request.method == 'GET':
        serializer = ProjetoSerializer(projeto)
        return Response(serializer.data)
    elif request.method == 'PUT':
        serializer = ProjetoSerializer(projeto, data=request.data, partial=True)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data)
    elif request.method == 'DELETE':
        projeto.delete()
        return Response(
            {"mensagem": "Projeto removido com sucesso."},
            status=status.HTTP_204_NO_CONTENT
        )

# -------------------------------------------------------
# ARTIGOS
# -------------------------------------------------------

@api_view(['GET', 'POST'])
def artigos(request):
    exigir_admin_para_escrita(request)

    if request.method == 'GET':
        lista = Artigo.objects.prefetch_related('autores').select_related('projeto').all()
        serializer = ArtigoSerializer(lista, many=True)
        return Response(serializer.data)
    elif request.method == 'POST':
        serializer = ArtigoSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)

@api_view(['GET', 'PUT', 'DELETE'])
def artigo_detail(request, id):
    exigir_admin_para_escrita(request)

    artigo = get_object_or_404(Artigo, id=id)
    if request.method == 'GET':
        serializer = ArtigoSerializer(artigo)
        return Response(serializer.data)
    elif request.method == 'PUT':
        serializer = ArtigoSerializer(artigo, data=request.data, partial=True)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data)
    elif request.method == 'DELETE':
        artigo.delete()
        return Response(
            {"mensagem": "Artigo removido com sucesso."},
            status=status.HTTP_204_NO_CONTENT
        )