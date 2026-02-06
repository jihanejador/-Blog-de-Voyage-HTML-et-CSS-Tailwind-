const cardsContainer = document.getElementById("cardimage");
const titre = document.querySelector('input[placeholder="Enter le titre"]');
const destination = document.querySelector('input[placeholder="Enter la destination"]');
const note = document.getElementById("note");
const categorie = document.getElementById("categorie");
const image = document.querySelector('input[placeholder="Enter url de image"]');
const modalToggle = document.getElementById("a");


let voyages = [];

function renderCards() {
    cardsContainer.innerHTML = "";
    voyages.forEach(v => {
        const card = document.createElement("div");
        card.className = "bg-white rounded-2xl shadow overflow-hidden";
        card.innerHTML = `<img src="${v.image}" class="h-44 w-full object-cover">
                    <div class="p-3">
                        <h3 class="font-semibold">${v.titre}</h3>
                        <p class="text-sm text-gray-600">${v.destination}</p>
                        <p class="text-xs">⭐ ${v.note} • ${v.categorie}</p>
                    </div> `;
        cardsContainer.appendChild(card);
    });
}
document.querySelector('.flex-1.bg-green-600').addEventListener("click", () => {
    if (!titre.value || !destination.value) return; 

    const newVoyage = {
        id: Date.now(),
        titre: titre.value,
        destination: destination.value,
        note: note.value,
        categorie: categorie.value,
        image: image.value
    };

    voyages.push(newVoyage);
    renderCards();

    titre.value = "";
    destination.value = "";
    note.value = "";
    categorie.value = "";
    image.value = "";


    modalToggle.checked = false;
});