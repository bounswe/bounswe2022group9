from django import forms


class UserLoginForm(forms.Form):
    username = forms.CharField(widget=forms.TextInput(attrs={'placeholder': 'Username'}))
    password = forms.CharField(widget=forms.PasswordInput)


class EventForm(forms.Form):
    event_name = forms.CharField(widget=forms.TextInput)
    date = forms.CharField(widget=forms.TextInput)
    city = forms.CharField(widget=forms.TextInput)
    definition = forms.CharField(widget=forms.TextInput)
