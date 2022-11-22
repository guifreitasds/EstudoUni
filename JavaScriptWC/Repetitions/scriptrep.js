// Lista de laços repetitivos

function fatorial(num) {

    // Exercicio 001

    var res = document.getElementById('resfatorial');
    var numesc = num;
    var total = num;
    // while (num>1) {
    //     num--;
    //     total *= num;
    // }

    for(i=num-1;i>1;i--){
        total*=i;
    }
    res.innerHTML = `O resultado do fatorial de ${numesc} é ${Number(total)}`;
}


function storebonus() {
    // Exercicio 002

    // Recado ao prof: Confesso que não entendi como utilizar o laço de repetição aqui
    var name = document.getElementById('nameid').value;
    var total = document.getElementById('valuebuyid').value;
    var res = document.getElementById('resbonus');

    if(total>=10000){
        var percentbonus = 15;
        var bonus = total*(percentbonus/100);
    } else{
        percentbonus = 10;
        bonus = total*(percentbonus/100);
    }

    res.innerHTML = `Olá, ${name}. Você recebeu um bônus de ${percentbonus}% em cima do valor total das suas compras no ano, com o total de R$${bonus}`
}

function calcpot() {
    var res = document.getElementById('rescalcpot');
    var base = document.getElementById('baseid').value;
    var total = 0;
    var exp = document.getElementById('expid').value;
    var control = exp

    while(control>1){
        total += base*base;
        control--;
    }
    res.innerHTML = `O resultado de ${base} elevado a ${exp} = ${total}`

}

function calcmulti() {
    var esc = 0;
    var total = 1;
    var res = document.getElementById('rescalcmulti');

    while(true){
        esc = window.prompt('Quer Multiplicar? (Digite 1 abaixo para parar de multiplicar)');
        if(esc==1){
            break;
        }
        total*= window.prompt('Digite o valor a ser multiplicado');

    }

    res.innerHTML = `O resultado do produto entre os valores digitados é: ${total}`

}