const courses = [
    {
        title: "Unity Essentials Pathway",
        engine: "unity",
        desc: "Il percorso fondamentale per capire come muoversi dentro Unity.",
        link: "https://learn.unity.com/pathway/unity-essentials",
        review: "Obbligatorio per non sentirsi persi tra i menu.",
        requirements: "PC Medio (8GB RAM, Scheda video integrata OK)",
        pcLevel: "low"
    },
    {
        title: "Unity Junior Programmer",
        engine: "unity",
        desc: "Dall'inizio alla fine: il percorso per imparare C# seriamente.",
        link: "https://learn.unity.com/pathway/junior-programmer",
        review: "Se lo finisci, sai programmare un gioco.",
        requirements: "PC Medio (8GB RAM, i5 o superiore)",
        pcLevel: "low"
    },
    {
    title: "Unreal Engine 5 Beginner Tutorial - Unreal Sensei",
    engine: "unreal",
    desc: "Un corso monumentale di 5 ore. Include illuminazione Lumen, Nanite, scultura del terreno e basi di Blueprint.",
    link: "https://www.youtube.com/watch?v=k-zMkzmduqI",
    review: "Il miglior punto di partenza per Unreal. Spiegazioni chiarissime e risultati visivi da tripla A.",
    requirements: "PC Potente (Consigliata GPU dedicata RTX)",
    pcLevel: "high"
},
{
    title: "Unreal Engine 5 Beginner Tutorial - Unreal Sensei",
    engine: "unreal",
    desc: "Un corso monumentale di 5 ore. Include illuminazione Lumen, Nanite, scultura del terreno e basi di Blueprint.",
    link: "https://www.youtube.com/watch?v=1XjgLKrb4_M",
    review: "Il miglior punto di partenza per Unreal. Spiegazioni chiarissime e risultati visivi da tripla A.",
    requirements: "PC Potente (Consigliata GPU dedicata RTX)",
    pcLevel: "high"
},
    {
        title: "Godot Step-by-Step",
        engine: "godot",
        desc: "Impara il motore open source più leggero e veloce.",
        link: "https://docs.godotengine.org/en/stable/getting_started/step_by_step/index.html",
        review: "Ottimo se vuoi totale libertà e zero costi.",
        requirements: "PC Base (Va su quasi tutto, anche portatili vecchi)",
        pcLevel: "low"
    }
];

function displayCourses(filter = 'tutti') {
    const container = document.getElementById('course-container');
    container.innerHTML = '';

    const filtered = filter === 'tutti' ? courses : courses.filter(c => c.engine === filter);

    filtered.forEach(course => {
        const pcClass = course.pcLevel === 'high' ? 'req-high' : 'req-low';
        container.innerHTML += `
            <div class="card">
                <div style="color:var(--accent); font-weight:bold; font-size:0.8rem">${course.engine.toUpperCase()}</div>
                <h3>${course.title}</h3>
                <p>${course.desc}</p>
                <div class="review-summary">
                    <small>Sunto:</small> <em>"${course.review}"</em>
                </div>
                <div class="pc-requirements ${pcClass}">
                    <strong>💻 Requisiti:</strong> ${course.requirements}
                </div>
                <a href="${course.link}" target="_blank" class="btn-go">INIZIA ORA</a>
            </div>
        `;
    });
}

// Funzione per filtrare (ora aggiorna anche lo stile del bottone)
function filterCourses(engine, btnElement) {
    // Rimuove la classe active da tutti i bottoni
    document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
    // Aggiunge la classe active al bottone cliccato
    btnElement.classList.add('active');
    // Mostra i corsi
    displayCourses(engine);
}

function searchCourses() {
    const term = document.getElementById('searchInput').value.toLowerCase();
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        const title = card.querySelector('h3').innerText.toLowerCase();
        card.style.display = title.includes(term) ? "block" : "none";
    });
}

// Caricamento iniziale
window.onload = () => displayCourses('tutti');