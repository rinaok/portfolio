// ─── Initialisation ───────────────────────────────────────────────────────────
// Scripts are at bottom of <body> so the DOM is already parsed — no event
// listener needed. Call everything directly.

const heroDots = document.getElementById('hero-dots');
if (heroDots) {
    heroDots.innerHTML = Array(25).fill('<div class="dot"></div>').join('');
}

renderProjects();
renderExperience();
lucide.createIcons();

// ─── Modal: Close ─────────────────────────────────────────────────────────────

document.getElementById('modal-close').addEventListener('click', closeModal);
document.getElementById('modal-overlay').addEventListener('click', closeModal);

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeModal();
});

function closeModal() {
    document.getElementById('modal').classList.add('hidden');
    document.body.classList.remove('modal-active');
}
