"use strict";
console.log("iniciando app");
const dados = {
    sobre: "Espaço dedicado a referências bibliográficas, vídeos e artigos autorais. O Prof Augusto Cesar é licenciado em Matemática. Possui pós graduação em Finanças Empresariais e Supervisão e Gestão Educacional. É Psicopedagogo, Filósofo e Psicanalista. Este site desdobrar-se-á futuramente em um portal.",
    artigos: [
        {
            titulo: "Pensar por Díades",
            arquivo: "uploads/pensar-por-diades.pdf"
        },
        {
            titulo: "Psicanálise Simples",
            arquivo: "uploads/psicanalise-simples.pdf"
        }
    ],
    referencias: [
        "Freud - Klein - Kanner - Asperger",
        "Kant - Husserl"
    ],
    //videos: [
    //  "https://www.youtube.com/embed/GF07p7NdT_o"
    //]
    // Procure por esta seção dentro da const dados e substitua:
    videos: [
        "https://www.youtube.com/embed/GF07p7NdT_o", // Seu vídeo antigo mantido
        "https://youtu.be/zGPXe87CgHw?si=Zmvzx6nHFkKf2UAV", // Novo vídeo 1 adicionado
        "https://youtu.be/G5lfIoigMas?si=WjNEnw-me3r-AUIh" // Novo vídeo 2 adicionado
    ]
};
function renderSobre() {
    const el = document.getElementById("texto-sobre");
    if (el)
        el.textContent = dados.sobre;
}
function renderArtigos() {
    const lista = document.getElementById("lista-artigos");
    if (!lista)
        return;
    dados.artigos.forEach(art => {
        const li = document.createElement("li");
        const a = document.createElement("a");
        a.href = art.arquivo;
        a.textContent = art.titulo;
        a.target = "_blank";
        li.appendChild(a);
        lista.appendChild(li);
    });
}
function renderReferencias() {
    const lista = document.getElementById("lista-referencias");
    if (!lista)
        return;
    dados.referencias.forEach(ref => {
        const li = document.createElement("li");
        li.textContent = ref;
        lista.appendChild(li);
    });
}
function renderVideos() {
    const container = document.getElementById("lista-videos");
    if (!container)
        return;
    dados.videos.forEach(url => {
        const iframe = document.createElement("iframe");
        iframe.src = url;
        iframe.allowFullscreen = true;
        container.appendChild(iframe);
    });
}
function abrirWhatsApp() {
    window.open("https://wa.me/5516991110376", "_blank");
}
function abrirLousa() {
    window.open("https://excalidraw.com", "_blank");
}
function abrirReuniao() {
    window.open("https://meet.google.com", "_blank");
}
function configurarEventos() {
    const btnWhatsApp = document.getElementById("btn-whatsapp");
    const btnLousa = document.getElementById("btn-lousa");
    const btnReuniao = document.getElementById("btn-reuniao");
    const btnLousaReuniao = document.getElementById("btn-lousa-reuniao");
    btnWhatsApp === null || btnWhatsApp === void 0 ? void 0 : btnWhatsApp.addEventListener("click", abrirWhatsApp);
    btnLousa === null || btnLousa === void 0 ? void 0 : btnLousa.addEventListener("click", abrirLousa);
    btnReuniao === null || btnReuniao === void 0 ? void 0 : btnReuniao.addEventListener("click", abrirReuniao);
    btnLousaReuniao === null || btnLousaReuniao === void 0 ? void 0 : btnLousaReuniao.addEventListener("click", abrirLousa);
}
function iniciar() {
    renderSobre();
    renderArtigos();
    renderReferencias();
    renderVideos();
    configurarEventos();
}
iniciar();
