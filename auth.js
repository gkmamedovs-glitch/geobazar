
let currentUser = null;

async function initAuth() {
  const { data } = await supabaseClient.auth.getUser();
  currentUser = data.user || null;
  renderAuthNav();
}

function renderAuthNav() {
  const navBox = document.getElementById("authNav");
  if (!navBox) return;

  if (currentUser) {
    navBox.innerHTML = `
      <a class="btn btn-light" href="profile.html">👤 ${tr("cabinet")}</a>
      <button class="btn btn-danger" onclick="logoutUser()">${tr("logout")}</button>
    `;
  } else {
    navBox.innerHTML = `
      <button class="btn btn-light" onclick="openAuth('login')">${tr("login")}</button>
      <button class="btn btn-light" onclick="openAuth('register')">${tr("register")}</button>
    `;
  }
}

function openAuth(mode) {
  window.authMode = mode;
  document.getElementById("authTitle").innerText = mode === "register" ? "${tr("register")}" : "Вход";
  document.getElementById("authMessage").innerText = "";
  document.getElementById("authModal").classList.add("show");
}

function closeAuth() {
  document.getElementById("authModal").classList.remove("show");
}

async function submitAuth() {
  const email = document.getElementById("authEmail").value.trim();
  const password = document.getElementById("authPassword").value;
  const msg = document.getElementById("authMessage");
  msg.className = "message";

  if (!email || !password) {
    msg.innerText = "Введите email и пароль";
    msg.classList.add("err");
    return;
  }

  let result;
  if (window.authMode === "register") {
    result = await supabaseClient.auth.signUp({ email, password });
    msg.innerText = result.error ? result.error.message : "${tr("register")} создана. Теперь войдите в аккаунт.";
  } else {
    result = await supabaseClient.auth.signInWithPassword({ email, password });
    msg.innerText = result.error ? result.error.message : "Вы вошли.";
    if (!result.error) {
      closeAuth();
      await initAuth();
      location.reload();
    }
  }

  msg.classList.add(result.error ? "err" : "ok");
}

async function logoutUser() {
  await supabaseClient.auth.signOut();
  location.href = "index.html";
}

function showProviderNote(provider) {
  alert(provider + " вход подготовлен. Нужно включить провайдера в Supabase.");
}

document.addEventListener("DOMContentLoaded", initAuth);
