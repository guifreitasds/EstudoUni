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