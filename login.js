document.getElementById("loginForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value.trim();
  const errorMsg = document.getElementById("errorMsg");

  // Username & Password yang benar (bisa kamu ubah)
  const validUser = {
    username: "admin",
    password: "12345"
  };

  if (username === validUser.username && password === validUser.password) {
    // Simpan status login di localStorage
    localStorage.setItem("isLoggedIn", "true");
    window.location.href = "index.html"; // arahkan ke halaman utama
  } else {
    errorMsg.classList.remove("d-none");
  }
});
