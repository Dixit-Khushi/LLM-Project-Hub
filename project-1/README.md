## Weather Application using Python

This project is a simple weather application built using Python. It fetches real-time weather data of a given location using a weather API.

---

## What this project does

* Sends a request to a weather API using a URL
* Receives data in JSON format
* Converts the raw data into a Python dictionary
* Extracts useful information like temperature
* Displays the current temperature of the location

---

## How it works

1. A URL is used which contains the API endpoint and API key
2. A GET request is sent to the API using the `requests` library
3. The API returns data in JSON format
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

## Project Structure

```id="f6b7nt"
project-1/
 ├── app.py
 ├── README.md
 └── requirements.txt
```

---

## How to run this project

1. Clone the repository

2. Install required dependencies:

```id="i6n7lo"
pip install -r requirements.txt
```

3. Replace the API key in the code:

```id="h4j2ok"
your_api_key_here
```

4. Run the Python file:

```id="wd64fi"
python app.py
```

---

## Important Note

The API key has been removed from the code for security reasons.
Please use your own API key to run the project.

---

## Output

* Displays full weather data (JSON format)
* Displays current temperature of the selected location

---

## Future Improvements

* Take location as user input
* Show more weather details (humidity, wind, etc.)
* Add error handling for invalid city names
* Convert into a simple UI-based application

---
