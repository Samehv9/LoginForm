const container = document.querySelector(".container"),
    pwSH = document.querySelectorAll(".showHidePw"),
    pwField = document.querySelectorAll(".password"),
    register = document.querySelector(".signup-link"),
    login = document.querySelector(".login-link");


// JS CODE Show/Hide PW and Change The EYE-ICON

pwSH.forEach(eyeIcon => {
    eyeIcon.addEventListener("click", () => {
        pwField.forEach(pwField => {
            if (pwField.type === "password") {
                pwField.type = "text";

                pwSH.forEach(icon => {
                    icon.classList.replace("uil-eye-slash", "uil-eye")
                })
            } else {
                pwField.type = "password"

                pwSH.forEach(icon => {
                    icon.classList.replace("uil-eye", "uil-eye-slash")
                })
            }
        })
    })
})

// Swap Sign-in and register window

register.addEventListener("click", () => {
    container.classList.add("active");
})
login.addEventListener("click", () => {
    container.classList.remove("active");
})