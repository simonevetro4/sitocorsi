const courses = [
    // --- UNITY ---
    {
        title: "Unity Essentials Pathway",
        engine: "unity",
        desc: "Il percorso ufficiale Unity per dominare l'interfaccia e i concetti base.",
        link: "https://learn.unity.com/pathway/unity-essentials",
        review: "Indispensabile per chi apre il software per la prima volta.",
        requirements: "PC Medio (8GB RAM, Scheda video integrata OK)",
        pcLevel: "low"
    },
    {
        title: "Unity Junior Programmer",
        engine: "unity",
        desc: "Percorso intensivo per imparare a scriptare in C# all'interno di Unity.",
        link: "https://learn.unity.com/pathway/junior-programmer",
        review: "Il miglior corso gratuito per diventare programmatori di giochi.",
        requirements: "PC Medio (8GB RAM, i5 o superiore)",
        pcLevel: "low"
    },
    {
        title: "UNITY 6 - Corso Completo - jbdtube",
        engine: "unity",
        desc: "Tutorial in italiano aggiornato a Unity 6 per creare un gioco completo.",
        link: "https://www.youtube.com/watch?v=sgdvkpGGeOI&list=PLTZhWSINdiMyf8JWcoY3hr2j8k5p1WmqI",
        review: "Spiegazioni in italiano chiare e passo dopo passo.",
        requirements: "PC Medio (8GB RAM, Windows 10/11)",
        pcLevel: "low"
    },
    {
        title: "Unity Beginner/Intermediate 2026 - Code Monkey",
        engine: "unity",
        desc: "Oltre 10 ore di contenuti moderni sulle migliori pratiche di Unity.",
        link: "https://youtu.be/AmGSEH7QcDg?si=ABUHRdoH_y4dreQX",
        review: "Code Monkey è una garanzia per il codice pulito.",
        requirements: "PC Medio (8GB RAM, i5 10th gen+)",
        pcLevel: "low"
    },

    // --- UNREAL ENGINE ---
    {
        title: "UE5 Beginner Tutorial - Unreal Sensei",
        engine: "unreal",
        desc: "Impara Nanite, Lumen e la creazione di mondi realistici.",
        link: "https://www.youtube.com/watch?v=1XjgLKrb4_M",
        review: "Visivamente incredibile, insegna l'UE5 moderna.",
        requirements: "PC Potente (SSD, 16GB RAM, GPU RTX 2060+)",
        pcLevel: "high"
    },
    {
        title: "Video Corso Unreal Engine 5 - jbdtube",
        engine: "unreal",
        desc: "Serie completa in italiano per chi vuole iniziare con Unreal Engine 5.",
        link: "https://www.youtube.com/watch?v=mIicvmaKUQI&list=PLTZhWSINdiMzQcYWX_PaBnLyso24WrAOo",
        review: "Ottima alternativa italiana per chi non mastica l'inglese.",
        requirements: "PC Potente (GPU dedicata obbligatoria)",
        pcLevel: "high"
    },
    {
        title: "First Game in UE5 2024 - Gorka Games",
        engine: "unreal",
        desc: "Crea il tuo primo gioco completo in UE5 con logiche Blueprint.",
        link: "https://youtu.be/zt13VcimeyI?si=mjcl-Ty0-vxiUU__",
        review: "Molto pratico, ideale per chi vuole 'fare' subito.",
        requirements: "PC Potente (8GB VRAM consigliata)",
        pcLevel: "high"
    },

    // --- GODOT ---
    {
        title: "Godot Step-by-Step",
        engine: "godot",
        desc: "La guida ufficiale per il motore open source del momento.",
        link: "https://docs.godotengine.org/en/stable/getting_started/step_by_step/index.html",
        review: "Leggerissimo, perfetto per il 2D e i Pixel Art.",
        requirements: "PC Base (Gira anche su vecchi portatili)",
        pcLevel: "low"
    },

    // --- LINGUAGGI (CON REQUISITI AGGIORNATI) ---
    {
        title: "Corso C++ per Game Dev",
        engine: "c++",
        desc: "Le basi del C++ focalizzate sullo sviluppo software e gaming.",
        link: "https://youtu.be/099mOfHMAM4?si=c2RAJYrRN5MvLMOm",
        review: "Essenziale per chi punta a Unreal Engine o motori proprietari.",
        requirements: "PC Base + Visual Studio 2022 o VS Code",
        pcLevel: "low",
    },
    {
        title: "Corso C# Moderno",
        engine: "c#",
        desc: "Impara il linguaggio principe di Unity e delle app .NET.",
        link: "https://youtu.be/5OzKY_thSJU?si=XW6RP4Bnfqlg_Lqj",
        review: "Ottimo per creare una base solida di logica di programmazione.",
        requirements: "PC Base + VS Code o Visual Studio Community",
        pcLevel: "low",
    }
];

// Funzione per mostrare i corsi
function displayCourses(filter = 'tutti') {
    const container = document.getElementById('course-container');
    container.innerHTML = '';

    const filtered = filter === 'tutti' ? courses : courses.filter(c => c.engine === filter);

    filtered.forEach((course, index) => {
        const pcClass = course.pcLevel === 'high' ? 'req-high' : 'req-low';
        
        // Controlliamo se il corso è salvato come completato nel localStorage
        const isCompleted = localStorage.getItem(`course-${course.title}`) === 'true';
        const completedClass = isCompleted ? 'completed' : '';

        container.innerHTML += `
            <div class="card ${completedClass}" id="card-${index}">
                <div class="card-header">
                    <div style="color:var(--accent); font-weight:bold; font-size:0.7rem; letter-spacing:1px">
                        ${course.engine.toUpperCase()}
                    </div>
                    <label class="checkbox-container">
                        <input type="checkbox" ${isCompleted ? 'checked' : ''} 
                               onchange="toggleCompletion('${course.title}', ${index})">
                        <span class="checkmark"></span>
                    </label>
                </div>
                
                <h3>${course.title}</h3>
                <p style="font-size:0.9rem; color:#94a3b8; flex-grow:1">${course.desc}</p>
                
                <div class="review-summary">
                    <small style="color:var(--accent)">Opinione:</small><br>
                    <em>"${course.review}"</em>
                </div>
                
                <div class="pc-requirements ${pcClass}">
                    <strong>💻 Software/PC:</strong> ${course.requirements}
                </div>
                
                <a href="${course.link}" target="_blank" class="btn-go">INIZIA ORA</a>
            </div>
        `;
    });
}

// Nuova funzione per gestire la spunta
function toggleCompletion(courseTitle, cardIndex) {
    const card = document.getElementById(`card-${cardIndex}`);
    const key = `course-${courseTitle}`;
    
    if (localStorage.getItem(key) === 'true') {
        localStorage.removeItem(key);
        card.classList.remove('completed');
    } else {
        localStorage.setItem(key, 'true');
        card.classList.add('completed');
    }
}
function acceptCookies() {
    localStorage.setItem('cookieConsent', 'accepted');
    document.getElementById('cookie-banner').classList.remove('show');
}

window.addEventListener('load', () => {
    if (!localStorage.getItem('cookieConsent')) {
        setTimeout(() => {
            document.getElementById('cookie-banner').classList.add('show');
        }, 1500); // Sbuca dopo 1.5 secondi
    }
});

function filterCourses(engine, btnElement) {
    document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
    btnElement.classList.add('active');
    displayCourses(engine);
}

// Avvio automatico
window.onload = () => displayCourses('tutti');