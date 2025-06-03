/* signup page - JS */
// 활성화 조건 체크 / 비밀번호 패턴 정규식
const idEl = document.getElementById("id_username");
const pw1El = document.getElementById("id_password");
const pw2El = document.getElementById("id_password2");
const btn = document.getElementById("signupBtn");
const warn = document.getElementById("pwMatchInfo");

const pwReg = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@!?\-_])[A-Za-z\d@!?\-_]{8,}$/;

function validate() {
  const idOk = idEl.value.trim().length > 0;
  const pwOk = pwReg.test(pw1El.value);
  const match = pw1El.value && pw1El.value === pw2El.value;

  // 경고 출력
  warn.style.display = pw2El.value && !match ? "block" : "none";

  const allOk = idOk && pwOk && match;
  btn.disabled = !allOk;
  btn.classList.toggle("active", allOk);
}

[idEl, pw1El, pw2El].forEach((el) => el.addEventListener("input", validate));
