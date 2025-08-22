// login button functionality

document.getElementById("login-btn").addEventListener("click", function (e) {
  e.preventDefault();
  const mobileNumber = 12345678910;
  const piNumber = 1234;

  const mobileNumberValue = document.getElementById("mobile-number").value;
  const mobileNumberValueConverted = parseInt(mobileNumberValue);

  const pinNUmberValue = document.getElementById("pin-number").value;
  const pinNumberValueConverted = parseInt(pinNUmberValue);



  if (
    mobileNumberValueConverted === mobileNumber &&
    pinNumberValueConverted === piNumber
  ) {
    window.location.href = "./home.html";
  } else {
    alert("Invalid credentials");
  }
});
