const API_USUARIOS = 'https://vercel.com/ryansilva29s-projects/api-storage-cantina-main';
async function loginCozinheira(email, senha) {
    try {
    const res= await fetch(API_USUARIOS+"/login",{
    method:"POST",
    headers:{'content-type':'application/json'},
    
    })
    } catch (error) {
        console.error("Erro ao fazer login",error);
        return{sucesso:false, mensagem:'Erro de conexão a API'}
    }
}
async function cadastrarCozinheira(nome, email, senha) {
    try {

    } catch (error) {
        console.error("Erro ao fazer cadastro",error);
        return{sucesso:false, mensagem:'Erro de conexão a API'}
    }
}
async function recuperarSenha(email) {
    try {

    } catch (error) {
        console.error("Erro ao tentar recuperar senha",error);
        return{sucesso:false, mensagem:'Erro de conexão a API'}
    }
}
