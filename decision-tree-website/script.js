const interestInputs = document.querySelectorAll('input[name="interest"]');
const investmentInputs = document.querySelectorAll('input[name="investment"]');
const question1 = document.querySelector(".question1");
const question2 = document.querySelector(".question2");
const results = document.querySelector(".results");

interestInputs.forEach((input) => {
  input.addEventListener("change", updateResult);
});
investmentInputs.forEach((input) => {
  input.addEventListener("change", updateResult);
});

function updateResult() {
  const selectedInterest = document.querySelector(
    'input[name="interest"]:checked',
  );
  const selectedInvestment = document.querySelector(
    'input[name="investment"]:checked',
  );

  // Hide all results first
  const allResults = document.querySelectorAll(".result");
  allResults.forEach((result) => {
    result.style.display = "none";
  });

  if (!selectedInterest) {
    question1.style.display = "block";
    question2.style.display = "none";
    results.style.display = "none";
    return;
  } else if (selectedInterest && !selectedInvestment) {
    question1.style.display = "block";
    question2.style.display = "block";
    results.style.display = "none";
    return;
  } else if (selectedInterest && selectedInvestment) {
    // NOW both exist, so it's safe to use them
    const resultClass = `${selectedInterest.value}-${selectedInvestment.value}`;
    const matchingResult = document.querySelector(`.result.${resultClass}`);

    question1.style.display = "none";
    question2.style.display = "none";
    matchingResult.style.display = "block";
    results.style.display = "block";
    return;
  }
}

// Initialize on page load
updateResult();
