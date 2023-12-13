const form = document.querySelector("form");
const email = document.getElementById("email");
const password = document.getElementById("password");
const emailInputComment = document.querySelector(".emailinputcomment");
const passwordInputComment = document.querySelector(".passwordinputcomment");

email.addEventListener("change", (event) => {
    const emailValue = event.target.value;
    let regExEmail = new RegExp("[a-z0-9._-]+@[a-z0-9._-]+\.[a-z0-9._-]+");
    let emailValidation = regExEmail.test(emailValue);
    if (emailValidation === true) {
        email.classList.remove("wronginputstyle");
        emailInputComment.style.display = "none";

    } else {
        email.classList.add("wronginputstyle");
        emailInputComment.style.display = "block";
    }
});

password.addEventListener("change", (event) => {
    const passwordValue = event.target.value;
    if (passwordValue === "") {
        password.classList.add("wronginputstyle");
        passwordInputComment.style.display = "block";

    } else {
        password.classList.remove("wronginputstyle");
        passwordInputComment.style.display = "none";
    }
});

form.addEventListener("submit", async (event) => {
    event.preventDefault();
    const userEmail = email.value;
    const userPassword = password.value;
    try {
        const response = await fetch("http://localhost:5678/api/users/login", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email: userEmail, password: userPassword }),
        });
        if (response.ok) {
            const data = await response.json();
            const token = data.token;
            localStorage.setItem("token", token);
            window.location.href = "./index.html";
        } else {
            email.classList.remove("wronginputstyle");
            emailInputComment.style.display = "none";
            password.classList.add("wronginputstyle");
            passwordInputComment.style.display = "block";
        }
    } catch (error) {
        alert("Erreur, veuillez réessayer");
    }
});