
async function loadReviewsPage() {
  const companyId = qs("company_id");
  const userId = qs("user_id");
  let q = supabaseClient.from("reviews").select("*").eq("status", "active").order("created_at", {ascending:false});
  if (companyId) q = q.eq("company_id", companyId);
  if (userId) q = q.eq("target_user_id", userId);
  const { data, error } = await q;
  const box = document.getElementById("reviewsBox");
  if (error) { box.innerHTML = error.message; return; }
  if (!data || !data.length) { box.innerHTML = "<p>Отзывов пока нет.</p>"; return; }
  box.innerHTML = data.map(r => `<div class="panel"><b>${"⭐".repeat(r.rating)}</b><p>${r.comment || ""}</p><small>${new Date(r.created_at).toLocaleString()}</small></div>`).join("");
}

async function submitReview() {
  await initAuth();
  if (!currentUser) { openAuth("login"); return; }
  const rating = Number(document.getElementById("reviewRating").value);
  const comment = document.getElementById("reviewComment").value;
  const companyId = qs("company_id") || null;
  const targetUserId = qs("user_id") || null;
  const listingId = qs("listing_id") || null;
  const { error } = await supabaseClient.from("reviews").insert({
    reviewer_id: currentUser.id,
    target_user_id: targetUserId,
    company_id: companyId,
    listing_id: listingId,
    rating,
    comment
  });
  if (error) { alert(error.message); return; }
  document.getElementById("reviewComment").value = "";
  loadReviewsPage();
}
