let tentou_criar = false

let tem_tamanho = false
let tem_maiuscula = false
let tem_numero = false
let tem_simbolo = false

function criar_conta() {
    tentou_criar = true
    let tudo_certo = true

    aviso_nome.innerHTML = ''
    aviso_email.innerHTML = ''
    aviso_senha.innerHTML = ''

    // Nome
    if (campo_nome.value == '') {
        aviso_nome.innerHTML = '<p style="color: #eb352f;">*Preencha seu nome</p>'
        tudo_certo = false
    } else if (campo_nome.value.length < 3) {
        aviso_nome.innerHTML = '<p style="color: #eb352f;">*Mínimo de 3 letras</p>'
        tudo_certo = false
    }

    // E-mail
    if (campo_email.value == '') {
        aviso_email.innerHTML = '<p style="color: #eb352f;">*Preencha seu e-mail</p>'
        tudo_certo = false
    } else if (campo_email.value.includes('@') == false || campo_email.value.includes('.') == false) {
        aviso_email.innerHTML = '*E-mail inválido'
        tudo_certo = false
    }

    // Senha
    conferir_senha()

    if (campo_senha.value == '') {
        aviso_senha.innerHTML = '*Crie uma senha'
        tudo_certo = false
    } else if (tem_tamanho == false || tem_maiuscula == false || tem_numero == false || tem_simbolo == false) {
        aviso_senha.innerHTML = '*Senha fora das regras'
        tudo_certo = false
    }

    // Se estiver tudo certo
    if (tudo_certo == true) {
        window.location.href = 'login.html'
    }
}

function conferir_senha() {
    let senha_digitada = campo_senha.value

    aviso_senha.innerHTML = ''

    tem_tamanho = false
    tem_maiuscula = false
    tem_numero = false
    tem_simbolo = false

    if (senha_digitada.length >= 8) {
        tem_tamanho = true
    }

    // Olha letra por letra da senha
    for (let i = 0; i < senha_digitada.length; i++) {
        let letra = senha_digitada[i]

        if ('ABCDEFGHIJKLMNOPQRSTUVWXYZ'.includes(letra)) {
            tem_maiuscula = true
        }

        if ('0123456789'.includes(letra)) {
            tem_numero = true
        }

        if ('!@#$%&*?'.includes(letra)) {
            tem_simbolo = true
        }
    }

    // Mostra cada regra: laranja se cumpriu, vermelha se tentou criar sem cumprir, cinza se ainda não
    if (tem_tamanho == true) {
        regra_tamanho.innerHTML = '<p style="color: #ff5500;">✓ Mínimo de 8 caracteres</p>'
    } else if (tentou_criar == true) {
        regra_tamanho.innerHTML = '<p style="color: #eb352f;">• Mínimo de 8 caracteres</p>'
    } else {
        regra_tamanho.innerHTML = '<p style="color: #aaaaaa;">• Mínimo de 8 caracteres</p>'
    }

    if (tem_maiuscula == true) {
        regra_maiuscula.innerHTML = '<p style="color: #ff5500;">✓ Uma letra maiúscula</p>'
    } else if (tentou_criar == true) {
        regra_maiuscula.innerHTML = '<p style="color: #eb352f;">• Uma letra maiúscula</p>'
    } else {
        regra_maiuscula.innerHTML = '<p style="color: #aaaaaa;">• Uma letra maiúscula</p>'
    }

    if (tem_numero == true) {
        regra_numero.innerHTML = '<p style="color: #ff5500;">✓ Um número</p>'
    } else if (tentou_criar == true) {
        regra_numero.innerHTML = '<p style="color: #eb352f;">• Um número</p>'
    } else {
        regra_numero.innerHTML = '<p style="color: #aaaaaa;">• Um número</p>'
    }

    if (tem_simbolo == true) {
        regra_simbolo.innerHTML = '<p style="color: #ff5500;">✓ Um símbolo (!@#$%&*?)</p>'
    } else if (tentou_criar == true) {
        regra_simbolo.innerHTML = '<p style="color: #eb352f;">• Um símbolo (!@#$%&*?)</p>'
    } else {
        regra_simbolo.innerHTML = '<p style="color: #aaaaaa;">• Um símbolo (!@#$%&*?)</p>'
    }
}