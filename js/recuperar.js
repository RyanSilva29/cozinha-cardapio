import {mostrarMsg} from "./util.js";
import {recuperarSenha} from "./api.js";

document.getElementById('formRecuperar').addEventListener('submit', async(event)=>{
    event.preventDefault();
    const email=document.getElementById('email').value.trim();
    if(!email){
        mostrarMsg('Por favor, preencha o email .', 'red');
        return
    }
    const botao= document.getElementById('enviar')
    botao.disabled= true;
    botao.textContent='enviando';
    const{sucesso, msg}=await recuperarSenha(email);
    botao.disabled=false;
    botao.textContent='Recuperar senha';
    if (sucesso) {
        mostrarMsg(`Instruções de recuperação enviadas para seu emal, ${user.nome}`, 'green')
        setTimeout(() => {
            window.location.href='login.html'
        });
    }else{
        mostrarMsg(msg||'Não foi possível enviar o email de recuperação. Verifique o email ', 'red')
    }
});