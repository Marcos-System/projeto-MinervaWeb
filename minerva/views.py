from django.shortcuts import render, redirect, get_object_or_404
from minerva.models import Avisos
from minerva.forms import AvisosForm

def index(request):
    return render(request,'login.html')
    
def home(request):
    data = {}
    data['form'] = AvisosForm()
    return render(request,'minerva.html', data)

def create(request):
    form = AvisosForm(request.POST or None)
    if form.is_valid():
        form.save()
        return redirect('home')
    else:
        form = AvisosForm()
    return render(request, 'minerva.html',{'form': form})
    
def mensagens(request):
    data = {}
    data['avisos'] = Avisos.objects.all()
    return render(request,'mensagens.html', data)

def delete(request, pk):
    mensagem = Avisos.objects.get(pk=pk)
    mensagem.delete()
    return redirect('mensagens')
