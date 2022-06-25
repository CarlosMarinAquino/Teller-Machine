let display = document.getElementById("display");
let buttons = Array.from(document.getElementsByClassName("button"));
buttons.map((button) => {
  button.addEventListener("click", (e) => {
    if (e.target.innerText) {
      display.innerText += eval(e.target.innerText);
    }
  });
});

function loadUserData() {
  let user = getSession();
  document.getElementById("userObjectName").innerHTML = user.name;
  document.getElementById("balanceObject").innerHTML = user.balance;
  document.getElementById("userPhoto").src = user.image;
}
function updateUserBalance(balance) {
  let user = getSession();
  user.balance = balance;
  updateUser(user);
  return user;
}
let Withdraw = document.getElementById("Withdraw");
Withdraw.addEventListener("click", WithdrawActive);

let Deposit = document.getElementById("Deposit");
Deposit.addEventListener("click", DepositActive);

let Delete = document.getElementById("Delete");
Delete.addEventListener("click", () => {
  display.innerText = display.innerText.slice(0, -1);
});
let Clear = document.getElementById("Clear");
Clear.addEventListener("click", () => {
  display.innerText = "";
});

const buttonLogOut = document.getElementById("logOut");
buttonLogOut.addEventListener("click", logOutLeave);
function logOutLeave() {
  localStorage.clear();
  window.location.href = "index.html";
}

loadUserData();
