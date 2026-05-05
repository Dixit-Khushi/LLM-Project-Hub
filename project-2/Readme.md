# 🛒 My Store - E-commerce Web App

This project is a simple full-stack e-commerce web application that displays products dynamically by integrating a Flask backend API with a frontend user interface.

---

## 🚀 Overview

The goal of this project is to understand how frontend and backend communicate with each other.

* The **backend** is built using Flask and provides API endpoints
* The **frontend** is built using HTML, CSS, and JavaScript
* The frontend fetches product data from the backend and displays it as product cards

---

## 🔥 Features

* Fetches product data from backend API
* Displays products dynamically on the UI
* Shows product image, name, description, and price
* Handles API integration using Fetch API
* Basic error handling for failed requests

---

## 🛠️ Tech Stack

* **Backend:** Python, Flask
* **Frontend:** HTML, CSS, JavaScript
* **API Communication:** Fetch API
* **Other Concepts:** CORS (Cross-Origin Resource Sharing)

---

## ⚙️ How it works

1. Flask backend provides an API endpoint `/products`
2. Frontend sends a GET request using Fetch API
3. Backend returns product data in JSON format
4. Frontend converts JSON data and dynamically creates product cards
5. Product cards are displayed on the webpage

---

## 📁 Project Structure

```id="p1t4xk"
my-store/
 ├── backend/
 │    ├── app.py
 │    └── requirements.txt
 │
 ├── frontend/
 │    ├── index.html
 │    ├── style.css
 │    └── script.js
 │
 └── README.md
```

---

## ▶️ How to run this project

### 1. Clone the repository

### 2. Run the backend

```id="u9z3n2"
cd backend
pip install -r requirements.txt
python app.py
```

Backend will run at:

```
http://127.0.0.1:5000/
```

---

### 3. Run the frontend

* Open `frontend/index.html` in browser
  OR
* Use Live Server in VS Code (recommended)

---

## ⚠️ Important Concept: CORS

Initially, the frontend and backend could not communicate because they were running on different origins.

This issue was resolved by enabling CORS in the Flask backend using:

```
flask-cors
```

This allows the frontend to access backend data.

---

## 📊 Output

* Displays a list of products as cards
* Each card shows:

  * Product image
  * Name
  * Description
  * Price

---

## 🔮 Future Improvements

* Add search functionality
* Add product filtering (price/category)
* Implement "Add to Cart" feature
* Improve UI/UX design
* Connect to a real database

---

## 💡 Learning Outcomes

* Understanding of API creation using Flask
* Understanding of frontend-backend integration
* Working with JSON data
* Using Fetch API for asynchronous requests
* Handling CORS issues

---

