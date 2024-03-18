// Initialize Firebase
const firebaseConfig = {
    apiKey: "AIzaSyChEEkU5ms3iQQM4VpsntO3OY-R0zFE20U",
    authDomain: "login-4d619.firebaseapp.com",
    projectId: "login-4d619",
    storageBucket: "login-4d619.appspot.com",
    messagingSenderId: "964250318851",
    appId: "1:964250318851:web:0808fe0b002288ff4b3636",
    measurementId: "G-GPZ9YF6NBN"
  };

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();

// Login form submission
document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    auth.signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            console.log('User logged in:', user);
            // Redirect or do something else upon successful login
        })
        .catch((error) => {
            const errorMessage = error.message;
            document.getElementById('error-message').innerText = errorMessage;
        });
});
