const dadosCuidados = {
    siso: {
        titulo: "Cuidados: Extração de Siso",
        fazer: [
            "Morder a gaze por 30 a 40 minutos logo após a cirurgia.",
            "Aplicar compressa de gelo por fora do rosto nas primeiras 24h.",
            "Consumir alimentos líquidos ou pastosos, frios ou mornos.",
            "Escovar os dentes com suavidade, evitando a região dos pontos.",
            "Repousar e manter a cabeça levemente elevada ao deitar."
        ],
        naoFazer: [
            "Fazer bochechos vigorosos ou cuspir com força nas primeiras 48h.",
            "Usar canudos para beber líquidos (a sucção pode deslocar o coágulo).",
            "Comer alimentos quentes, duros, crocantes ou com sementes.",
            "Praticar exercícios físicos intensos ou pegar sol nos primeiros dias.",
            "Consumir bebidas alcoólicas ou fumar durante a cicatrização."
        ]
    },
    canal: {
        titulo: "Cuidados: Tratamento de Canal",
        fazer: [
            "Mastigar preferencialmente do lado oposto ao dente tratado.",
            "Manter a escovação e o uso do fio dental normalmente com delicadeza.",
            "Tomar a medicação prescrita nos horários corretos, se houver dor.",
            "Avisar o dentista imediatamente caso o curativo provisório caia.",
            "Retornar na consulta agendada para fazer a restauração definitiva."
        ],
        naoFazer: [
            "Morder alimentos muito duros (nozes, gelo, pé de moleque) com o dente tratado.",
            "Cutucar o curativo provisório com palitos ou objetos pontiagudos.",
            "Abandonar o tratamento após o alívio da dor antes da restauração final.",
            "Consumir alimentos extremamente pegajosos (chicletes, balas mastigáveis)."
        ]
    },
    clareamento: {
        titulo: "Cuidados: Clareamento Dental",
        fazer: [
            "Beber bastante água durante o dia.",
            "Dar preferência a alimentos claros (leite, frango, arroz, banana, água de coco).",
            "Usar creme dental dessensibilizante caso sinta sensibilidade.",
            "Seguir rigorosamente o tempo de uso da moldeira indicado pelo dentista.",
            "Usar enxaguantes bucais incolores (sem corantes)."
        ],
        naoFazer: [
            "Consumir bebidas escuras ou com corantes nas primeiras 48h (café, vinho, refrigerante de cola, açaí).",
            "Comer alimentos muito pigmentados (molho de tomate, beterraba, shoyu, curry).",
            "Fumar ou usar cigarros eletrônicos durante o tratamento.",
            "Ingerir líquidos muito gelados ou muito quentes se houver sensibilidade.",
            "Aplicar gel clareador em excesso na moldeira."
        ]
    }
};
function preencherTabela(tbody, itens, simbolo) {
    tbody.replaceChildren();

    const fragmento = document.createDocumentFragment();

    itens.forEach((item) => {
        const tr = document.createElement("tr");
        const td = document.createElement("td");

        const icone = document.createElement("span");
        icone.className = "icone-status";
        icone.setAttribute("aria-hidden", "true");
        icone.textContent = simbolo;

        td.appendChild(icone);
        td.appendChild(document.createTextNode(item));
        tr.appendChild(td);
        fragmento.appendChild(tr);
    });

    tbody.appendChild(fragmento);
}
function mostrarCuidados(procedimento, botaoClicado) {
    const info = dadosCuidados[procedimento];
    if (!info) return;

    const tituloEl = document.getElementById("titulo-resultado");
    const subtituloEl = document.getElementById("subtitulo-resultado");
    const areaTabelas = document.getElementById("area-tabelas");
    const corpoFazer = document.getElementById("corpo-tabela-fazer");
    const corpoNaoFazer = document.getElementById("corpo-tabela-nao-fazer");

    tituloEl.textContent = info.titulo;
    subtituloEl.hidden = true;
    areaTabelas.hidden = false;

    preencherTabela(corpoFazer, info.fazer, "✔️");
    preencherTabela(corpoNaoFazer, info.naoFazer, "✖️");

    atualizarBotaoAtivo(procedimento, botaoClicado);
}
function atualizarBotaoAtivo(procedimentoSelecionado, botaoClicado) {
    const botoes = document.querySelectorAll(".procedimento");

    botoes.forEach(botao => {
        const estaAtivo = botaoClicado
            ? botao === botaoClicado
            : botao.getAttribute("onclick")?.includes('${procedimentoSelecionado}');

        botao.classList.toggle("ativo", Boolean(estaAtivo));
    });
}


/* ===== Tema claro / escuro ===== */
function aplicarTema(tema) {
    const raiz = document.documentElement;
    const botao = document.getElementById("btn-theme");
    const icone = document.getElementById("icone-tema");
    const escuro = tema === "escuro";

    if (escuro) {
        raiz.setAttribute("data-tema", "escuro");
    } else {
        raiz.removeAttribute("data-tema");
    }

    if (icone) icone.src = escuro ? "img/sun.png" : "img/moon.png";
    if (botao) {
        botao.setAttribute("aria-label", escuro ? "Ativar tema claro" : "Ativar tema escuro");
        botao.setAttribute("aria-pressed", String(escuro));
    }
}

function alternarTema() {
    const novoTema = document.documentElement.getAttribute("data-tema") === "escuro" ? "claro" : "escuro";
    aplicarTema(novoTema);
    try { localStorage.setItem("tema", novoTema); } catch (e) {}
}

document.addEventListener("DOMContentLoaded", () => {
    let salvo = null;
    try { salvo = localStorage.getItem("tema"); } catch (e) {}

    // Sem preferência salva: segue o tema do sistema
    const preferido = salvo || (window.matchMedia("(prefers-color-scheme: dark)").matches ? "escuro" : "claro");
    aplicarTema(preferido);

    document.getElementById("btn-theme").addEventListener("click", alternarTema);
});
