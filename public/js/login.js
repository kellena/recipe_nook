const loginFormHandler = async function(event) {
    event.preventDefault();
    const emailEl = document.querySelector("#emailLogin")
    const passwordEl = document.querySelector("#passwordLogin")
    const response = await fetch ("/api/users/login", {
        method: "POST",
        body: JSON.stringify({
            email: emailEl.value,
            password: passwordEl.value
        }),
        headers: {'Content-Type': 'application/json',}
    });
    if (response.ok) {
        document.location.replace("/loginReroute")
    } else {
        alert("login failed")
    }
};

document.querySelector("#loginAccount").addEventListener("submit", loginFormHandler)

