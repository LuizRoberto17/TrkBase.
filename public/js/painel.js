let total_manobras = 0
let manobras_acertadas = 0
let contador_manobras = 0

let total_metas = 0
let metas_concluidas = 0
let contador_metas = 0

function adicionar_manobra() {
    let nome = ipt_manobra.value

    aviso_manobra.innerHTML = ''

    if (nome == '') {
        aviso_manobra.innerHTML = '*Escolha ou digite uma manobra'
    } else {
        // se adicionar uma manobra, tira a mensagem de nhuma manobra
        if (total_manobras == 0) {
            lista_manobras.innerHTML = ''
        }

        contador_manobras = contador_manobras + 1
        total_manobras = total_manobras + 1

        lista_manobras.innerHTML = lista_manobras.innerHTML +
            '<div class="item" id="manobra_' + contador_manobras + '">' +
            '<span>' + nome + '</span>' +
            '<button onclick="acertar_manobra(' + contador_manobras + ')">ACERTEI</button>' +
            '</div>'

        ipt_manobra.value = ''
        atualizar_painel()
    }
}

function acertar_manobra(numero) {
    let item = document.getElementById('manobra_' + numero)

    item.className = 'item feito'
    manobras_acertadas = manobras_acertadas + 1
    atualizar_painel()
}

function adicionar_meta() {
    let texto = ipt_meta.value

    aviso_meta.innerHTML = ''

    if (texto == '') {
        aviso_meta.innerHTML = '*Escreva a sua meta'
    } else {
        // se adionar uma meta
        if (total_metas == 0) {
            lista_metas.innerHTML = ''
        }

        contador_metas = contador_metas + 1
        total_metas = total_metas + 1

        lista_metas.innerHTML = lista_metas.innerHTML +
            '<div class="item" id="meta_' + contador_metas + '">' +
            '<span>' + texto + '</span>' +
            '<button onclick="concluir_meta(' + contador_metas + ')">CONCLUÍ</button>' +
            '</div>'

        ipt_meta.value = ''
        atualizar_painel()
    }
}

function concluir_meta(numero) {
    let item = document.getElementById('meta_' + numero)

    item.className = 'item feito'
    metas_concluidas = metas_concluidas + 1
    atualizar_painel()
}

// Atualiza o painel
function atualizar_painel() {
    let total = total_manobras + total_metas
    let feitas = manobras_acertadas + metas_concluidas
    let porcentagem = 0

    if (total > 0) {
        porcentagem = (feitas / total * 100).toFixed(0)
    }

    num_acertadas.innerHTML = manobras_acertadas
    num_treinando.innerHTML = total_manobras - manobras_acertadas
    num_metas.innerHTML = metas_concluidas + '/' + total_metas
    texto_progresso.innerHTML = porcentagem + '%'
    barra.innerHTML = '<div class="barra-cheia" style="width: ' + porcentagem + '%"></div>'
}