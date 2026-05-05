# Importing requests package
import requests

# to get weather information of any location we use this url and change location keyword to any  location ...and make an api call through requests package
url = "https://api.weatherapi.com/v1/current.json?key=your_api_key_here&q={location}"

# this will be used to send a get request to url for retriving data... here parameters and keyword arguments can also be added which are optional
response = requests.get(url)

# thi will conert raw text into a clean pythin dictionary which makes it easier to work with the code
data = response.json()

# if we simply print data we will get information of everything that is present in the dictionary location's name region country latitude longitude etc..
print(data)

# so to get only the temprature ... we use data['current']['temp_c'] to get to the value of temprature itself and ignoring the other information
print(f"Temperature: {data['current']['temp_c']}°C")
