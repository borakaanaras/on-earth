import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyB1oXHqGwSN9F2zSoAnliP3c1dX_GWSFMs",
    authDomain: "on-earth-ace7c.firebaseapp.com",
    projectId: "on-earth-ace7c",
    storageBucket: "on-earth-ace7c.firebasestorage.app",
    messagingSenderId: "249280536870",
    appId: "1:249280536870:web:23e11a4e298cc4f26ba1e7"
};

// Firebase'i başlat
const app = initializeApp(firebaseConfig);

// Auth servisini al
export const auth = getAuth(app); 