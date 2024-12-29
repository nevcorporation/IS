var user = document.getElementById("user");
var pass = document.getElementById("pass");
function base64() {
    if(user.value == atob('YWRtaW4=') && pass.value == atob("aWg4dXNvbXVjaA==")) {
        window.location.href = "index.html";
        localStorage.setItem("currentuser", user.value);
        console.log("a")
    }
    else if(user.value == atob('cm9sbGluZ2Rvd25pbnRoZWRlZXA=') && pass.value == atob('ZnJlZGR5ZmF6YmVhcg==')) {
        window.location.href = "index.html";
        localStorage.setItem("currentuser", user.value);
        console.log("a")
    }
    else if(user.value == atob('Qy5DX2NhbnRfc2F5X25v') && pass.value == atob('VGluZ190b25nX3RhbmcxMjI=')) {
        window.location.href = "index.html";
        localStorage.setItem("currentuser", user.value);
        console.log("a")
    }
}
