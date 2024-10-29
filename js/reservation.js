document.addEventListener("DOMContentLoaded", () => {
  const bookingDate = document.getElementById("booking-date");
  const returnDate = document.getElementById("return-date");
  const confirmButton = document.getElementById("confirm-btn");
  const cardInput = document.getElementById("credit-card");
  const cardError = document.getElementById("card-error");

  const today = new Date();
  const tomorrow = new Date(today);
  tomorrow.setDate(today.getDate() + 1);

  bookingDate.value = today.toISOString().split("T")[0];
  returnDate.value = tomorrow.toISOString().split("T")[0];

  function validateCreditCard(cardNumber) {
    const regex = /^\d{4}-\d{4}-\d{4}-\d{4}$/;
    return regex.test(cardNumber);
  }

  function checkFormValidity() {
    const isFormValid =
      document.getElementById("name").value &&
      document.getElementById("email").value &&
      document.getElementById("phone").value &&
      bookingDate.value &&
      returnDate.value &&
      validateCreditCard(cardInput.value);
    confirmButton.disabled = !isFormValid;
    formMessage.style.display = isFormValid ? "none" : "block";
  }

  cardInput.addEventListener("input", () => {
    if (!validateCreditCard(cardInput.value)) {
      cardError.textContent = "Credit card format not valid";
    } else {
      cardError.textContent = "";
    }
    checkFormValidity();
  });

  document.querySelectorAll("input").forEach((input) => {
    input.addEventListener("input", checkFormValidity);
  });
});

function completeReservation() {
  const bookingDate = document.getElementById("booking-date").value;
  const returnDate = document.getElementById("return-date").value;
  const rentalPeriod = Math.ceil(
    (new Date(returnDate) - new Date(bookingDate)) / (1000 * 60 * 60 * 24)
  );

  localStorage.setItem("bookingStatus", "true");
  localStorage.setItem("bookingDate", bookingDate);
  localStorage.setItem("returnDate", returnDate);
  localStorage.setItem("rentalPeriod", rentalPeriod);

  alert(`Reservation confirmed for Tesla Model 3! Total days: ${rentalPeriod}`);
  window.location.href = "bookingconfirm.html";
}
