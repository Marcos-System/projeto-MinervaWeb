from django.db import models


class Avisos(models.Model):
    dia = models.CharField(max_length=10)
    hora = models.CharField(max_length=5)
    mensagem = models.CharField(max_length=500)

