from django.db import models

# Create your models here.
class Aluno(models.Model):
    ra = models.IntegerField(primary_key= True) 
    nome = models.CharField(max_length=100)
    curso = models.CharField(max_length=100)

class ModalidadeHoras(models.Model):
    modalidade = models.CharField(max_length=100)
    horas_limite = models.IntegerField()

class HorasAluno(models.Model):
    ra_aluno = models.ForeignKey(Aluno, on_delete=models.DO_NOTHING)
    modalidade_horas = models.ForeignKey(ModalidadeHoras, on_delete=models.DO_NOTHING)
    horas_atribuidas = models.IntegerField()