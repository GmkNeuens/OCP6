const form = document.querySelector("form");
const email = document.getElementById('email');
const password = document.getElementById('password');
const emailInputComment = document.querySelector(".emailinputcomment");
const passwordInputComment = document.querySelector(".passwordinputcomment");

email.addEventListener('change', (event) => {
    const emailValue = event.target.value;
    let regExEmail = new RegExp("[a-z0-9._-]+@[a-z0-9._-]+\.[a-z0-9._-]+");
    let emailValidation = regExEmail.test(emailValue);
    if (emailValidation === true) {
        console.log('Le champ email est correctement rempli');
        email.classList.remove("wronginputstyle");
        emailInputComment.style.display = 'none';

    } else {
        console.log('Le champ email est mal rempli');
        email.classList.add("wronginputstyle");
        emailInputComment.style.display = 'block';
    }
});

password.addEventListener('change', (event) => {
    const passwordValue = event.target.value;
    if (passwordValue === "") {
        console.log('Le champ mot de passe est mal rempli');
        password.classList.add("wronginputstyle");
        passwordInputComment.style.display = 'block';

    } else {
        console.log('Le champ mot de passe est correctement rempli');
        password.classList.remove("wronginputstyle");
        passwordInputComment.style.display = 'none';
    }
});

form.addEventListener("submit", (event) => {
    event.preventDefault();
    console.log("Il n’y a pas eu de rechargement de page");

    const emailValue = document.getElementById("email").value;

    const passwordValue = document.getElementById("password").value;

    console.log(emailValue);
    console.log(passwordValue);
});

