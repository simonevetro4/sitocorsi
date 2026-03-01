
function apriRecensione(id) {
    // 1. Trova i dati della recensione giusta nella nostra lista
    const recensione = archivioRecensioni.find(r => r.id === id);
    
    // 2. Nasconde la Home e mostra la vista Articolo
    document.getElementById('home-view').style.display = 'none';
    document.getElementById('article-view').style.display = 'block';
    
    // 3. Inserisce i dati nel contenitore dell'articolo
    document.getElementById('contenuto-articolo').innerHTML = `
    <h1>${recensione.titolo}</h1>
    <div class="rating">${recensione.voto}</div>
    <img src="${recensione.immagine}" style="width:100%">
    <p>${recensione.testoCompleto}</p>
    `;
}

function tornaAllaHome() {
    document.getElementById('home-view').style.display = 'block';
    document.getElementById('article-view').style.display = 'none';
}

const archivioRecensioni = [
    {
        id: 0,
        titolo: "Super Mario World",
        categoria: "Retrocensione",
        voto: "⭐⭐⭐⭐⭐",
        immagine: "mario.jpg",
        riassunto: "Il re dei platform...",
        testoCompleto: "Qui scriverai tutta la tua lunghissima recensione di Mario... con paragrafi, dettagli tecnici e opinioni personali profonde."
    },
    {
        id: 1,
        titolo: "Elden Ring",
        categoria: "Novità",
        voto: "⭐⭐⭐⭐☆",
        immagine: "elden.jpg",
        riassunto: "Un viaggio brutale...",
        testoCompleto: "Qui scriverai la recensione completa di Elden Ring. Puoi aggiungere quanti dettagli vuoi!"
    }
];