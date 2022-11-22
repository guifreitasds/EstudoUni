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