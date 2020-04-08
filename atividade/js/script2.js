function leitordata() {
    var data = prompt("Digite a data no formato dd/mm/aaaa");

    if (data.length < 10 || data.length > 10) {
        alert("Você deve inserir a data completa com 10 digitos");
    } else {
        var dd = data.substring(0, 2);
        var mm = data.substring(3, 5);
        var aaaa = data.substring(6, 10);
        console.log(mm);

        switch (mm) {
            case "01":
                mm = "Janeiro";
                break;
            case "02":
                mm = "Fevereiro";
                break;
            case "03":
                mm = "Março";
                break;
            case "04":
                mm = "Abril";
                break;
            case "05":
                mm = "Maio";
                break;

            case "06":
                mm = "Junho";
                break;
            case "07":
                mm = "Julho";
                break;
            case "08":
                mm = "Agosto";
                break;
            case "09":
                mm = "Setembro";
                break;
            case "10":
                mm = "Outubro";
                break;
            case "11":
                mm = "Novembro";
                break;
            case "12":
                mm = "Dezembro";
                break;
            default:
                mm = "Inexistente";
                break;
        }
        alert(+ dd + " de " + mm + " de " + aaaa);
    }
}
