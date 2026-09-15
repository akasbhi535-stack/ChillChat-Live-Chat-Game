function goHome() {
    window.location.href = "index.html";
}


function editProfile() {

    const name = prompt(
        "Enter your name:",
        "ChillChat User"
    );

    if (name && name.trim() !== "") {

        document.getElementById("profileName").textContent =
            name.trim();

        localStorage.setItem(
            "chillchat_name",
            name.trim()
        );
    }
}


function showSettings() {

    alert(
        "⚙️ ChillChat Settings\n\n" +
        "Notifications: ON\n" +
        "Online Status: ON\n" +
        "Dark Mode: Coming Soon"
    );
}


function logout() {

    const confirmLogout =
        confirm("Are you sure you want to logout?");

    if (confirmLogout) {

        localStorage.removeItem("chillchat_name");

        alert("You have been logged out.");

        window.location.href = "index.html";
    }
}


function loadProfile() {

    const savedName =
        localStorage.getItem("chillchat_name");

    if (savedName) {

        document.getElementById("profileName")
            .textContent = savedName;
    }
}


loadProfile();
