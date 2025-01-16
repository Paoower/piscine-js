export { compose };
document.addEventListener("keydown", compose);

const colorMap = new Map();
function getRandomColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}

function initializeColorMap() {
    for (let i = 97; i <= 122; i++) {
        const letter = String.fromCharCode(i);
        colorMap.set(letter, getRandomColor());
    }
}

// Initialize the color map when the script loads
initializeColorMap();
function compose(e) {
    if (!e) return;

    const notes = document.getElementsByClassName("note");

    if ([...Array(26).keys()].map(i => i + 97).includes(e.key.charCodeAt(0))) {
        const div = document.createElement("div");
        div.className = "note";
        div.style.backgroundColor = colorMap.get(e.key);
        div.textContent = e.key;
        document.body.appendChild(div);
    } else if (e.key === "Backspace") {
        notes[notes.length - 1]?.remove();
    } else if (e.key === "Escape") {
        while (notes.length > 0) notes[0].remove();
    }
}

