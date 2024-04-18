function showDetails(plan) {
  document.querySelectorAll('.plan-details').forEach(function (element) {
    element.classList.remove('active');
  });
  document.getElementById(`${plan}Details`).classList.add('active');
}

function redirectToPayment(planName, price) {
  const rupeeSymbol = '\u20B9'; 
  alert(`Redirecting to payment for ${planName}. Total amount: ${rupeeSymbol}${price}`);
}
