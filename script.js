document.getElementById("bookBtn").addEventListener("click", function () {
  const service = document.getElementById("service").value;
  const timeslot = document.getElementById("timeslot").value;
  const confirmation = document.getElementById("confirmation");

  if (service && timeslot) {
    confirmation.textContent = `Ви забронювали "${service}" на ${timeslot}. Дякуємо!`;
    confirmation.classList.remove("hidden");
  } else {
    confirmation.textContent = "Будь ласка, оберіть послугу та час.";
    confirmation.classList.remove("hidden");
  }
});
