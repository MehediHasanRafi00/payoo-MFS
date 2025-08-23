// add money functionality

const validPin = 1234;
document
  .getElementById("add-money-btn")
  .addEventListener("click", function (e) {
    e.preventDefault();

    const bank = document.getElementById("bank").value;

    const accountNumber = document.getElementById("account-number").value;

    const amount = parseInt(document.getElementById("add-amount").value);

    const pin = parseInt(document.getElementById("add-pin").value);

    if (accountNumber.length < 11) {
      alert("Please provide valid account number");
      return;
    }

    if (pin !== validPin) {
      alert("Please provide valid pin number");
      return;
    }

    const availableBalance = parseInt(
      document.getElementById("available-balance").innerText
    );

    const totalNewAvailableBalance = amount + availableBalance;

    document.getElementById("available-balance").innerText =
      totalNewAvailableBalance;
  });

// toggling feature

document.getElementById("add-btn").addEventListener("click", function () {
  document.getElementById("cash-out-parent").style.display = "none";
  document.getElementById("transfer-money-parent").style.display = "none";
  document.getElementById("add-money-parent").style.display = "block";
});
document.getElementById("cash-out-btn").addEventListener("click", function () {
  document.getElementById("add-money-parent").style.display = "none";
  document.getElementById("transfer-money-parent").style.display = "none";
  document.getElementById("cash-out-parent").style.display = "block";
});
document.getElementById("transfer-money-btn").addEventListener("click", function () {
  document.getElementById("add-money-parent").style.display = "none";
  document.getElementById("cash-out-parent").style.display = "none";
  document.getElementById("transfer-money-parent").style.display = "block";
});
