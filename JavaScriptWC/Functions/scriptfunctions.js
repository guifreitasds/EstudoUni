function division(x,y) {
    var res = document.getElementById('resdivision');
    if(x==0){
        x = Number(window.prompt('ERRO, divisão por zero não autorizada, digite um novo valor!'));
    }
    if(y==0){
        y = Number(window.prompt('ERRO, divisão por zero não autorizada, digite um novo valor!'));
    }
    res.innerHTML = `A divisão entre ${x} e ${y} = ${x/y}`;
}

function triangle(x,y,z) {
    var res = document.getElementById('restriangle')
    if(x==y && y==z){
        res.innerHTML = `Esses lados representam um triângulo equilátero`
    } else if(x==y || y==z || z==x){
        res.innerHTML = `Esses lados representam um triângulo isosceles`
    } else{
        res.innerHTML = `Esses lados representam um triângulo escaleno`
    }
}

function storediscount(buyvalue) {
    var res = document.getElementById('restored')
    if(buyvalue>500){
        res.innerHTML = `Você recebeu um desconto de ${buyvalue*0.1}(10%) em cima do valor da sua compra de R$${buyvalue}, valor final: R$${buyvalue-buyvalue*0.1}` 
        return `Você recebeu um desconto de ${buyvalue*0.1}(10%) em cima do valor da sua compra de R$${buyvalue}, valor final: ${buyvalue-buyvalue*0.1}`
    } else{
        res.innerHTML = `Você recebeu um desconto de ${buyvalue*0.15}(10%) em cima do valor da sua compra de R$${buyvalue}, valor final: R$${buyvalue-buyvalue*0.15}`
        return `Você recebeu um desconto de ${buyvalue*0.15}(10%) em cima do valor da sua compra de R$${buyvalue}, valor final: ${buyvalue-buyvalue*0.15}`
    }
}