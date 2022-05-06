const singupFormHandler = async function(event) {
    event.preventDefault()
    const emailEl = document.querySelector("#emailSignup")
    const passwordEl = document.querySelector("#passwordSignup")
    console.log(emailEl.value, passwordEl.value)
    const response = await fetch('/api/users', {
        method: "POST",
        body: JSON.stringify({
            email: emailEl.value,
            password: passwordEl.value
        }),
        headers: {"Content-Type": "application/json"}
    });
    if (response.ok) {
        document.location.href="/"
    } else {
        alert("signup failed")
    }
};

document.querySelector("#create-account").addEventListener("submit", singupFormHandler)
const createBtn = document.querySelector

