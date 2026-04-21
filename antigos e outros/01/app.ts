class Referencia {
  constructor(public titulo: string, public autor: string) {}
}

class Video {
  constructor(public titulo: string, public url: string) {}
}

class Artigo {
  constructor(public titulo: string, public arquivo: string) {}
}

class App {
  referencias: Referencia[] = [
    new Referencia("Estrutura e Função", "Autor X"),
    new Referencia("Psicanálise Moderna", "Autor Y")
  ];

  videos: Video[] = [
    new Video("Aula 1", "https://www.youtube.com/embed/dQw4w9WgXcQ")
  ];

  artigos: Artigo[] = [
    new Artigo("Meu Artigo 1", "uploads/artigo1.pdf")
  ];

  iniciar() {
    this.renderReferencias();
    this.renderVideos();
    this.renderArtigos();
  }

  renderReferencias() {
    const lista = document.getElementById("lista-referencias");
    this.referencias.forEach(ref => {
      const li = document.createElement("li");
      li.textContent = `${ref.autor} - ${ref.titulo}`;
      lista?.appendChild(li);
    });
  }

  renderVideos() {
    const container = document.getElementById("lista-videos");
    this.videos.forEach(video => {
      const iframe = document.createElement("iframe");
      iframe.src = video.url;
      iframe.title = video.titulo;
      container?.appendChild(iframe);
    });
  }

  renderArtigos() {
    const lista = document.getElementById("lista-artigos");
    this.artigos.forEach(art => {
      const li = document.createElement("li");
      const a = document.createElement("a");
      a.href = art.arquivo;
      a.textContent = art.titulo;
      a.target = "_blank";
      li.appendChild(a);
      lista?.appendChild(li);
    });
  }
}

const app = new App();
app.iniciar();
