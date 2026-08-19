const KARIAH_FORM_URL = "https://docs.google.com/forms/d/e/1FAIpQLSdZr3MmYzqZPqv9GJUv6xvX6L9FkwurygA0QW6IhZGPcMtbuw/viewform?usp=dialog";
const KHAIRAT_FORM_URL = "#KHAIRAT_FORM_URL";

async function lookupMember(module, queryType, query, phoneLast4 = "") {
  const { data, error } = await supabaseClient.functions.invoke("member-lookup", {
    body: { module, queryType, query, phoneLast4 }
  });
  if (error) throw error;
  return data;
}

function escapeHtml(v = "") {
  return String(v).replace(/[&<>"']/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;","\"":"&quot;","'":"&#39;"}[c]));
}

function kariahCard(m) {
  const rows = [
    ["Serial ID", m.serialId], ["Nama Penuh", m.fullName], ["E-mel", m.email],
    ["Alamat dalam IC", m.addressIc], ["Alamat Semasa", m.currentAddress],
    ["No. Telefon", m.phoneNumber], ["Status Perkahwinan", m.maritalStatus], ["Blok", m.block]
  ];
  return `<article class="membership-card" id="membershipCard">
    <div class="membership-card__header"><div><small>KAD DIGITAL AHLI KARIAH</small><h2>SURAU AR-RAUDHAH ERISTANA</h2></div><span class="status">${escapeHtml(m.membershipStatus||"Aktif")}</span></div>
    <div class="membership-card__body">${rows.map(([k,v])=>`<div><small>${k}</small><strong>${escapeHtml(v||"-")}</strong></div>`).join("")}</div>
    <footer>Untuk paparan dan tangkap layar oleh ahli berkenaan sahaja.</footer>
  </article>`;
}

function khairatCard(m) {
  const rows=[["Serial ID",m.serialId],["Nama Penuh",m.fullName],["E-mel",m.email],["Alamat Semasa",m.currentAddress],["No. Telefon",m.phoneNumber],["Bayaran Terakhir",m.lastPaymentDate],["Tamat Keahlian",m.membershipExpiry],["Status",m.membershipStatus]];
  return `<article class="membership-card"><div class="membership-card__header"><div><small>KAD DIGITAL KHAIRAT KEMATIAN</small><h2>SURAU AR-RAUDHAH ERISTANA</h2></div></div><div class="membership-card__body">${rows.map(([k,v])=>`<div><small>${k}</small><strong>${escapeHtml(v||"-")}</strong></div>`).join("")}</div></article>`;
}
