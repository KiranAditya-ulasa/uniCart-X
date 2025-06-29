// js/auth.js
function checkAuth() {
  const isLoggedIn = localStorage.getItem("isLoggedIn");
  const user = JSON.parse(localStorage.getItem("user"));

  if (!isLoggedIn || !user) {
    alert("Please log in to continue.");
    window.location.href = "auth.html";
  } else {
    const span = document.getElementById("user-name");
    if (span) {
      span.innerText = user.name;
    }
  }
}

function logout() {
  localStorage.removeItem("isLoggedIn");
  localStorage.removeItem("user");
  window.location.href = "auth.html";
}
