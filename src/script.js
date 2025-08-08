// Gestione del consenso per la mappa
function initMapConsent() {
    const mapContainer = document.getElementById('map-container');
    if (!mapContainer) return;

    const consentBanner = document.getElementById('map-consent');
    const mapIframe = document.getElementById('map-iframe');
    
    // Controlla se l'utente ha già accettato
    if (localStorage.getItem('mapConsent') === 'true') {
        loadMap();
        return;
    }

    // Mostra il banner del consenso
    if (consentBanner) {
        consentBanner.classList.remove('hidden');
    }
}

// Funzione per caricare la mappa
function loadMap() {
    const mapIframe = document.getElementById('map-iframe');
    if (!mapIframe) return;

    // Nascondi il banner del consenso
    const consentBanner = document.getElementById('map-consent');
    if (consentBanner) {
        consentBanner.classList.add('hidden');
    }
    
    // Crea e aggiungi l'iframe
    const iframe = document.createElement('iframe');
    iframe.title = 'Mappa della posizione di The Golden Patty';
    iframe.src = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11880.45548822712!2d12.4922309!3d41.8902102!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x132f61b6532013ad%3A0x28f1c82e908526c4!2sColosseo!5e0!3m2!1sit!2sit!4v1620000000000!5m2!1sit!2sit';
    iframe.width = '100%';
    iframe.height = '100%';
    iframe.style.border = '0';
    iframe.allowFullscreen = true;
    iframe.loading = 'lazy';
    iframe.referrerPolicy = 'no-referrer-when-downgrade';
    iframe.className = 'w-full h-full';
    
    // Svuota e mostra l'iframe
    mapIframe.innerHTML = '';
    mapIframe.classList.remove('hidden');
    mapIframe.appendChild(iframe);
    
    // Salva il consenso
    localStorage.setItem('mapConsent', 'true');
}

// Esponi la funzione loadMap all'oggetto window
window.loadMap = loadMap;
// Inizializza la mappa quando il DOM è caricato
document.addEventListener('DOMContentLoaded', function() {
    initMapConsent();
});

// code for the sidebar
const allOpenSidebarBtn = document.querySelectorAll(".open-sidebar");
const aside = document.querySelector('aside');
allOpenSidebarBtn.forEach(button => {
    button.addEventListener('click', () => {
        aside.classList.remove('hidden');
    })
});

document.addEventListener('keydown', e => {
    if (e.key === 'b' && e.ctrlKey) {
        aside.classList.toggle('hidden');
    }
});

document.getElementById('close-sidebar').addEventListener('click', () => aside.classList.add('hidden'));