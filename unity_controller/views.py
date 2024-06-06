from django.shortcuts import render
import os

def index(request):
    return render(request,"unity_controller/index.html"
        # "WS_URL": "wss://localhost:8000/ws/control/",
    )
