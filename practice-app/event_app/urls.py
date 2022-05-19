from django.urls import path

from . import views

urlpatterns = [
    path('', views.index, name='index'),
    path('sign_in', views.sign_in, name="sign_in"),
    path('sign_up', views.sign_up, name="sign_up"),
    path('addUser', views.addUser, name="addUser"),
    path('api', views.api, name="api"),
    path('home', views.home, name="home"),
    path('user_login', views.user_login, name="user_login"),
    path('viewGithubInfo', views.viewGithubInfo, name="viewGithubInfo"),
    path('viewGithubInfoPage', views.viewGithubInfoPage, name="viewGithubInfoPage"),
    path('viewIpInfo', views.viewIpInfo, name="viewIpInfo"),
    path('viewIpInfoPage', views.viewIpInfoPage, name="viewIpInfoPage"),
    path('viewActivity', views.viewActivity, name="viewActivity"),
    path('add_event', views.add_event, name="add_event"),
    path('addEventPage', views.addEventPage, name="addEventPage"),
    path('view_subject_info', views.view_subject_info, name="view_subject_info"),
    path('view_subject_info_results', views.view_subject_info_results, name="view_subject_info_results"),
    path('university_form', views.university_form, name="university_form"),
    path('show_universities', views.show_universities, name="show_universities"),
    path('add_education_form', views.add_education_form, name="add_education_form"),
    path('add_education_function', views.add_education_function, name="add_education_function"),
    path('see_education', views.see_education, name="see_education"),
    path('viewRandomUselessFact',views.viewRandomUselessFact, name="viewRandomUselessFact"),
    path('race_standing', views.race_standing_api, name="race_standing"),
    path('race_standing/standing', views.race_standing_api, name="standing")
]
