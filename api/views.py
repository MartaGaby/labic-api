from rest_framework.decorators import api_view
from rest_framework.response import Response

@api_view(['GET'])
def home(request):
    return Response({"message": "Bem-vindo à API do LABIC - MVP v2"})

# --- PESQUISADORES ---
@api_view(['GET', 'POST'])
def pesquisadores(request):
    if request.method == 'GET':
        return Response([{"id": 1, "nome": "Pesquisador Mock 1"}])
    elif request.method == 'POST':
        return Response({"message": "Pesquisador criado com sucesso!", "data": request.data})

@api_view(['GET', 'PUT', 'DELETE'])
def pesquisador_detail(request, id):
    if request.method == 'GET':
        return Response({"id": id, "nome": f"Pesquisador Mock {id}"})
    elif request.method == 'PUT':
        return Response({"message": f"Pesquisador {id} atualizado com sucesso!", "data": request.data})
    elif request.method == 'DELETE':
        return Response({"message": f"Pesquisador {id} deletado com sucesso!"})

# --- PROJETOS ---
@api_view(['GET', 'POST'])
def projetos(request):
    if request.method == 'GET':
        return Response([{"id": 1, "titulo": "Projeto Mock 1"}])
    elif request.method == 'POST':
        return Response({"message": "Projeto criado com sucesso!", "data": request.data})

@api_view(['GET', 'PUT', 'DELETE'])
def projeto_detail(request, id):
    if request.method == 'GET':
        return Response({"id": id, "titulo": f"Projeto Mock {id}"})
    elif request.method == 'PUT':
        return Response({"message": f"Projeto {id} atualizado com sucesso!", "data": request.data})
    elif request.method == 'DELETE':
        return Response({"message": f"Projeto {id} deletado com sucesso!"})

# --- ARTIGOS ---

@api_view(['GET', 'POST'])
def artigos(request):
    if request.method == 'GET':
        return Response([{"id": 1, "titulo": "Artigo Mock 1"}])
    elif request.method == 'POST':
        return Response({"message": "Artigo criado com sucesso!", "data": request.data})

@api_view(['GET', 'PUT', 'DELETE'])
def artigo_detail(request, id):
    if request.method == 'GET':
        return Response({"id": id, "titulo": f"Artigo Mock {id}"})
    elif request.method == 'PUT':
        return Response({"message": f"Artigo {id} atualizado com sucesso!", "data": request.data})
    elif request.method == 'DELETE':
        return Response({"message": f"Artigo {id} deletado com sucesso!"})