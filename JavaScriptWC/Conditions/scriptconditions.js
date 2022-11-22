function checarIMC() {
    // Exercicio 001 e 002
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
    // Exercicio 003
    var n = document.getElementById('numberid').value;

    var res = document.getElementById('reseven');

    if(n%2==0){
        res.innerHTML = `N° ${n} par`;
    } else{
        res.innerHTML = `N° ${n} ímpar`;
    }
}

function comprarComb() {
    // Exercicio 004 e 005
    var typegas = document.getElementById('numbergas').value;
    var qtd = document.getElementById('qtdgas').value;
    var res = document.getElementById('resbuy');
    if(typegas==1){
        var total = 3.16*qtd;
        res.innerHTML = `O total da compra é de $${total.toFixed(2)}`;
    }
    else if(typegas==2){
        var total = 4.19*qtd;
        res.innerHTML = `O total da compra é de R$${total.toFixed(2)}`;
    }
}

function checarIdade() {
    // Exercicio 006
    var year = document.getElementById('ageid').value;
    var data = new Date();
    const actual = data.getFullYear();
    var res = document.getElementById('resage');

    if(actual-year>=18){
        res.innerHTML = `Idade ${actual-year}, passagem permitida`;
    } else{
        res.innerHTML = `Idade ${actual-year}, passagem não permitida`;
    }
}

function comprarMor() {
    // Exercicio 007
    var qtd = document.getElementById('strawid').value;
    var total = 0;
    var res = document.getElementById('resstraw')
    if(qtd>5){
        var total = 2.20*qtd;
    }else{
        var total = 2.50*qtd;
    }

    res.innerHTML = `O resultado da compra de ${qtd}Kg de morangos é de R$${total.toFixed(2)}`

}

function checarVac() {
    // Exercicio 008
    var pac = document.getElementById('childid').value;
    var age = document.getElementById('agechild').value;

    var res = document.getElementById('resvac');

    if((pac=='C' || pac=='c') && age <=5){
        res.innerHTML = `Criança de ${age} anos, vacinação permitida`;
    }else{
        res.innerHTML = `Paciente de ${age} anos, vacinação não permitida`;
    }
}

function checarBuy() {
    // Exercicio 009
    var price = document.getElementById('priceid').value;
    var qtd = document.getElementById('qtdid').value;

    var res = document.getElementById('resmerc');

    var total = price*qtd;

    if(total>100){
        discount = total*0.05;
        total -= discount;
    }
    res.innerHTML = `O desconto na compra foi de R$${discount} e o total é de $${total}`;
    
}

function sellOfCorretor() {
    // Exercicio 010
    var name = document.getElementById('namecorrid').value;
    var sell = document.getElementById('pricesellid').value;
    var percommi = 0;
    var res = document.getElementById('rescorr');

    if(sell>50000){
        var percommi = 12;
        var comission = sell*(percommi/100);
    } else if(sell>=30000){
        var percommi = 9.5;
        var comission = sell*(percommi/100);
    } else{
        var percommi = 7;
        var comission = sell*(percommi/100);
    }

    res.innerHTML = `Olá, ${name}! Você fez uma venda de R$${sell}, Parabéns aqui está sua comissão de ${percommi}%: R$${comission.toFixed(2)}`;
}

function AccountWater() {
    // Exercicio 011
    var constype = document.getElementsByName('escons');
    var qtdwater = document.getElementById('qtdwater').value;
    var conta = 0;
    var res = document.getElementById('reswater');

    if(constype[0].checked){
        var consumidor = 'Residencial';
        var conta = 5+(0.05*qtdwater);
    } else if(constype[1].checked){
        var consumidor = 'Comercial';
        if(qtdwater>=80){
            conta += 500;
        }
        conta += 0.25*qtdwater;
    } else if (constype[2].checked){
        var consumidor = 'Industrial';
        if(qtdwater>=100){
            conta += 800;
        }
        conta += 0.04*qtdwater;
    }
    res.innerHTML = `Você é consumidor ${consumidor} e o total a pagar da sua conta é de R$${conta.toFixed(2)}`;
}

function SalaryIncrease() {
    // Exercicio 012
    var typeplan = document.getElementsByName('escwork');
    var salary = Number(document.getElementById('salarywork').value);
    var typework = '';
    var percent = 0;
    var res = document.getElementById('reswork');

    if(typeplan[0].checked){
        salary += salary*0.10;
        typework = 'A';
        percent = 10;
    } else if(typeplan[1].checked){
        salary += salary*0.15;
        typework = 'B';
        percent = 15;
    } else if (typeplan[2].checked){
        salary += salary*0.20;
        typework = 'C';
        percent = 20;
    }
    res.innerHTML = `Você tem o plano ${typework} e o total do seu salário após o aumento de ${percent}% é de R$${salary.toFixed(2)}`;
}


function VerifyPrice() {
    // Exercicio 013
    var typeproduct = document.getElementsByName('esctype');
    var pricecust = Number(document.getElementById('pricecust').value);
    var percent = 0;
    var res = document.getElementById('resprice');

    if(typeproduct[0].checked || typeproduct[1].checked){
        pricecust += pricecust*0.80;
        percent = 80;
    } else if(typeproduct[2].checked || typeproduct[3].checked){
        pricecust += pricecust;
        percent = 100;
    } else if (typeproduct[4].checked || typeproduct[5].checked){
        pricecust += pricecust*0.90;
        percent = 90;
    }

    res.innerHTML = `O preço de venda recomendado a esse produto é de R$${pricecust}, com margem de ${percent}%`
}

function comprarCombwithdisc() {
    // Exercicio 014
    var typegas = document.getElementById('numbergaswithdisc').value;
    var qtd = document.getElementById('qtdgaswithdisc').value;
    var res = document.getElementById('resbuygas');

    var pricealcohol = 3.16;
    var pricegaso = 4.20;
    if(typegas==1){
        if(qtd>20){
            pricealcohol = 3.14;
        }
        var total = pricealcohol*qtd;
        res.innerHTML = `O total da compra é de $${total.toFixed(2)}`;
    }
    else if(typegas==2){
        if(qtd>30){
            pricegaso = 4.19;
        }
        var total = pricegaso*qtd;
        res.innerHTML = `O total da compra é de R$${total.toFixed(2)}`;
    }
}