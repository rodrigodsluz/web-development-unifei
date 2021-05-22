//a) Valide o campo idade: só pode conter números entre 10 e 90
const ageValidation = (data) => {
  let inputData = parseFloat(data.value);

  if (
    inputData < 10 ||
    inputData > 90 ||
    inputData % 1 != 0 ||
    isNaN(inputData)
  ) {
    alert("Só pode conter números entre 10 e 90 ");
    data.value = "";

    return false;
  }

  return true;
};

//b) Valide o email, obrigando que a string contenha o símbolo de “@”
const emailValidation = (data) => {
  let inputData = data.value;

  if (inputData.search("@") == -1) {
    alert("O email deve conter o símbolo de “@”");

    data.value = "";

    return false;
  }

  return true;
};

//c) Valide os check boxes, permitindo que no máximo 3 opções possam ser selecionadas
const checkboxValidation = () => {
  let chosen = 0;

  let amount = document.forms["checkboxForm"].linguagens.length;

  for (let i = 0; i < amount; i++) {
    if (document.forms["checkboxForm"].linguagens[i].checked) {
      chosen++;
    }

    if (chosen > 3) {
      alert("No máximo 3 opções podem ser selecionadas");
      document.forms["checkboxForm"].linguagens[i].checked = false;

      return false;
    }
  }

  return true;
};

//Exiba mensagem de sucesso quando os dados forem válidos.
const handleSubmit = () => {
  let nameValue = document.getElementById("name");

  let ageValue = document.getElementById("age");

  let emailValue = document.getElementById("email");

  let chosen = 0;

  let amount = document.forms["checkboxForm"].linguagens.length;

  for (let i = 0; i < amount; i++) {
    if (document.forms["checkboxForm"].linguagens[i].checked) chosen += 1;
  }

  if (
    nameValue.value == "" ||
    ageValue.value == "" ||
    emailValue.value == "" ||
    chosen == 0
  ) {
    alert(
      "Todos os campos devem ser preenchidos e uma linguagem deve ser escolhida"
    );
  } else {
    alert("Os dados são válidos, parabéns, sucesso!");
  }
};
