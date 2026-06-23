from django.contrib import admin
from django.urls import path
from api import views
from api.serializers import CustomTokenObtainPairView
urlpatterns = [
    path('admin/', admin.site.urls),
    path('', views.home),
    
    # Autenticação
    path('p-interno/auth/login/', CustomTokenObtainPairView.as_view(), name='token_obtain_pair'),
   
    # --- VITRINE PÚBLICA ---
    path('v-externa/projetos/', views.projetos, name='projetos_publicos'),
    path('v-externa/artigos/', views.artigos, name='artigos_publicos'),
    
    # --- PAINEL INTERNO (GESTÃO) ---
    # Rotas de Listar e Criar (Sem ID)
    path('p-interno/pesquisadores/', views.pesquisadores, name='pesquisadores_interno'),
    path('p-interno/projetos/', views.projetos, name='projetos_interno'),
    path('p-interno/artigos/', views.artigos, name='artigos_interno'),
    
    # Rotas de Ver Específico, Atualizar e Deletar (Com ID)
    path('p-interno/pesquisadores/<int:id>/', views.pesquisador_detail, name='pesquisador_detail_interno'),
    path('p-interno/projetos/<int:id>/', views.projeto_detail, name='projeto_detail_interno'),
    path('p-interno/artigos/<int:id>/', views.artigo_detail, name='artigo_detail_interno'),
]