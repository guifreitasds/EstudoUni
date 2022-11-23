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
    // Exercicio 003
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

function researchCinema() {
    // Exercicio 004
    var qtd = 0;
    var reg = 0;
    var bom = 0;
    var oti = 0;
    var res = document.getElementById('research');

    var sumidades = 0;
    // Fiz com apenas 5 pessoas para facilitar o teste 
    while(qtd<5){ 
        qtd++;
        sumidades += Number(window.prompt('Qual a sua idade?'));
        var opinion = window.prompt('Avaliação do filme [1-Regular, 2-Bom, 3-Ótimo]');
        if(opinion==1){
            reg++;
        } else if(opinion==2){
            bom++;
        } else if(opinion==3){
            oti++;
        }
    }

    // for(i=qtd;i<5;i++){
    //     qtd++;
    //     sumidades += Number(window.prompt('Qual a sua idade?'));
    //     var opinion = window.prompt('Avaliação do filme [1-Regular, 2-Bom, 3-Ótimo]');
    //     if(opinion==1){
    //         reg++;
    //     } else if(opinion==2){
    //         bom++;
    //     } else if(opinion==3){
    //         oti++;
    //     }
    // }

    console.log(qtd)
    res.innerHTML = `
    <h2>Resultado da pesquisa</h2>
    <p>Qtd. de ótimos: ${oti} pessoas</p>
    <p>Qtd. de bom: ${bom} pessoas</p>
    <p>Qtd. de regular: ${reg} pessoas</p>
    <p>Média de idades: ${Number(sumidades/qtd)} anos</p>
    <p>Porcentagem de bom: ${(bom/qtd)*100}%</p>`
}

function calcmulti() {
    // Exercicio 005
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



function calcSalary() {
    // Exercicio 006
    var namemaior = '';
    var maior = 0;
    var namemenor = '';
    var menor = 99999999;
    var res = document.getElementById('resalary');
    somasalary=0;
    var qtdfuncs = document.getElementById('qtdfuncid').value;
    const qtdfuncsfix=qtdfuncs;
    while(qtdfuncs!=0){
        var name = window.prompt('Nome do funcionário');
        var salary = Number(window.prompt('Salário do funcionário'));
        somasalary+=salary;
        if(salary>maior){
            maior=salary;
            namemaior=name;
        }
        if(salary<menor){
            menor = salary;
            namemenor = name;
        }
        qtdfuncs--;
    }

    // for(i=qtdfuncs;i!=0;i--){
    //     var name = window.prompt('Nome do funcionário');
    //     var salary = Number(window.prompt('Salário do funcionário'));
    //     somasalary+=salary;
    //     if(salary>maior){
    //         maior=salary;
    //         namemaior=name;
    //     }
    //     if(salary<menor){
    //         menor = salary;
    //         namemenor = name;
    //     }
    // }
    res.innerHTML = `
    <p>Média dos salários: R$${somasalary/qtdfuncsfix}</p>
    <p>Maior salário: ${namemaior}, salário de R$${maior}</p>
    <p>Menor salário: ${namemenor}, salário de R$${menor}</p>
    `
}