document.addEventListener("DOMContentLoaded", function() {
  const loginForm = document.getElementById("login-form");
  const passwordInput = document.getElementById("password");
  const passwordToggle = document.getElementById("password-toggle");

  if (passwordInput && passwordToggle) {
    passwordToggle.addEventListener("click", function() {
      const isHidden = passwordInput.type === "password";
      passwordInput.type = isHidden ? "text" : "password";
      passwordToggle.classList.toggle("is-visible", isHidden);
      passwordToggle.setAttribute("aria-pressed", String(isHidden));
      passwordToggle.setAttribute("aria-label", isHidden ? "Hide password" : "Show password");
    });
  }
  
  if (loginForm) {
    loginForm.addEventListener("submit", function(event) {
      event.preventDefault();

      const email = document.getElementById("email").value;
      const password = document.getElementById("password").value;
      const rememberMe = document.getElementById("remember").checked;

      console.log("Email:", email);
      console.log("Password:", password);
      console.log("Remember Me:", rememberMe);

      document.getElementById("email").value = "";
      document.getElementById("password").value = "";
      document.getElementById("password").type = "password";
      if (passwordToggle) {
        passwordToggle.classList.remove("is-visible");
        passwordToggle.setAttribute("aria-pressed", "false");
        passwordToggle.setAttribute("aria-label", "Show password");
      }
    });
  }
});