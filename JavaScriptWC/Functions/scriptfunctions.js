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

function storetypepay(buyvalue, paytype) {
    var res = document.getElementById('restorediscount');
    console.log(buyvalue)
    if(paytype==1){
        buyvalue -= buyvalue*0.1;
        res.innerHTML = `Opção à vista escolhida, valor total: ${buyvalue}`;
    } else if(paytype==2){
        res.innerHTML = `Opção dividir em 2 vezes escolhida, valor total: ${buyvalue}`;
    } else if(paytype==3){
        res.innerHTML = `Opção dividir em mais de 2 vezes, valor total: ${buyvalue}`;
    }
}

function colandlines(x, y) {
    var res = document.getElementById('rescandl');
    while(y!=0){
        res.innerHTML += `<p>${'*'.repeat(x)}</p>`;
        y--;
    }
}

function pot(b, e) {
    var res = document.getElementById('resbasexp');
    var calc = b**e;

    res.innerHTML = `O resultado de ${b} elevado a ${e} = ${calc}`;
}

function createArray(size) {
    var res = document.getElementById('resarray');
    var array = [];
    for(i=0;i<size;i++){
        value = window.prompt(`Digite o valor a ser inserido na posição ${i}`);
        array[i]=value;
    }

    var find = window.prompt('Qual número você gostaria de buscar?');
    var pos = array.indexOf(find);
    if(pos==-1){
        res.innerHTML = `Valor ${find} não encontrado`;
    } else{
    res.innerHTML = `Valor ${find} encontrado na posição ${pos}`;
    }
}

function calcDistance(vf, time, accel) {
    var res = document.getElementById('resdistance');
    vi = vf-(accel/time);
    var distance = vi*time+accel*time**2;

    res.innerHTML=`A distância percorrida foi de ${distance.toFixed(2)}m`
}