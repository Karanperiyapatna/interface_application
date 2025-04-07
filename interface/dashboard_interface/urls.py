from django.contrib import admin
from django.urls import path
from . import views
from django.conf.urls.static import static
from django.conf import settings


urlpatterns = [
    path('',views.login_view,name="login" ),
    path('dash/',views.dashboard,name="dashboard" ),
    path("logout/",views.logout_view,name="logout"),
    path("all_list/",views.all_list,name="all_list"),
    path("all_templates/",views.all_templates,name="all_templates"),
    path("all_campaigns/",views.all_campaigns,name="all_campaigns"),
    path("create_campaign/",views.create_campaign,name="create_campaign"),
]