// firebase-config.js

import { initializeApp } from "https://www.gstatic.com/firebasejs/11.10.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/11.10.0/firebase-firestore.js";

const firebaseConfig = {
    apiKey: "AIzaSyCXIUk_1l3eY0eOqDKjUx8xqNh6zRlEl-4",
    authDomain: "sliding-puzzle-game-31d9e.firebaseapp.com",
    projectId: "sliding-puzzle-game-31d9e",
    storageBucket: "sliding-puzzle-game-31d9e.firebasestorage.app",
    messagingSenderId: "73657506884",
    appId: "1:73657506884:web:f904ca746cf1e1f8297011"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);