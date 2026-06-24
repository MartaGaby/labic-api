from django.contrib import admin
from django.urls import path
from rest_framework_simplejwt.views import TokenRefreshView
from api import views
from api.serializers import CustomTokenObtainPairView

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', views.home),

    # Autenticação JWT
    path('auth/login/', CustomTokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('auth/refresh/', TokenRefreshView.as_view(), name='token_refresh'),

    # Rotas de Listar e Criar (Sem ID)
    path('pesquisadores/', views.pesquisadores),
    path('projetos/', views.projetos),
    path('artigos/', views.artigos),

    # Rotas de Ver Específico, Atualizar e Deletar (Com ID)
    path('pesquisadores/<int:id>/', views.pesquisador_detail),
    path('projetos/<int:id>/', views.projeto_detail),
    path('artigos/<int:id>/', views.artigo_detail),
]
