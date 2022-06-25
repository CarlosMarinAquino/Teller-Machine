function validateLogin() {
  let inputClient = document.getElementById("userName").value;
  let inputNip = parseInt(document.getElementById("userNIP").value);
  let user = validUser(inputClient, inputNip);
  if (user) {
    createSession(user);
    setTimeout((window.location.href = "dashboard.html"), 1000);
  } else {
    Swal.fire({
      icon: "warning",
      title: "Authentication invalid",
      text: `Invalid Username or Nip`,
    });
  }
}
document.getElementById("login").addEventListener("click", validateLogin);
