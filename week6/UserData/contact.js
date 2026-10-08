// Firebase App
import { initializeApp } from
    "https://www.gstatic.com/firebasejs/13.0.0/firebase-app.js";

// Firebase Realtime Database
import {
    getDatabase,
    ref,
    push,
    set
} from "https://www.gstatic.com/firebasejs/13.0.0/firebase-database.js";


// Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBRxJXYnDj_tWCk7X8KgxcelEIdqtGo5ec",
    authDomain: "mobile-programming-3d178.firebaseapp.com",
    projectId: "mobile-programming-3d178",
    storageBucket: "mobile-programming-3d178.firebasestorage.app",
    messagingSenderId: "469884045937",
    appId: "1:469884045937:web:b9a6e41093c23e79e4a9d0"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Database
const database = getDatabase(app);


// Form
const form = document.getElementById("contactForm");

form.addEventListener("submit", async function(event) {

    event.preventDefault();

    // Get data from form
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    // Create unique ID
    const contactRef = push(ref(database, "contacts"));

    // Save data
    await set(contactRef, {
        name: name,
        email: email,
        message: message
    });

    // Console output
    console.log("Data added successfully!");
    console.log("Unique ID:", contactRef.key);
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Message:", message);

    // Success message
    document.getElementById("result").textContent =
        "Data added successfully!";

    // Clear form
    form.reset();

});