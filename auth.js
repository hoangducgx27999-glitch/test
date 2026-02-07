// ===== Firebase Google Login (FILE RIÊNG) =====
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithRedirect,
  onAuthStateChanged,
  signOut
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

// Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyClwIV_A77rzpk_aOxCGF_sSqVGoMvqTls",
  authDomain: "ieltsgame-8621a.firebaseapp.com",
  projectId: "ieltsgame-8621a",
  storageBucket: "ieltsgame-8621a.firebasestorage.app",
  messagingSenderId: "786419357706",
  appId: "1:786419357706:web:20dfa9df5c6e9d649167f3"
};

// Init
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

// Elements
const loginBtn = document.getElementById("loginBtn");
const logoutBtn = document.getElementById("logoutBtn");
const avatar = document.getElementById("avatar");

// VIP list (thu tiền thủ công)
const VIP_EMAILS = [
  "vip1@gmail.com",
  "vip2@gmail.com",
  "hoangducgx27999@gmail.com"
];

function isVIP(user) {
  return VIP_EMAILS.includes(user.email);
}

// Actions
loginBtn.onclick = () => signInWithRedirect(auth, provider);
logoutBtn.onclick = () => signOut(auth);

// Auth state
onAuthStateChanged(auth, (user) => {
  if (user) {
    loginBtn.style.display = "none";
    logoutBtn.style.display = "inline-block";
    avatar.src = user.photoURL || "";
    avatar.style.display = "block";

    if (!isVIP(user)) {
      alert("这是 VIP 内容，请购买 Premium");
    }
  } else {
    loginBtn.style.display = "inline-block";
    logoutBtn.style.display = "none";
    avatar.style.display = "none";
  }
});
