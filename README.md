# Laravel - Number Range Generator Application
# PT Uniktif Media Indonesia

## About
A Laravel-based web application that generates numbers within a specified range, applies specific rules, and displays the results dynamically.

## Features

- Accepts a range of numbers (Start and End) from the user.
- Displays numbers according to these rules:
  - Replace numbers divisible by 4 with **Unictive**.
  - Replace numbers divisible by both 14 and 4 with **Unictive Media**.
- Dynamically updates results using JavaScript without refreshing the page.
- User-friendly interface with pre-filled default values.

---

## Installation

Follow these steps to set up the application:

### Prerequisites

- [PHP](https://www.php.net/) (>= 8.0)
- [Composer](https://getcomposer.org/)
- [Node.js](https://nodejs.org/) (Optional: For frontend dependencies)
- A web server (e.g., Apache, Nginx, or Laravel's built-in server)

### Steps

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/sidikimamsetiyawan/unictive-number-loop.git
    ```
2. **Navigate to the project directory**:
   ```bash
   cd unictive-number-loop
    ```
4. **Install Dependencies**:
   ```bash
    npm install
    ```
6. **Configure the Environment**:
   Check for a configuration file like .env or config.json. If it exists. Open the file and set necessary values like database credentials, ports, etc.
   Example .env:
   ```bash
    DB_HOST=localhost
    DB_PORT=5432
    DB_USER=your_username
    DB_PASSWORD=your_password
    DB_NAME=uniktif_media_indonesia
    APP_PORT=8080
    ```
8. **Set Up the Database (Optional)**:
   
9. **Run the Project**:
    ```bash
    npm run dev
    ```
10. **Test the Application**:
    http://unictive-number-loop.test/

## Screenshots
### Input Form
![image](https://github.com/user-attachments/assets/f50a1449-62e0-42b1-a287-489ea51a9ef4)

### Generated Results
![image](https://github.com/user-attachments/assets/548581cc-f060-4cf5-87fa-8616fa924d55)
