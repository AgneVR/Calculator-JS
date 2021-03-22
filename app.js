let calc = (firstNumber, secondNumber, sign) => {
  switch (sign) {
    case "+":
      return firstNumber + secondNumber;
    case "-":
      return firstNumber - secondNumber;
    case "/":
      return firstNumber / secondNumber;
    case "*":
      return firstNumber * secondNumber;
    case "%":
      return firstNumber % secondNumber;
    default:
      return NaN;
  }
};
const buttons = document.getElementById("buttons");
buttons.addEventListener("click", function (event) {
  let id = event.target.id;
  let nb1 = Number(document.getElementById("inp1").value);
  let nb2 = Number(document.getElementById("inp2").value);
  switch (id) {
    case "sum":
      document.getElementById("result").textContent = calc(nb1, nb2, "+");
      break;
    case "sub":
      document.getElementById("result").textContent = calc(nb1, nb2, "-");
      break;
    case "divi":
      document.getElementById("result").textContent = calc(nb1, nb2, "/");
      break;
    case "mul":
      document.getElementById("result").textContent = calc(nb1, nb2, "*");
      break;
    case "mod":
      document.getElementById("result").textContent = calc(nb1, nb2, "%");
      break;
    case "clear":
      document.getElementById("inp1").value = "";
      document.getElementById("inp2").value = "";
      document.getElementById("result").textContent = "";
      break;
    default:
  }
});
