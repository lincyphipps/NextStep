import dotenv from "dotenv";
dotenv.config({path: ".env.local"});

import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.PROJECT_ID + ".firebaseapp.com",
    projectId: process.env.PROJECT_ID,
    storageBucket: process.env.PROJECT_ID + ".appspot.com",
    messagingSenderId: process.env.SENDER_ID,
    appId: process.env.APP_ID
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

async function testAuth() {
  const testEmail = "testuser@example.com";  
  const testPassword = "password123";   

  console.log("Testing Firebase Authentication...");

  try {
    // Try creating the user
    const userCred = await createUserWithEmailAndPassword(auth, testEmail, testPassword);
    console.log("User created:", userCred.user.email);

    // Then try logging them in
    const loginCred = await signInWithEmailAndPassword(auth, testEmail, testPassword);
    console.log("User logged in:", loginCred.user.email);

  } catch (err) {
    console.error("Error:", err.message);
  } finally {
    console.log("Test completed.");
  }
}

testAuth();
