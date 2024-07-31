# TodoApp-Node
This is a simple Todo List application built with Node.js and Express.js, using the file system as the database (JSON file).

## Overview

The application allows users to:
- Add new tasks to the todo list.
- Mark tasks as complete or undo completion.
- Delete tasks from the list.

## System Design

The application is designed using the following components:
1. **Server-side**: Built using Node.js and Express.js, the server handles CRUD operations (Create, Read, Update, Delete) on the todo list. The data is stored in a JSON file.
2. **Client-side**: A simple HTML file with embedded JavaScript fetches and displays the todo list, and handles user interactions for adding, updating, and deleting tasks.
3. **CSS**: Basic CSS is used to style the application, including color-coded buttons for different actions.

## Implementation

### Server-side (`index.js`)

- **Routes**:
  - `GET /todos`: Fetches all todos.
  - `POST /todos`: Adds a new todo.
  - `PUT /todos/:id`: Updates an existing todo status.
  - `DELETE /todos/:id`: Deletes a todo.
- **Data Handling**:
  - Todos are stored in a JSON file (`todos.json`).
  - Helper functions are used to read from and write to the JSON file.

### Client-side (`public/index.html`)

- **Form**: A form to add new todos.
- **Table**: A table to display the list of todos with buttons to complete/undo and delete tasks.
- **JavaScript**:
  - Fetches todos from the server and displays them in the table.
  - Handles form submission to add new todos.
  - Handles button clicks to update or delete todos.

## Setup and Run

### Prerequisites

- Node.js and npm should be installed.

### Instructions

1. **Clone the repository**:
   git clone <repository-url>
   cd <repository-directory>

2. **Install dependencies**:
   npm install
   Start the server:

3. **Run app**:
   npm start

4. **Open the application in your browser**:
    Navigate to http://localhost:3000

### Project Structure
   index.js: Server-side code.
   todos.json: JSON file to store todos.
   public/index.html: Client-side code (HTML, CSS, JavaScript).

### Usage
   Add a Todo: Enter a task in the input box and click the "Add" button (blue).
   Complete/Undo a Todo: Click the "Complete" button (green) to mark a task as completed or "Undo" button (yellow) to mark it as pending.
   Delete a Todo: Click the "Delete" button (red) to remove the task from the list.