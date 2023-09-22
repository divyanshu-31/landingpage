
// login-signin form transitions

let button_login=document.getElementById("button-for-login")

button_login.addEventListener("click",(e)=>{
    document.getElementById("log-in-container").classList.add("sign-in-row")
    button_login.remove();  
    })

    let SignUpPageTransition = document.getElementById("Sign-up-page-transition")
    SignUpPageTransition.addEventListener("click",(e)=>{
     document.getElementById("log-in-container").classList.remove("sign-in-row")
    document.getElementById("signin-in-container").classList.add("sign-in-row")
        
    })
    let SignInButton=document.getElementById("SignIn-button")
    SignInButton.addEventListener("click",(e)=>{
        document.getElementById("log-in-container").classList.add("sign-in-row")
    document.getElementById("signin-in-container").classList.remove("sign-in-row")

    })





