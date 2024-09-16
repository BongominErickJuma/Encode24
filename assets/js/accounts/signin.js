const form = document.getElementById("signin-form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  window.location.href = "/dashboard.html";
});
