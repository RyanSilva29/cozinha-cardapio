import { mostrarMsg } from './util.js';
import { cadastrarCozinheira } from "./api.js";

document.getElementById('formCadastrar').addEventListener('submit', async (event) => {
    event.preventDefault();
    const nome=document.getElementById('nome').value.trim();
    const email = document.getElementById('email').value.trim();
    const senha = document.getElementById('senha').value.trim();
    const confirmaSenha=document.getElementById('confirmar').value.trim()
    if (!nome || !email || !senha || !confirmaSenha) {
        mostrarMsg('Por favor, preencha todos os campos', 'red');
        return
    }
    if (senha !==confirmaSenha) {
        mostrarMsg('As senhas não conferem', 'red')
        return;
    }
    const botao = document.getElementById('cadastrar')
    botao.disabled= true;
    botao.textContent = 'cadastrando';
    const { sucesso, msg} = await cadastrarCozinheira(nome,email,senha);
    botao.disabled = false;
    botao.textContent = 'Cadastrar';
    if (sucesso) {
        mostrarMsg('Cadastro realizado com sucesso!', 'green')
        setTimeout(() => {
            window.location.href = 'login.html'
        }, 1500);
    } else {
        mostrarMsg(msg,'red')
    }
});