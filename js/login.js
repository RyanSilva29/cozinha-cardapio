import { mostrarMsg } from './util.js';
import { loginCozinheira } from "./api.js";

document.getElementById('formLogin').addEventListener('submit', async(event)=>{
    event.preventDefault;
    const email=document.getElementById('email').value.trim();
    const senha=document.getElementById('senha').value.trim();
    if(!email||!senha){
        mostrarMsg('Por favor, preencha email e senha.', red);
        return
    }
    const botao= document.getElementById('entrar')
    botao.textContent='carregando';
    const{sucesso, msg, user}=await loginCozinheira(email,senha);
    botao.disabled=false;
    botao.textContent='entrar';
    if (sucesso) {
        mostrarMsg(`Bem vindo, ${user.nome}`, green)
        setTimeout(() => {
            window.location.href='sistema.html'
        }, 1500);
    }else{
        mostrarMsg(msg||'Falha ao fazer login. Verifique email e senha', red)
    }
});