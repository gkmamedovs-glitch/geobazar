
async function loadEditListing() {
  await initAuth();
  if (!currentUser) { openAuth("login"); return; }
  const id = qs("id");
  const { data, error } = await supabaseClient.from("listings").select("*").eq("id", id).maybeSingle();
  if (error || !data) { document.getElementById("editMessage").innerText = "Объявление не найдено"; return; }
  document.getElementById("listingTitle").value = data.title || "";
  document.getElementById("listingCategory").value = data.category || "";
  document.getElementById("listingPrice").value = data.price || "";
  document.getElementById("listingCurrency").value = data.currency || "GEL";
  document.getElementById("listingCity").value = data.city || "";
  document.getElementById("listingDescription").value = data.description || "";
  document.getElementById("statsBox").innerHTML = `
    <b>${tr("stats")}</b>
    <p>Просмотры: ${data.views_count || 0}</p>
    <p>Телефон: ${data.phone_clicks_count || 0}</p>
    <p>WhatsApp: ${data.whatsapp_clicks_count || 0}</p>
    <p>Избранное: ${data.favorites_count || 0}</p>
    <p>Сообщения: ${data.messages_count || 0}</p>
    <p>Цена по рынку: ${data.price_status || "пока нет данных"}</p>
  `;
}

async function saveListingEdit() {
  const id = qs("id");
  const { error } = await supabaseClient.from("listings").update({
    title: document.getElementById("listingTitle").value,
    category: document.getElementById("listingCategory").value,
    price: Number(document.getElementById("listingPrice").value || 0),
    currency: document.getElementById("listingCurrency").value,
    city: document.getElementById("listingCity").value,
    description: document.getElementById("listingDescription").value,
    updated_at: new Date().toISOString()
  }).eq("id", id);
  document.getElementById("editMessage").innerText = error ? error.message : "Сохранено ✅";
}

async function archiveListing() {
  const id = qs("id");
  await supabaseClient.from("listings").update({ status:"archived", archived_at:new Date().toISOString() }).eq("id", id);
  alert("Объявление архивировано");
}

async function restoreListing() {
  const id = qs("id");
  await supabaseClient.from("listings").update({ status:"active", archived_at:null }).eq("id", id);
  alert("Объявление восстановлено");
}

async function deleteListing() {
  if (!confirm("Удалить объявление?")) return;
  const id = qs("id");
  await supabaseClient.from("listings").delete().eq("id", id);
  location.href = "my-listings.html";
}

async function boostListing() {
  const id = qs("id");
  const until = new Date(Date.now() + 7*24*60*60*1000).toISOString();
  await supabaseClient.from("listings").update({ boosted_until: until }).eq("id", id);
  alert("Поднятие включено на 7 дней (демо до оплаты)");
}

async function vipListing() {
  const id = qs("id");
  const until = new Date(Date.now() + 7*24*60*60*1000).toISOString();
  await supabaseClient.from("listings").update({ vip_until: until, is_premium:true }).eq("id", id);
  alert("VIP включен на 7 дней (демо до оплаты)");
}
