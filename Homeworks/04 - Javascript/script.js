//Exercise 1
function findWord() {
  var word = "";

  var value = document.getElementById("exercise-1").value;

  value.split(" ").forEach((v) => {
    if (v.trim().length > word.length) {
      word = v.trim();
    }
  });

  document.getElementById("solution-1").innerHTML =
    "A maior palavra contida na string é: " + word;
}

//Exercise 2
function calculateDate() {
  var birthDate = document.getElementById("exercise-2").value;

  var split = Array.from(birthDate.split("-"), Number);

  var seconds = 0;

  var minutes = 0;

  var hours = 0;

  var days = 0;

  var year = new Date().getFullYear();

  var month = new Date().getMonth();

  var age = 0;

  split[1] < month ? (age = year - split[0]) : (age = year - split[0] - 1);

  days = age * 365;

  hours = days * 24;

  minutes = hours * 60;

  seconds = minutes * 60;

  document.getElementById("solution-2").innerHTML =
    age +
    " anos, " +
    days +
    " dias, " +
    hours +
    " horas, " +
    minutes +
    " minutos e " +
    seconds +
    " segundos";
}

//Exercise 3
function arithmeticOperations() {
  var firstNum = parseInt(document.getElementById("exercise-3-1").value);

  var secondNum = parseInt(document.getElementById("exercise-3-2").value);

  var soma = firstNum + secondNum;

  var produto = firstNum * secondNum;

  var division = firstNum / secondNum;

  var resto = firstNum % secondNum;

  document.getElementById("exercise-3-3").innerHTML = "Operação";

  document.getElementById("exercise-3-4").innerHTML = "value";

  document.getElementById("result-3-1").innerHTML =
    firstNum + " + " + secondNum;
  document.getElementById("result-3-2").innerHTML = soma;

  document.getElementById("result-3-3").innerHTML =
    firstNum + " * " + secondNum;
  document.getElementById("result-3-4").innerHTML = produto;

  document.getElementById("result-3-5").innerHTML =
    firstNum + " / " + secondNum;
  document.getElementById("result-3-6").innerHTML = division;

  document.getElementById("result-3-7").innerHTML =
    firstNum + " % " + secondNum;
  document.getElementById("result-3-8").innerHTML = resto;
}

//Exercise 4
function calculateSalary() {
  var firstNum = parseInt(document.getElementById("exercise-4").value);

  var sum = 0;

  var percentual = "";

  var sub = 0;

  if (firstNum <= 280) {
    sum = firstNum * 1.2;
    percentual = "20%";
    sub = sum - firstNum;
  } else if (firstNum > 280 && firstNum <= 700) {
    sum = firstNum * 1.15;
    percentual = "15%";
    sub = sum - firstNum;
  } else if (firstNum > 700 && firstNum <= 1500) {
    sum = firstNum * 1.2;
    percentual = "10%";
    sub = sum - firstNum;
  } else if (firstNum > 1500) {
    sum = firstNum * 1.05;
    percentual = "5%";
    sub = sum - firstNum;
  }

  document.getElementById("result-4").innerHTML =
    "Salário antes do reajuste: " +
    firstNum +
    "<br/>Percentual de aumento aplicado: " +
    percentual +
    "<br/>value do aumento: " +
    sub +
    "<br/>Novo salário após o aumento: " +
    sum;
}

//Exercise 8
function newDateFormat() {
  var currentDate = document.getElementById("exercise-8").value;

  var split = currentDate.split("-");

  var month = "";

  switch (split[1]) {
    case "01":
      month = "Janeiro";

      break;
    case "02":
      month = "Fevereiro";

      break;
    case "03":
      month = "Março";

      break;
    case "04":
      month = "Abril";

      break;
    case "05":
      month = "Maio";

      break;
    case "06":
      month = "Junho";

      break;
    case "07":
      month = "Julho";

      break;
    case "08":
      month = "Agosto";

      break;
    case "09":
      month = "Setembro";

      break;
    case "10":
      month = "Outubro";

      break;
    case "11":
      month = "Novembro";

      break;
    case "12":
      month = "Dezembro";

      break;

    default:
      break;
  }

  document.getElementById("result-8").innerHTML =
    split[2] + " de " + month + " de " + split[0];
}

//Exercise 9
function calculateMedia() {
  var sum = 0;

  var cont = 0;

  var value = prompt("Entre com o valor desejado: ");
  value = parseFloat(value);
  while (value != 0) {
    cont += 1;
    sum += value;
    value = prompt("Entre com o valor desejado: ");

    value = parseFloat(value);
  }
  document.getElementById("solution-9").innerHTML =
    "A média dos valores digitados foi: " + sum / cont;
}

//Exercise 10
function maiorAltura() {
  var name1 = document.getElementById("exercise-10-name1").value;

  var name2 = document.getElementById("exercise-10-name2").value;

  var name3 = document.getElementById("exercise-10-name3").value;

  var name4 = document.getElementById("exercise-10-name4").value;

  var name5 = document.getElementById("exercise-10-name5").value;

  var h1 = parseFloat(document.getElementById("exercise-10-altura-1").value);

  var h2 = parseFloat(document.getElementById("exercise-10-altura-2").value);

  var h3 = parseFloat(document.getElementById("exercise-10-altura-3").value);

  var h4 = parseFloat(document.getElementById("exercise-10-altura-4").value);

  var h5 = parseFloat(document.getElementById("exercise-10-altura-5").value);

  var arr = [name1, h1, name2, h2, name3, h3, name4, h4, name5, h5];

  var heightNumbers = [h1, h2, h3, h4, h5];

  var isEmpty = false;

  arr.map((item) => {
    if (item.length == 0) isEmpty = true;
  });

  if (isEmpty) alert("Nenhum campo pode estar vazio");

  var maxHeight = heightNumbers.reduce((a, b) => {
    return Math.max(a, b);
  });

  var indice = arr.indexOf(maxHeight);

  var finalName = arr[indice - 1];

  document.getElementById("result-10").innerHTML =
    "O nome da pessoa mais alta é " +
    finalName +
    " e a altura dela é " +
    maxHeight;
}
