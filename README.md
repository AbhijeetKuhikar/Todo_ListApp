# **Todo List App** 

**Introduction**

The To-Do List Application is a simple task-management system designed to help users create, view, update, and delete daily tasks. The project follows a clean REST API architecture using Node.js, Express.js, and MongoDB (Mongoose) for the backend, and a cross-platform mobile interface built with React Native and Expo for the frontend.

---

A **Todo List app**, Its a simple Fullstack Project with a **React Native** Frontend and a **Node.js + Express + MongoDB** backend.

In this Project User can be able to -
- create
- read
- update
- delete
their todos or task. and marks them as completed also using checkbox.

---

# Features of todo app

- Add a new Todo
- Edit existing todos
- delete todos
- toggle the completion with the checkbox.
- data storage in MongoDB
- Backend API built with Node.js and Express
- FrontEnd built with React Native

---

# Tech Stack used

- FrontEnd - React Native, TypeScript
- Backend - Node.js , Express
- Database - MongoDB 
- HTTP Requests - Axios package

---

# Project Structure

TodoListAPP
    -todoBackend
        -models
              -Todo.js
        -routes
              -todoRouter.js
        -server.js
        -.env
        -Package.json
    -todoFrontend
        -app
            -index.tsx
        -package.json
        -( other files will automatically being Downloaded while setup.)
-README.md

---

# Requirements

- Node.js installed
- npm (Node Package Manager)
- MongoDB (Atlas or Local)
- React Navtive Enviorment Setup.

---

# Backend Setup

open cmd 

- cd todobackend
- npm install express mongoose cors dotenv
- create .env file in backend and create
   PORT=5000
   MONGO_URI=your_mongodb_connection_string
- create the folder strcture as of the backend folder above in the repository.
- hit " npm start " in the cmd/todobackend

// Expected Output 
// MongoDB Connected
// successfully running on port 5000

---

# Frontend Setup

open cmd 

- npx create-expo-app@latest
- create a project name as todoFrontend
- hit "npm run reset-project "This will make the project empty and ready to build with scratch
- install ES7 React, redux extention in Vs Code to expand the functionality of the react Native
- create or copy the code from todoListAPP/app/index.tsx in your todofrontend folder

Note- In your index.tsx code
- set  const API="http://YOUR_LAPTOP_IP:5000" 
- hit ipconfig in cmd to get the ip off your LAPTOP
- now run " npx expo start " in your cd todoFrontend/ in cmd
- after processing a QR code appears .

---

# mobile process

- connect the mobile with same wifi as the laptop
- Open Playstore and Download the **"Expo GO"** App
- After Download scan the QR code from the cmd appears after the command " npx Expo start" while running todofrontend
- taskes little bit time or some attempt be patient and the app will appear in your mobile screen as the todo App after loading from the ip of the laptop.

- now the user will:
  - create todo by click add button
  - edit todos using edit button
  - delete todos using delete button
  - toggle the completion using checkbox
  - also read the todos

---

# MongoDB Access

To check the **todos** in data base open **MongoDB compass**
- connect the database with the mongodb localhost string and the click the todolistapp folder to check the stored and updated todos of the user.

---

# Commands For Backend Check in ThunderClient/Postman

Open your ThunderClient or Postman, Create a new Request and Perform the below Commands :-

**To Get All Todos**

- *Method* = GET
- http://YOUR_IP:5000/todos   // Your Laptop`s Ip


**To Create Todo**

- *Method* = POST
- http://YOUR_IP:5000/todos

- Body -> JSON:
   {
      "text": "Buy Milk"
   }


**To Update Todo**

- *Method* = PUT
- http://YOUR_IP:5000/todos/TODO_ID

- Body -> JSON
   {
      "text": "Updated text here"
   }

**TOGGLE completed**

- *Method* = PATCH
- http://YOUR_IP:5000/todos/TODO_ID/toggle

**To Delete the Todo**

- *Method* = DELETE
- http://YOUR_IP:5000/todos/TODO_ID

NOTE: Replace YOUR_IP with your PC`s IP, check using- "ipconfig" .

**Error Handling**

- Returns 404 if task ID is not found
- Returns 500 for database/server errors
- Validates required fields (e.g., title)

---

**CONCLUSION**

*This project demonstrates*:

- Full REST API development
- MongoDB CRUD operations
- Mobile app API integration
- State management
- Clean and scalable folder structure
- A complete backend + mobile frontend solution for a simple To-Do App.

--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
