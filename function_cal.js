//sumar
const obtener_suma = () => {

    let resultado = document.getElementById('resultado');
    var n1 = document.getElementById("numero1").value;
    var n2 = document.getElementById("numero2").value;
    const sumar = (n1 = 0, n2 = 0) => (parseFloat(n1) + parseFloat(n2));
    resultado.innerHTML = sumar(n1, n2);

}
//restar
const obtener_resta = () => {

    let resultado = document.getElementById('resultado');
    var n1 = document.getElementById("numero1").value;
    var n2 = document.getElementById("numero2").value;
    const restar = (n1 = 0, n2 = 0) => (parseFloat(n1) - parseFloat(n2));
    resultado.innerHTML = restar(n1, n2);

}
//Multiplicar
const obtener_multiplicacion = () => {

    let resultado = document.getElementById('resultado');
    var n1 = document.getElementById("numero1").value;
    var n2 = document.getElementById("numero2").value;
    const multiplicacion = (n1 = 0, n2 = 0) => (parseFloat(n1) * parseFloat(n2));
    resultado.innerHTML = multiplicacion(n1, n2);

}
//Dividir
const obtener_division = () => {

    let resultado = document.getElementById('resultado');
    var n1 = document.getElementById("numero1").value;
    var n2 = document.getElementById("numero2").value;
    const division = (n1 = 0, n2 = 0) => (parseFloat(n1) / parseFloat(n2));
    resultado.innerHTML = division(n1, n2);

}
//limpiar campos
const limpiar = () => {

    var num1 = document.getElementById("numero1").value = "";
    var num2 = document.getElementById("numero2").value = "";
    var resultado = document.getElementById("resultado");
    resultado.innerHTML = 0;

}

