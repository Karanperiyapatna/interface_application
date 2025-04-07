from django.shortcuts import render,redirect
from functools import wraps
import os
# Create your views here.

BASE_DIR = os.path.dirname(os.path.realpath(__file__))


def login_view(request):
    return render(request,"dashboard_interface/login.html")


def dashboard(request):
    return render(request,"dashboard_interface/dashboard.html")

def logout_view(request):
    return redirect('login_view')

def upload_the_file(file,campaign_id):
    pass

    
def save_file_locally(file,campaign_id):
    pass


def login_required(function):
    @wraps(function)
    def wrap(request,*args,**kwargs):
        if 'user_id' not in request.session:
            return redirect("login")
        return function(request, *args, **kwargs)
    return wrap 


def create_list(request):
    return render(request,"dashboard_interface/create_list.html")


def create_campaign(request):
    return render(request,"dashboard_interface/create_campaign.html")

def log_download(request):
    return render(request,"dashboard_interface/log_download.html")


def login(request):
    return render(request,"dashboard_interface/login.html")

def create_custom_fields(request,list_id):
    return render(request, "dashboard_interface/custom_fields.html")

def all_campaigns(request):
    return render(request,"dashboard_interface/all_campaign.html")



def all_list(request): 
    return render(request,"dashboard_interface/all_list.html")

def all_templates(request):
    return render(request,"dashboard_interface/all_templates.html")


def create_template(request):
    return render(request,"dashboard_interface/create_template.html")

def delete_list(request,list_id):
    return render(request,"dashboard_interface/delete_list.html") 
   
def dashboard(request):
    return render(request,"dashboard_interface/dashboard.html")

def campaign_details(request, campaign_ids):
    return render(request, "dashboard_interface/campaign_details.html")

def list_details(request, encrypted_list_id):
    return render(request, 'dashboard_interface/list_details.html')

def api_consumption(request):
    return render(request,"dashboard_interface/api_consumption.html")

@login_required
def logs_download(request):
    return render(request,"dashboard_interface/logs_download.html")
    



