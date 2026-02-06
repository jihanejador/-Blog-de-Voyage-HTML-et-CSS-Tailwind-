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

    voyages.forEach((v, index) => {
        const card = document.createElement("div");
        card.className = "relative bg-white rounded-2xl shadow overflow-hidden";

        card.innerHTML = `
            <!-- 3 points -->
            <button onclick="toggleMenu(${index})"
              class="absolute top-2 right-2 text-xl">⋮</button>

            <!-- menu -->
            <div id="menu-${index}"
              class="hidden absolute top-8 right-2 bg-white shadow rounded">
              <button onclick="editCard(${index})"
                class="block px-4 py-2 text-sm">Modifier</button>
              <button onclick="deleteCard(${index})"
                class="block px-4 py-2 text-sm text-red-500">Supprimer</button>
            </div>

            <img src="${v.image}" class="h-44 w-full object-cover">
            <div class="p-3">
                <h3 class="font-semibold">${v.titre}</h3>
                <p class="text-sm text-gray-600">${v.destination}</p>
                <p class="text-xs">⭐ ${v.note} • ${v.categorie}</p>
            </div>
        `;

        cardsContainer.appendChild(card);
    });
}


function toggleMenu(index) {
    document.querySelectorAll('[id^="menu-"]').forEach(m => m.classList.add("hidden"));
    document.getElementById("menu-" + index).classList.toggle("hidden");
}

function deleteCard(index) {
    voyages.splice(index, 1);
    renderCards();
}


function editCard(index) {
    alert("Modifier card : " + (index + 1));
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
