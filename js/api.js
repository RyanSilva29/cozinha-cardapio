const API_USUARIOS = 'https://api-storage-cantina-main-theta.vercel.app/';
async function loginCozinheira(email, senha) {
    try {
    const res= await fetch(API_USUARIOS+"/login",{
    method:"POST",
    headers:{'content-type':'application/json'},
    body: JSON.stringify({email,senha})
    })

    } catch (error) {
        console.error("Erro ao fazer login",error);
        return{sucesso:false, mensagem:'Erro de conexão a API'}
    }
}
async function cadastrarCozinheira(nome, email, senha) {
    try {
    const res= await fetch(API_USUARIOS+"/cadastro",{
    method:"POST",
    headers:{'content-type':'application/json'},
    body: JSON.stringify({nome,email,senha})
    })

    } catch (error) {
        console.error("Erro ao fazer cadastro",error);
        return{sucesso:false, mensagem:'Erro de conexão a API'}
    }
}
async function recuperarSenha(email) {
    try {
    const res= await fetch(API_USUARIOS+"/recuperar",{
    method:"POST",
    headers:{'content-type':'application/json'},
    body: JSON.stringify({email})
    })

    } catch (error) {
        console.error("Erro ao tentar recuperar senha",error);
        return{sucesso:false, mensagem:'Erro de conexão a API'}
    }
}
