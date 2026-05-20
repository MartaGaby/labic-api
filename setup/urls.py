from django.contrib import admin
from django.urls import path
from api import views

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', views.home),
    
    # Rotas de Listar e Criar (Sem ID)
    path('pesquisadores/', views.pesquisadores),
    path('projetos/', views.projetos),
    path('artigos/', views.artigos),

    # Rotas de Ver Específico, Atualizar e Deletar (Com ID)
    path('pesquisadores/<int:id>/', views.pesquisador_detail),
    path('projetos/<int:id>/', views.projeto_detail),
    path('artigos/<int:id>/', views.artigo_detail),
]