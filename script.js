function loadPage(page) {
  fetch(page)
    .then((res) => res.text())
    .then((data) => {
      document.getElementById("content").innerHTML = data;
    })
    .catch((err) => console.error("Error loading page:", err));
}

function openOrderForm(coffeeName) {
  document.getElementById("coffeeName").value = coffeeName;

  const modal = new bootstrap.Modal(document.getElementById("orderModal"));
  modal.show();
}

document.addEventListener("submit", function (e) {
  if (e.target && e.target.id === "orderForm") {
    e.preventDefault();

    const name = document.getElementById("customerName").value;
    const coffee = document.getElementById("coffeeName").value;
    const qty = document.getElementById("quantity").value;
    const pay = document.getElementById("payment").value;

    alert(
      `Terima kasih, ${name}!\nPesanan Anda:\n- ${coffee} (${qty}x)\nMetode Pembayaran: ${pay}`
    );

    const modalEl = document.getElementById("orderModal");
    const modal = bootstrap.Modal.getInstance(modalEl);
    modal.hide();
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const toggle = document.getElementById("darkModeToggle");
  const body = document.body;

  // Simpan preferensi user di localStorage
  if (localStorage.getItem("theme") === "dark") {
    body.classList.add("dark-mode");
    toggle.textContent = "☀️";
  }

  toggle.addEventListener("click", function () {
    body.classList.toggle("dark-mode");
    const isDark = body.classList.contains("dark-mode");
    toggle.textContent = isDark ? "☀️" : "🌙";
    localStorage.setItem("theme", isDark ? "dark" : "light");
  });
});
