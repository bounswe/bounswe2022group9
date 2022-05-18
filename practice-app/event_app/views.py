"""
This python script creates necessary functions for our practice application.
The template is taken from CMPE321 course.
"""
import hashlib
import requests
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
    isFailed = req.GET.get("fail", False)  # Check the value of the GET parameter "fail"
    loginForm = UserLoginForm()  # Use Django Form object to create a blank form for the HTML page
    return render(req, 'sign_up.html', {"login_form": loginForm, "action_fail": isFailed})


def addUser(req):
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
        return HttpResponseRedirect('../event_app/sign_in?fail=true')


def viewGithubInfoPage(req):
    username = req.session["username"]  # Retrieve the username of the logged-in user
    isFailed = req.GET.get("fail", False)  # Try to retrieve GET parameter "fail", if it's not given set it to False
    return render(req, 'viewGithubInfo.html', {"action_fail": isFailed, "username": username})


def viewGithubInfo(req):
    github_username = req.POST["github_username"]
    url = "https://api.github.com/users/" + github_username
    try:
        username = req.session["username"]  # Retrieve the username of the logged-in user
        isFailed = req.GET.get("fail", False)  # Try to retrieve GET parameter "fail", if it's not given set it to False
        response = requests.get(url)
        r = response.json()
        result = [[r["login"], r["name"], r["email"], r["public_repos"], r["followers"]]]
        return render(req, 'viewGithubInfo.html', {"results": result, "action_fail": isFailed, "username": username})
    except Exception as e:
        print(str(e))
        return HttpResponseRedirect('../boun/viewGithubInfoPage?fail=true')


def viewActivity(req):

    url = "https://www.boredapi.com/api/activity" 

    try:
        resp = requests.get(url)

        username = req.session["username"]

        r = resp.json()
        result = [[r["activity"], r["type"], r["participants"], r["price"], r["link"], r["key"], r["accessibility"]]]
        return render(req, 'viewActivity.html', {"result": result, "username": username})
        
    except Exception as e:
        print(str(e))
        return HttpResponseRedirect('../boun/viewGithubInfoPage?fail=true')


def addEventPage(req):
    isFailed = req.GET.get("fail", False)  # Check the value of the GET parameter "fail"
    eventForm = EventForm()  # Use Django Form object to create a blank form for the HTML page
    return render(req, 'add_event.html', {"event_form": eventForm, "action_fail": isFailed})


def add_event(req):
    # Retrieve the username of the logged-in user
    username = req.session["username"]
    # Retrieve data from the request body
    event_name = req.POST["event_name"]
    date = req.POST["date"]
    city = req.POST["city"]
    definition = req.POST["definition"]
    try:
        run_statement(f"CALL AddEvent('{username}','{event_name}','{date}','{city}','{definition}')")
        return HttpResponseRedirect("../event_app/home")
    except Exception as e:
        print(str(e))
        return HttpResponseRedirect('../event_app/add_event?fail=true')

def view_subject_info(req):
    username = req.session["username"]  # Retrieve the username of the logged-in user
    return render(req, 'view_subject_info.html', {"username": username})


def view_subject_info_results(req):
    given_name = req.POST["subject_name"]
    try:
        username = req.session["username"]  # Retrieve the username of the logged-in user
        wrong_username = req.GET.get("fail", False)  # Try to retrieve GET parameter "fail", if it's not given set it to False
        if wrong_username:
            return render(req, 'view_subject_info.html', {"wrong_username": True,
                                                          "username": username})

        # Search for the given keyword on wikipedia
        search_url = f"https://en.wikipedia.org/w/api.php?action=query&list=search&srsearch={given_name}&srlimit=1&format=json"
        search_response = requests.get(search_url)
        if search_response.status_code != 200:  # Wikipedia returned a non-200 status code. Fail
            return render(req, 'view_subject_info.html', {"search_failed": True,
                                                          "username": username})
        search_json = search_response.json()
        search_results = search_json["query"]["search"]
        if len(search_results) == 0:  # Successfully searched but found no results
            return render(req, 'view_subject_info.html', {"no_search_results": True,
                                                          "username": username})
        page_title = search_results[0]["title"]  # Title of first search result

        # Get a summary of the page
        summary_url = f"https://en.wikipedia.org/w/api.php?action=query&prop=extracts&exlimit=1&exintro=1&titles={page_title}&explaintext=1&formatversion=2&format=json"
        summary_response = requests.get(summary_url)
        if summary_response.status_code != 200:  # Wikipedia returned a non-200 status code. Fail
            return render(req, 'view_subject_info.html', {"summary_fetch_failed": True,
                                                          "username": username})
        summary_json = summary_response.json()
        summary_text = summary_json["query"]["pages"][0]["extract"]
        result_table = [[given_name, page_title, summary_text]]
        return render(req, 'view_subject_info.html', {"results": result_table,
                                                      "username": username})
    except Exception as e:
        print(str(e))
        return render(req, 'view_subject_info.html', {"action_fail": True,
                                                      "username": username})

