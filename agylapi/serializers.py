from rest_framework import serializers
from agylapi.models import Aluno, HorasAluno, ModalidadeHoras

class AlunoSerializers(serializers.ModelSerializer):
    class Meta:
        model = Aluno
        fields = ('ra', 'nome', 'curso',)

class ModalidadeHorasSerializers(serializers.ModelSerializer):
    class Meta:
        model = ModalidadeHoras
        fields = ('modalidade', 'horas_limite')

class HorasAlunoSerializers(serializers.ModelSerializer):
    class Meta:
        model = HorasAluno
        fields = ('ra_aluno', 'modalidade_horas', 'horas_atribuidas')