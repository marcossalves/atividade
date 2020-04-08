function placas() {
  var placa = prompt("                                  Digite o número da sua placa");
  if (placa.length < 7 || placa.length > 7) {
    alert("                Você deve inserir os 7 dígitos com letras e números");
  } else {

    var comprimento1 = placa.substring(6, 7);

    console.log(comprimento1);

    switch (comprimento1) {
      case "1":
        comprimento1 = "1 não podem circular na segunda - feira";
        break;

      case "2":
        comprimento1 = "2  não podem circular na segunda - feira";
        break;

      case "3":
        comprimento1 = "3 não podem circular na terça - feira";
        break;

      case "4":
        comprimento1 = "4 não podem circular na terça - feira";
        break;

      case "5":
        comprimento1 = "5 não podem circular na quarta - feira";
        break;

      case "6":
        comprimento1 = "6 não podem circular na quarta - feira";
        break;

      case "7":
        comprimento1 = "7 não podem circular na quinta - feira";
        break;

      case "8":
        comprimento1 = "8 não podem circular na quinta - feira";
        break;

      case "9":
        comprimento1 = "8 não podem circular na Sexta - feira";
        break;
    }
    alert("             Placas com final " + comprimento1);
  }
}
