if (window.location.href.includes("https://sso.purdue.edu/idp/profile")) {
    try {
        console.log(document.querySelectorAll("button[type='submit']"));
        document.getElementById("username").value = "rphadnis";
        document.getElementById("password").value = "password here";
        document.querySelectorAll("button[type='submit']")[0].click();
    } catch (error) {

    }
}