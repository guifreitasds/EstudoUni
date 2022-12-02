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

    // while(control>1){
    //     total += base*base;
    //     control--;
    // }

    for(control=exp;control>1;control--){
        total += base*base;
    }
    res.innerHTML = `O resultado de ${base} elevado a ${exp} = ${total}`

}

function researchCinema() {
    // Exercicio 004
    var qtd = 0;
    var reg = 0;
    var bom = 0;
    var oti = 0;
    var idade = 0;
    var sumidades = 0;
    var res = document.getElementById('research');

    var sumidades = 0;
    // Fiz com apenas 5 pessoas para facilitar o teste 
    while(qtd<5){ 
        qtd++;
        idade += Number(window.prompt('Qual a sua idade?'));
        var opinion = window.prompt('Avaliação do filme [1-Regular, 2-Bom, 3-Ótimo]');
        if(opinion==1){
            reg++;
        } else if(opinion==2){
            bom++;
        } else if(opinion==3){
            oti++;
            sumidades+=idade
        }
    }

    // for(i=qtd;i<5;i++){
    //     qtd++;
    //     idade += Number(window.prompt('Qual a sua idade?'));
    //     var opinion = window.prompt('Avaliação do filme [1-Regular, 2-Bom, 3-Ótimo]');
    //     if(opinion==1){
    //         reg++;
    //     } else if(opinion==2){
    //         bom++;
    //     } else if(opinion==3){
    //         oti++;
    //         sumidades+=idade
    //     }
    // }

    console.log(qtd)
    res.innerHTML = `
    <h2>Resultado da pesquisa</h2>
    <p>Qtd. de ótimos: ${oti} pessoas</p>
    <p>Qtd. de bom: ${bom} pessoas</p>
    <p>Qtd. de regular: ${reg} pessoas</p>
    <p>Média de idades que responderam ótimo: ${Number(sumidades/oti)} anos</p>
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

    // Exercicio 005 com for
    /* 
        esc = window.prompt('Quantos valores você gostaria de multiplicar?');

        for(esc;esc>0;esc--){
            total*= window.prompt('Digite o valor a ser multiplicado');
        }
    */

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

function verifyStudents() {
    // Exercicio 007
    qtd=0;
    var qtdalunosheight = 0;
    var qtdalunosage = 0;
    var sumidade=0;
    var sumaltura=0;

    // O exercicio pede 45 alunos, fiz com 5 para facilitar o teste
    while(qtd<3){
        qtd++;
        var idade = Number(window.prompt('Digite a idade do aluno: '));
        var altura = Number(window.prompt('Digite a altura do aluno'));
        var res = document.getElementById('resverifyst');

        if(altura<1.70){
            sumidade += idade;
            qtdalunosheight++;
        }
        if(idade>20){
            sumaltura += altura;
            qtdalunosage++;
        }
    }

    res.innerHTML = `
    <p>A idade média dos alunos com menos de 1,70m de altura é ${sumidade/qtdalunosheight}</p>
    <p>A altura média dos alunos com mais de 20 anos é ${sumaltura/qtdalunosage.toFixed(2)}</p>
    `
}


function verifyAge() {
    // Exercicio 009
    var lilchild = 0;
    var bigchild = 0;
    var teen = 0;
    var adult = 0;
    var old = 0;
    var res = document.getElementById('resageverify');
    while(true){
        age = Number(window.prompt('Digite a idade da pessoa [-1 para parar]'));
        if(age<0){
            break;
        }
        if(age>=0 && age<=5){
            lilchild++;
        } else if(age>=6 && age<=13){
            bigchild++;
        }  else if(age>=14 && age<=17){
            teen++;
        } else if(age>=18 && age<=59){
            adult++;
        } else if(age>=60){
            old++;
        }
    }

    res.innerHTML = `
    <p>N° de crianças pequenas: ${lilchild}</p>
    <p>N° de crianças grandes: ${bigchild}</p>
    <p>N° de adolescentes: ${teen}</p>
    <p>N° de adultos: ${adult}</p>
    <p>N° de idosos: ${old}</p>`
}


function researchCinemadowhile() {
    // Exercicio 010
    var qtd = 0;
    var reg = 0;
    var bom = 0;
    var oti = 0;
    var idade = 0;
    var sumidades = 0;
    var res = document.getElementById('research');

    var sumidades = 0;
    // Fiz com apenas 5 pessoas para facilitar o teste 
    do{
        qtd++;
        idade = Number(window.prompt('Qual a sua idade?'));
        var opinion = window.prompt('Avaliação do filme [1-Regular, 2-Bom, 3-Ótimo]');
        if(opinion==1){
            reg++;
        } else if(opinion==2){
            bom++;
        } else if(opinion==3){
            oti++;
            sumidades+=idade;
        }
        if(reg==10){
            break;
        }
    }while(qtd<5)

    console.log(qtd)
    res.innerHTML = `
    <h2>Resultado da pesquisa</h2>
    <p>Qtd. de ótimos: ${oti} pessoas</p>
    <p>Qtd. de bom: ${bom} pessoas</p>
    <p>Qtd. de regular: ${reg} pessoas</p>
    <p>Média de idades que responderam ótimo: ${Number(sumidades/oti)} anos</p>
    <p>Porcentagem de bom: ${(bom/qtd)*100}%</p>`
}