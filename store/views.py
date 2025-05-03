from django.http import HttpResponse

def store_home(request):
    return HttpResponse("<h1>Welcome to the Storefront</h1>")
