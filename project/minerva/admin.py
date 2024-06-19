from django.contrib import admin

from minerva import models


@admin.register(models.Avisos)
class IntegraAdmin(admin.ModelAdmin):
    ...