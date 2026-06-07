
function goHomeSearch(){
  const q = document.getElementById("homeSearchQ")?.value || "";
  const cat = document.getElementById("homeSearchCategory")?.value || "";
  const region = document.getElementById("homeSearchRegion")?.value || "";
  const params = new URLSearchParams();
  if(q) params.set("q", q);
  if(cat) params.set("category", cat);
  if(region) params.set("region", region);
  location.href = "listings.html?" + params.toString();
}
