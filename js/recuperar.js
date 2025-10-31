import {mostrarMsg} from "./util.js";
import {recuperarSenha} from "./api.js";

document.getElementById('formRecuperar').addEventListener('submit', async(event)=>{
    event.preventDefault;
    const email=document.getElementById('email').value.trim();
    if(!email){
        mostrarMsg('Por favor, preencha o email .', red);
        return
    }
    const botao= document.getElementById('entrar')
    botao.textContent='carregando';
    const{sucesso, msg, user}=await loginCozinheira(email);
    botao.disabled=false;
    botao.textContent='entrar';
    if (sucesso) {
        mostrarMsg(`Bem vindo, ${user.nome}`, green)
        setTimeout(() => {
            window.location.href='sistema.html'
        }, 1500);
    }else{
        mostrarMsg(msg||'Falha ao fazer login. Verifique o email ', red)
    }
});