from django import forms


class UserLoginForm(forms.Form):
    username = forms.CharField(widget=forms.TextInput(attrs={'placeholder': 'Username'}))
    password = forms.CharField(widget=forms.PasswordInput)


class EventForm(forms.Form):
    event_name = forms.CharField(widget=forms.TextInput)
    date = forms.CharField(widget=forms.TextInput)
    city = forms.CharField(widget=forms.TextInput)
    definition = forms.CharField(widget=forms.TextInput)


class UniversityForm(forms.Form):
    country_name = forms.CharField(widget=forms.TextInput(attrs={'placeholder': 'Country name'}))

class AddEducationForm(forms.Form):
    institute_name = forms.CharField(widget=forms.TextInput(attrs={'placeholder': 'Institute name'}))
    degree = forms.CharField(widget=forms.TextInput(attrs={'placeholder': 'Degree (like Bachelor)'}))
    end_year = forms.CharField(widget=forms.TextInput(attrs={'placeholder': 'end year'}))
