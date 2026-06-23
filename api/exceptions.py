from rest_framework.views import exception_handler
from rest_framework.response import Response
from rest_framework import status


# Mapeamento de códigos HTTP para mensagens amigáveis em português
MENSAGENS_ERRO = {
    400: "Requisição inválida. Verifique os dados enviados.",
    401: "Não autorizado. Faça login para continuar.",
    403: "Acesso proibido. Você não tem permissão para esta ação.",
    404: "Recurso não encontrado.",
    405: "Método HTTP não permitido para esta rota.",
    429: "Muitas requisições. Tente novamente em instantes.",
    500: "Erro interno do servidor. Tente novamente mais tarde.",
}


def custom_exception_handler(exc, context):
    """
    Handler centralizado de exceções da API LABIC.
    Intercepta todos os erros do DRF e os padroniza no formato:
    {
        "erro": "<mensagem amigável>",
        "codigo": <status HTTP>,
        "detalhes": <detalhes técnicos para o front-end>
    }
    """
    # Chama o handler padrão do DRF primeiro para obter a response base
    response = exception_handler(exc, context)

    if response is not None:
        codigo = response.status_code
        dados_originais = response.data

        # Extrai a mensagem principal do erro
        mensagem_padrao = MENSAGENS_ERRO.get(codigo, "Ocorreu um erro inesperado.")

        # Monta o payload padronizado
        payload = {
            "erro": mensagem_padrao,
            "codigo": codigo,
        }

        # Adiciona detalhes técnicos conforme o formato que veio do DRF
        if isinstance(dados_originais, dict):
            detail = dados_originais.get('detail')

            # Para 404, sempre usa nossa mensagem amigável (ignora a msg técnica do Django)
            if codigo == 404:
                pass  # payload já tem a mensagem amigável
            elif detail and len(dados_originais) == 1:
                # Só tinha o "detail" (ex: 401, 403, 405) → usa como mensagem principal
                payload["erro"] = str(detail)
            else:
                # Erros de validação campo a campo (ex: 400 com múltiplos campos)
                campos = {k: v for k, v in dados_originais.items() if k != 'detail'}
                if campos:
                    payload["detalhes"] = campos

        elif isinstance(dados_originais, list):
            payload["detalhes"] = dados_originais

        response.data = payload

    return response
