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