def university_form(req):
    if not req.session.get("username"):
        return HttpResponseRedirect('../event_app/login?fail=true')
    university_form = UniversityForm()
    return render(req, 'universityFormPage.html', {"university_form": university_form})
    
def show_universities(req):
    if not req.session.get("username"):
        return HttpResponseRedirect('../event_app/login?fail=true')
    country_name = req.POST["country_name"]
    resp = requests.get("http://universities.hipolabs.com/search?country=" + country_name)
    if resp.status_code != 200:
        return render(req, 'universityShowPage.html', {"info": [],"country_name":country_name,"action_fail":True})
    unv_info = resp.json()
    info = []
    cnt = 0
    for unv in unv_info:
        cnt += 1
        info.append( [ cnt, unv["name"], unv["web_pages"][0] ])
    print(info)
    return render(req, 'universityShowPage.html', {"info": info,"country_name":country_name, "action_fail":False})
  
def viewRandomUselessFact(req):

    url_one = "https://uselessfacts.jsph.pl/random.json?language=en" 
    url_two = "https://uselessfacts.jsph.pl/today.json?language=en"
    try:
      resp_one = requests.get(url_one)
      resp_two = requests.get(url_two)
      username = req.session["username"]
      r1 = resp_one.json()
      r2 = resp_two.json()
      result_one = [[ r1["text"]]]
      result_two = [[ r2["text"]]]
      return render(req, 'viewRandomUselessFact.html', {"result_one": result_one,"result_two": result_two, "username": username})
    except Exception as e:
      print(str(e))
      return HttpResponseRedirect('../event_app/viewRandomUselessFact?fail=true')
    
def add_education_form(req):
    if not req.session.get("username"):
        return HttpResponseRedirect('../event_app/login?fail=true')
    education_form = AddEducationForm()
    return render(req, 'AddEducationFormPage.html', {"education_form": education_form, "action_fail" : False})

def add_education_function(req):
    if not req.session.get("username"):
        return HttpResponseRedirect('../event_app/login?fail=true')
    username = req.session.get("username")
    institute_name = req.POST["institute_name"]
    degree = req.POST["degree"]
    end_year = req.POST["end_year"]
    try:
        print("end year is: ",end_year)
        print(f"CALL AddEducation('{username}','{institute_name}','{degree}',{end_year})")
        run_statement(f"CALL AddEducation('{username}','{institute_name}','{degree}',{end_year})")
        return HttpResponseRedirect("../event_app/home")
    except Exception as e:
        print(str(e))
        education_form = AddEducationForm()
        return render(req, 'AddEducationFormPage.html', {"education_form": education_form, "action_fail" : True})

def see_education(req):
    if not req.session.get("username"):
        return HttpResponseRedirect('../event_app/login?fail=true')
    username = req.session.get("username")
    try:
        # Run the query in DB
        result = run_statement(f"SELECT * FROM Education WHERE username='{username}' ORDER BY end_year DESC;")
        print("result: ",result)
        return render(req, 'ShowEducationPage.html', {"result": result,"action_fail":False})
    except Exception as e:
        print(str(e))
        return render(req, 'ShowEducationPage.html', {"result": [],"action_fail":True})
