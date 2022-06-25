function WithdrawActive() {
  let AmountMoney = parseInt(display.innerText);
  if (AmountMoney == NaN) {
    AmountMoney = 0;
  }
  let user = getSession();
  let retire = user.balance - parseInt(AmountMoney);
  if (retire < 0 || retire < 500 || retire == NaN) {
    Swal.fire({
      icon: "warning",
      title: "Invalid transaction",
      text: "Your account balance will be empty you need to have at least $500",
    });
  } else {
    user = updateUserBalance(retire);
    document.getElementById("balanceObject").innerHTML = user.balance;
    Swal.fire(
      "Succed Operation  ",
      `Your new balances is : ${user.balance}`,
      "success"
    );
  }
  display.innerText = "";
}
function DepositActive() {
  let AmountMoney = parseInt(display.innerText);
  if (AmountMoney == NaN) {
    AmountMoney = 0;
  }
  let user = getSession();
  let add = parseInt(user.balance) + parseInt(AmountMoney);
  if (add == NaN) {
    Swal.fire({
      icon: "error",
      title: "No input amount",
      text: "Please press a Quantity ",
    });
  } else if (add > 50000) {
    Swal.fire({
      icon: "warning",
      title: "Balance limit",
      text: "Your account balance exceed the allow money per user ",
    });
  } else {
    user = updateUserBalance(add);
    document.getElementById("balanceObject").innerHTML = user.balance;
    Swal.fire(
      "Succed Operation  ",
      `Your new balances is : ${user.balance}`,
      "success"
    );
    display.innerText = "";
  }
}
