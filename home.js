const validPin = 1234;

// functions to get input values
function getInputValueNumber(id) {
  return parseInt(document.getElementById(id).value);
}
function getInputValue(id) {
  return document.getElementById(id).value;
}
// function to get innerText
function getInnerText(id) {
  return parseInt(document.getElementById(id).innerText);
}

// function to set innerText
function setInnerText(value) {
  document.getElementById("available-balance").innerText = value;
}

// function to toggle
function handleToggle(id) {
  const forms = document.getElementsByClassName("form");

  for (const form of forms) {
    form.style.display = "none";
  }

  document.getElementById(id).style.display = "block";
}

//function to toggle btns
function handleBtnToggle(id) {
  const formBtns = document.getElementsByClassName("form-btn");

  for (const btn of formBtns) {
    btn.classList.remove("border-[#0874f2]", "bg-[#0874f20d]");
    btn.classList.add("border-[#0808081a]");
  }
  document.getElementById(id).classList.remove("border-[#0808081a]");
  document
    .getElementById(id)
    .classList.add("border-[#0874f2]", "bg-[#0874f20d]");
}

// add money feature
document
  .getElementById("add-money-btn")
  .addEventListener("click", function (e) {
    e.preventDefault();

    const bank = getInputValue("bank");

    const accountNumber = getInputValue("account-number");

    const amount = getInputValueNumber("add-amount");

    const pin = getInputValueNumber("add-pin");

    if (accountNumber.length < 11) {
      alert("Please provide valid account number");
      return;
    }

    if (pin !== validPin) {
      alert("Please provide valid pin number");
      return;
    }

    const availableBalance = getInnerText("available-balance");

    const totalNewAvailableBalance = amount + availableBalance;

    setInnerText(totalNewAvailableBalance);
  });

// cash out money feature
document.getElementById("withdraw-btn").addEventListener("click", function (e) {
  e.preventDefault();

  const agentNumber = getInputValue("agent-number");

  const pin = getInputValueNumber("withdraw-pin");

  if (agentNumber.length < 11) {
    alert("Please provide valid account number");
    return;
  }
  if (pin !== validPin) {
    alert("Please provide valid pin number");
    return;
  }

  const amount = getInputValueNumber("withdraw-amount");

  const availableBalance = getInnerText("available-balance");

  const totalNewAvailableBalance = availableBalance - amount;

  setInnerText(totalNewAvailableBalance);
});

// toggling feature

document.getElementById("add-btn").addEventListener("click", function () {
  handleToggle("add-money-parent");

  handleBtnToggle("add-btn");
});
document.getElementById("cash-out-btn").addEventListener("click", function () {
  handleToggle("cash-out-parent");

  handleBtnToggle("cash-out-btn");
});
document
  .getElementById("transfer-money-btn")
  .addEventListener("click", function () {
    handleToggle("transfer-money-parent");

    handleBtnToggle("transfer-money-btn");
  });

document.getElementById("get-bonus-btn").addEventListener("click", function () {
  handleToggle("get-bonus-parent");

  handleBtnToggle("get-bonus-btn");
});
document.getElementById("pay-bill-btn").addEventListener("click", function () {
  handleToggle("pay-bill-parent");

  handleBtnToggle("pay-bill-btn");
});
document.getElementById("transactions-btn").addEventListener("click", function () {
  handleToggle("transactions-parent");

  handleBtnToggle("transactions-btn");
});
