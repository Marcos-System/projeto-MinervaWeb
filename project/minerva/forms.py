from django import forms
from django.forms import ModelForm
from minerva.models import Avisos


class AvisosForm(ModelForm):
    class Meta:
        model = Avisos
        fields = ['dia','hora','mensagem']
        widgets = {
            'dia': forms.TextInput(attrs={'type':'date','id':'data'}),
            'hora': forms.TextInput(attrs={'type':'text','id':'hora'}),
            'mensagem': forms.Textarea(attrs={'id': 'aviso','cols':'30','rows':'10'})
        }
