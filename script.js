function showSection(id) {
    const section = document.getElementById(id);

    section.classList.remove("hidden");

    section.scrollIntoView({
        behavior: "smooth"
    });
}

function startSurprise() {
    showSection("message");
}

function showMemories() {
    showSection("memories");
}

function showReasons() {
    showSection("reasons");
}

function showFinal() {
    showSection("final");
}