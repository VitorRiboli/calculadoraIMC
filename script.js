function calcular(){
    let peso = parseInt(document.getElementById('peso').value);
    let altura = parseInt(document.getElementById("altura").value);
    let alturaFinal = altura / 100;

    let imc = (peso / (alturaFinal * alturaFinal)).toFixed(2);

    let resultado = document.getElementById("resultado");

    console.log(imc);

    if(imc < 18.5) {
        resultado.innerHTML = `<p>Seu IMC é: ${imc}, Abaixo do peso</p>`;
    } else if(imc >= 18.5 && imc <= 24.9) {
        resultado.innerHTML = `<p>Seu IMC é: ${imc}, Peso normal</p>`;
    } else if(imc >= 25 && imc <= 29.9) {
        resultado.innerHTML = `<p>Seu IMC é: ${imc}, Sobrepeso</p>`;
    } else if(imc >= 30 && imc <= 34.9) {
        resultado.innerHTML = `<p>Seu IMC é: ${imc}, Obesidade grau 1</p>`;
    } else if(imc >= 35 && imc <= 39.9) {
        resultado.innerHTML = `<p>Seu IMC é: ${imc}, Obesidade grau 2</p>`;
    } else if(imc > 40) {
        resultado.innerHTML = `<p>Seu IMC é: ${imc}, Obesidade grau 3</p>`;
    }

}