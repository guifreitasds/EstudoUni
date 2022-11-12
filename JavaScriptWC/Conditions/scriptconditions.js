function checarIMC() {
    var weight = document.getElementById('weight');
    var height = document.getElementById('height');
    var resultado ='';

    var res = document.getElementById('resIMC');

    var imc = weight.value/(height.value*height.value);

    if(imc<18.5){
        resultado = 'Abaixo do peso';
    }
    else if(imc>18.5 && imc<24.9){
        resultado = 'Peso ideal';
    }
    else if(imc>24.9 && imc<29.9){
        resultado = 'Acima do peso';
    }
    else if(imc>29.9 && imc<34.9){
        resultado = 'em Obesidade Grau I';
    }
    else if(imc>34.9 && imc<39.9){
        resultado = 'em Obesidade Grau II';
    }
    else if(imc>=40){
        resultado = 'em Obesidade mórbida';
    }

    res.innerHTML = `Seu IMC é de ${imc.toFixed(1)} e você está ${resultado}`;


}

function checarPI() {
    var n = document.getElementById('numberid').value;

    var res = document.getElementById('reseven');

    if(n%2==0){
        res.innerHTML = `N° ${n} par`;
    } else{
        res.innerHTML = `N° ${n} ímpar`;
    }
}

function comprarComb() {
    var typegas = document.getElementById('numbergas').value;
    var qtd = document.getElementById('qtdgas').value;
    var res = document.getElementById('resbuy');
    if(typegas==1){
        var total = 3.16*qtd
        res.innerHTML = `O total da compra é de $${total.toFixed(2)}`
    }
    else if(typegas==2){
        var total = 4.19*qtd
        res.innerHTML = `O total da compra é de R$${total.toFixed(2)}`
    }
}

function checarIdade() {
    var year = document.getElementById('ageid').value;
    var data = new Date();
    const actual = data.getFullYear()
    var res = document.getElementById('resage')

    if(actual-year>=18){
        res.innerHTML = `Idade ${actual-year}, passagem permitida`
    } else{
        res.innerHTML = `Idade ${actual-year}, passagem não permitida`
    }
}