/* login page - JS */
document.addEventListener("DOMContentLoaded", () => {
  const id = document.getElementById("id_username");
  const pw = document.getElementById("id_password");
  const btn = document.getElementById("loginBtn");

  function toggle() {
    const ok = id.value.trim() && pw.value.trim();
    btn.disabled = !ok;
    btn.classList.toggle("active", ok);
  }
  id.addEventListener("input", toggle);
  pw.addEventListener("input", toggle);
});
