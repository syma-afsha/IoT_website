from multiprocessing import context
from turtle import title
from django.shortcuts import render

# Create your views here.
def index(request, *args, **kwargs):
    return render(request, 'frontend/index.html')

def about(request, *args, **kwargs):
    # context = {"title": "About"}
    return render(request, 'frontend/index.html')
def contact(request, *args, **kwargs):
    return render(request, 'frontend/index.html')

def solutions(request, *args, **kwargs):
    return render(request, 'frontend/index.html')
def career(request, *args, **kwargs):
    return render(request, 'frontend/index.html')
def notpage(request, *args, **kwargs):
    return render(request, 'frontend/index.html')

def construction(request, *args, **kwargs):
    return render(request, 'frontend/index.html')
