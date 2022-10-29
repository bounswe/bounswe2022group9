import re


def validate_password(password):
    if len(password) < 8:
        return [False, "password can't be shorter than 8 characters"]
    lower = False
    upper = False
    digit = False
    for p in password:
        if ord("0") <= ord(p) <= ord("9"):
            digit = True
        if ord("a") <= ord(p) <= ord("z"):
            lower = True
        if ord("A") <= ord(p) <= ord("Z"):
            upper = True
    if not upper:
        return [False, "password should contain at least one upper case letter"]
    if not lower:
        return [False, "password should contain at least one lower case letter"]
    if not digit:
        return [False, "password should contain at least one numerical digit"]
    return [True, ""]


def validate_email(email):
    m = re.match(r"(\w|\.)*@\w*.com", email)
    if m is None:
        return [False, "email is invalid"]
    return [True, ""]


def validate_username(username):
    if len(username) < 5:
        return [False, "username can't be shorter than 5 characters"]
    return [True, ""]
