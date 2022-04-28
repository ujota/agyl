from django_filters.rest_framework import DjangoFilterBackend
from rest_framework import viewsets
from agylapi.serializers import AlunoSerializers, HorasAlunoSerializers, ModalidadeHorasSerializers
from agylapi.models import Aluno, HorasAluno, ModalidadeHoras

# Create your views here.
class AlunoViewSet(viewsets.ModelViewSet):
    queryset = Aluno.objects.all()
    serializer_class = AlunoSerializers

class HorasAlunoViewSet(viewsets.ModelViewSet):
    queryset = HorasAluno.objects.all()
    serializer_class = HorasAlunoSerializers
    filter_backends = [DjangoFilterBackend]
    filterset_fields = ['ra_aluno']
    

class ModalidadeHorasViewSet(viewsets.ModelViewSet):
    queryset = ModalidadeHoras.objects.all()
    serializer_class = ModalidadeHorasSerializers