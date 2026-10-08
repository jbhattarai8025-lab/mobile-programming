// Import Firebase App
import {
    initializeApp
} from "https://www.gstatic.com/firebasejs/13.0.0/firebase-app.js";

// Import Firebase Realtime Database
import {
    getDatabase,
    ref,
    set,
    get
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

// Initialize Realtime Database
const database = getDatabase(app);


// ========================================
// WRITE USER DATA
// ========================================

function writeUserData(userId, userData) {

    set(ref(database, "users/" + userId), userData)

        .then(() => {

            document.getElementById("statusMessage").textContent =
                `User ${userId} added successfully.`;

            console.log(`User ${userId} added:`, userData);

        })

        .catch((error) => {

            console.error(`Failed to add user ${userId}:`, error);

            document.getElementById("statusMessage").textContent =
                `Failed to add user ${userId}. Check the console for details.`;

        });
}


// ========================================
// READ USER DATA
// ========================================

function readUserData(userId) {

    get(ref(database, `users/${userId}`))

        .then((snapshot) => {

            if (snapshot.exists()) {

                console.log(`User ${userId} data:`, snapshot.val());

                document.getElementById("statusMessage").textContent =
                    `User ${userId} data found. Check the console.`;

            } else {

                console.warn(`No data found for user ${userId}.`);

                document.getElementById("statusMessage").textContent =
                    `No data found for user ${userId}.`;
            }

        })

        .catch((error) => {

            console.error(`Failed to read data for user ${userId}:`, error);

            document.getElementById("statusMessage").textContent =
                `Failed to read data for user ${userId}. Check the console for details.`;

        });
}


// ========================================
// MAKE FUNCTIONS AVAILABLE TO HTML
// ========================================

window.writeUserData = writeUserData;
window.readUserData = readUserData;


// ========================================
// READ BUTTONS
// ========================================

document.querySelectorAll("[data-user-id]").forEach((button) => {

    button.addEventListener("click", () => {

        readUserData(button.dataset.userId);

    });

});