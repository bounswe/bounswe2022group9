"""Practice Application URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/3.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.shortcuts import redirect
from django.urls import include, path


urlpatterns = [
    path('formula1_api/', include('formula1_api.urls')),
    path('github_api/', include('github_api.urls')),
    path('university_api/', include('university_api.urls')),
    path('education_api/', include('education_api.urls')),
    path('countryCodes_api/', include('countryCodes_api.urls')),
    path('geolocation_api/', include('geolocation_api.urls')),
    path('admin/', admin.site.urls),
    path('event_app/', include('event_app.urls')),
    path('', lambda req: redirect('event_app/')),
    
]
