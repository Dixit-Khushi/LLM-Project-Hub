## Weather Application using Python

This project is a simple weather application built using Python. It fetches real-time weather data of a given location using a weather API.

---

## What this project does

* Sends a request to a weather API using a URL
* Receives data in JSON format
* Extracts useful information from the response
* Displays the current temperature of the location

---

## How it works

1. A URL is used which contains the API endpoint
2. A GET request is sent to the API using the `requests` library
3. The API returns data in raw format (JSON)
4. The JSON data is converted into a Python dictionary
5. Specific values like temperature are accessed using keys

---

## Technologies / Tools used

* Python
* requests library
* Weather API

---

## Code explanation (high level)

* `requests.get(url)` → sends request to API
* `response.json()` → converts response into dictionary
* `data['current']['temp_c']` → extracts temperature value

---

## How to run this project

1. Install required library:

```
pip install requests
```

2. Replace the API key in the code:

```
your_api_key_here
```

3. Run the Python file:

```
python app.py
```

---

## Important Note

The API key has been removed from the code for security reasons.
Please use your own API key to run this project.

---

## Output

* Displays full weather data (JSON format)
* Displays current temperature of the selected location

---

## Future Improvements

* Take location as user input
* Show more weather details (humidity, wind, etc.)
* Add error handling for invalid city names
* Convert into a simple UI-based app

---

