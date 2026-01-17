// Show user name from localStorage
let currentUser = JSON.parse(localStorage.getItem("currentUser"));
if (currentUser) {
  document.getElementById("userName").textContent = currentUser.username;
} else {
  window.location.href = "login.html"; // block access if not logged in
}

// Show category
function showCategory(id) {
  let cats = document.querySelectorAll(".category");
  cats.forEach(cat => cat.style.display = "none");
  document.getElementById(id).style.display = "block";
}

// Handle submit
function handleSubmit(e) {
  e.preventDefault();
  alert("✅ Problem submitted! Redirecting to contact page...");
  window.location.href = "contact.html";
  return false;
}
function saveContact(e) {
  e.preventDefault();

  let name = document.getElementById("name").value || (currentUser ? currentUser.username : "Anonymous");
  let phone = document.getElementById("phone").value;
  let address = document.getElementById("address").value;

  let contactDetails = { name, phone, address };

  // Save to localStorage
  localStorage.setItem("contactDetails", JSON.stringify(contactDetails));

  alert("✅ Your details have been submitted! Our counselor will contact you soon.");
  window.location.href = "dashboard.html"; // back to dashboard
  return false;
}
