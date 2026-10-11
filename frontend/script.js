function login() {
    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();

    if (username === "doctor" && password === "1234") {
        window.location.href = "dashboard.html";
    } else {
        document.getElementById("loginMessage").innerText =
            "Invalid username or password";
    }
}