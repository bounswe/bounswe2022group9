"""
This python script creates necessary functions for our practice application.
The template is taken from CMPE321 course.
"""
import hashlib
from django.shortcuts import render
from django.http import HttpResponseRedirect
from .forms import *
from .db_utils import run_statement


def index(req):
    # Logout the user if logged
    if req.session:
        req.session.flush()
    return render(req, 'login.html')


def sign_in(req):
    # Logout the user if logged
    if req.session:
        req.session.flush()
    isFailed = req.GET.get("fail", False)  # Check the value of the GET parameter "fail"
    loginForm = UserLoginForm()  # Use Django Form object to create a blank form for the HTML page
    return render(req, 'sign_in.html', {"login_form": loginForm, "action_fail": isFailed})


def sign_up(req):
    # Logout the user if logged
    if req.session:
        req.session.flush()
    # Retrieve data from the request body
    username = req.POST["username"]
    password = req.POST["password"]
    try:
        run_statement(f"CALL AddUser('{username}','{password}')")
        return HttpResponseRedirect("../event_app")
    except Exception as e:
        print(str(e))
        return HttpResponseRedirect('../event_app/sign_up?fail=true')


def home(req):
    username = req.session["username"]  # Retrieve the username of the logged-in user
    return render(req, 'home.html', {"username": username})


def user_login(req):
    # Retrieve data from the request body
    username = req.POST["username"]
    password = req.POST["password"]
    password_hash = hashlib.sha256()
    password_hash.update(password.encode())
    password = password_hash.hexdigest()
    # Run the query in DB
    result = run_statement(f"SELECT * FROM User WHERE username='{username}' and password='{password}';")

    if result:  # If a result is retrieved
        req.session["username"] = username  # Record username into the current session
        return HttpResponseRedirect('../event_app/home')  # Redirect user to home page
    else:
        return HttpResponseRedirect('../event_app/login?fail=true')



