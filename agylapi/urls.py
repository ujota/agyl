from django.urls import include, path
from rest_framework import routers

from agylapi.views import AlunoViewSet, HorasAlunoViewSet, ModalidadeHorasViewSet

router = routers.DefaultRouter()
router.register(r'aluno', AlunoViewSet)
router.register(r'horas-aluno', HorasAlunoViewSet)
router.register(r'modalidade-horas', ModalidadeHorasViewSet)

urlpatterns = [
    path('', include(router.urls)),
]