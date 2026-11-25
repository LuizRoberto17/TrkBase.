function fazer_login() {
    let tudo_certo = true

    aviso_email.innerHTML = ''
    aviso_senha.innerHTML = ''

    // E-mail
    if (campo_email.value == '') {
        aviso_email.innerHTML = '*Preencha seu e-mail'
        tudo_certo = false
    } else if (campo_email.value.includes('@') == false || campo_email.value.includes('.') == false) {
        aviso_email.innerHTML = '*E-mail inválido'
        tudo_certo = false
    }

    // Senha
    if (campo_senha.value == '') {
        aviso_senha.innerHTML = '*Preencha sua senha'
        tudo_certo = false
    }

    // Se estiver tudo certo
    if (tudo_certo == true) {
        window.location.href = 'Index-TrkBs.html'
    }
}