let users = []
let data = new Date()
console.log(data.getDay())


if(localStorage.getItem('cadastrados')){
    users = JSON.parse(localStorage.getItem('cadastrados'))
}

function search_user(guarda_cpf){
    let index = users.findIndex((item)=>{
        return item.cpf == guarda_cpf
    })
    return index
}

function check_size(item) {
    if(item.trim() <=2 || item.trim().length == 0){
        alert('Minimo de 3 caracteres')
        // Trocar para uma mensagem INNER HTML com setTimeOut
    }
}

function on_register() {
    let name = document.getElementById('nameid').value
    let password = document.getElementById('passwid').value
    let mail = document.getElementById('mailid').value
    let cpf = document.getElementById('cpfid').value
    let birthdate = document.getElementById('dateid').value

    check_size(name)
    check_size(password)

    if(mail.slice(mail.trim().indexOf('@'), mail.trim().length-1).length <= 9){
        //Mensagem INNER HTML com setTIme OUT de erro de email
    } else{
        if(search_user(cpf)==-1){
            let objPerson = {'nome': name.toLowerCase().trim(), 'passw': password, 'mail': mail, 'cpf': cpf, 'birthdate': birthdate, 'registerdate': `${data.getUTCDate()}/${data.getMonth()+1}/${data.getFullYear()}`}
            users.push(objPerson)
            localStorage.setItem('cadastrados', JSON.stringify(users))
            alert('Usuário Cadastrado!')
            location.assign('login.html')
            
        } else{
            // Colocar mensagem de erro, usuário já cadastrado
        }
    }   
}


let enter_name = document.getElementById('nameid')
let enter_pass = document.getElementById('passwid')

enter_name.addEventListener('keypress',(event)=>{
    if(event.key == "Enter"){
        on_register();
    }
})
enter_pass.addEventListener('keypress',(event)=>{
    if(event.key == "Enter"){
        on_register();
    }
})

