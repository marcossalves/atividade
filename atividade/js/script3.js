function carro() {

    var horas = prompt(" Quantas horas o carro ficou no estacionamento ? ");
    var valor = 2.00;

    horas = parseFloat(horas);
    valor = parseFloat(valor);
    var multiplicar = horas * valor;
    alert(" O custo do estacionamento do carro é de " + multiplicar + " Reais ");
}

function onibus() {

    var horas = prompt(" Quantas horas o Ônibus ficou no estacionamento ? ");
    var valor = 3.00;
    horas = parseFloat(horas);
    valor = parseFloat(valor);
    var multiplicar = horas * valor;

    alert(
        " O custo do estacionamento do Ônibus é de " + multiplicar + " Reais ");
}

function caminhao() {

    var horas = prompt(" Quantas horas o caminhão ficou no estacionamento ? ");
    var valor = 4.00;
    horas = parseFloat(horas);
    valor = parseFloat(valor);
    var multiplicar = horas * valor;

    alert(
        " O custo do estacionamento do caminhão é de " + multiplicar + " Reais "

    );
}
