// ─── Render: Projects ─────────────────────────────────────────────────────────

function renderProjects() {
    const container = document.getElementById('project-list');

    container.innerHTML = PROJECTS.map(p => `
        <div
            class="group relative cursor-pointer overflow-hidden rounded-[2rem] bg-white border-4 border-zinc-50 transition-all hover:shadow-2xl hover:-translate-y-2 text-left"
            onclick="openModal('${p.id}')"
        >
            <div class="aspect-[4/3] w-full bg-[#49b6b6]/10 relative overflow-hidden">
                ${p.image
                    ? `<img src="${p.image}" alt="${p.title}" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" onerror="this.style.display='none'">`
                    : ''
                }
                <div class="absolute inset-0 bg-[#c66b81]/90 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center text-white">
                    <p class="font-black text-2xl mb-2 uppercase tracking-tighter">View Case Study</p>
                    <i data-lucide="external-link" class="w-8 h-8"></i>
                </div>
            </div>
            <div class="p-8">
                <div class="flex justify-between items-start mb-4">
                    <h3 class="text-3xl font-black text-zinc-900 tracking-tight">${p.title}</h3>
                    <span class="bg-[#f2e29b] px-3 py-1 rounded-full text-[10px] font-black uppercase text-zinc-700">
                        ${p.category.split(' / ')[0]}
                    </span>
                </div>
                <div class="flex flex-wrap gap-2 mb-6">
                    ${p.tags.map(tag => `
                        <span class="text-[10px] uppercase font-bold tracking-wider text-[#49b6b6] border border-[#49b6b6] px-3 py-1 rounded-full">${tag}</span>
                    `).join('')}
                </div>
                <p class="text-zinc-600 font-medium line-clamp-2">${p.description}</p>
            </div>
        </div>
    `).join('');

    lucide.createIcons();
}

// ─── Render: Experience ───────────────────────────────────────────────────────

function renderExperience() {
    const container = document.getElementById('experience-list');

    const iconMap = { edu: 'graduation-cap', vol: 'heart' };

    container.innerHTML = EXPERIENCE.map(e => `
        <div class="flex flex-col md:flex-row gap-6 md:gap-16 p-8 rounded-[2.5rem] bg-white hover:shadow-xl transition-all border-4 border-transparent hover:border-zinc-100 text-left">
            <div class="md:w-1/3">
                <div class="flex items-center gap-3 text-[#c66b81] mb-2 font-black uppercase text-[10px] tracking-widest">
                    <i data-lucide="${iconMap[e.type] || 'briefcase'}" class="w-5 h-5"></i> ${e.date}
                </div>
                <h3 class="text-2xl font-black text-zinc-900 leading-tight">${e.title}</h3>
            </div>
            <div class="md:w-2/3 space-y-3">
                <h4 class="text-2xl font-bold text-[#49b6b6]">${e.place}</h4>
                <p class="text-zinc-600 font-medium">${e.desc}</p>
            </div>
        </div>
    `).join('');

    lucide.createIcons();
}

// ─── Modal: Open ──────────────────────────────────────────────────────────────

function openModal(id) {
    const p = PROJECTS.find(proj => proj.id === id);
    if (!p) return;

    const content = document.getElementById('modal-content');

    content.innerHTML = `
        <div class="mb-12">
            <span class="text-[#c66b81] font-black uppercase text-sm tracking-[0.2em]">${p.category}</span>
            <h2 class="text-5xl md:text-6xl font-black mt-2 tracking-tighter leading-none">${p.title}</h2>
        </div>
        <div class="grid md:grid-cols-3 gap-16">
            <div class="md:col-span-2 space-y-12 text-left">
                ${p.image ? `
                <div class="rounded-[2rem] overflow-hidden border-4 border-zinc-50 shadow-lg">
                    <img src="${p.image}" alt="${p.title}" class="w-full h-auto" onerror="this.style.display='none'">
                </div>` : ''}
                <section class="space-y-4">
                    <div class="flex items-center gap-4">
                        <div class="w-12 h-12 bg-[#49b6b6] rounded-2xl flex items-center justify-center text-white">
                            <i data-lucide="monitor"></i>
                        </div>
                        <h4 class="text-2xl font-black tracking-tight">The Challenge</h4>
                    </div>
                    <p class="text-lg text-zinc-600 leading-relaxed pl-16">${p.details.challenge}</p>
                </section>
                <section class="space-y-4">
                    <div class="flex items-center gap-4">
                        <div class="w-12 h-12 bg-[#c66b81] rounded-2xl flex items-center justify-center text-white">
                            <i data-lucide="cpu"></i>
                        </div>
                        <h4 class="text-2xl font-black tracking-tight">Process</h4>
                    </div>
                    <p class="text-lg text-zinc-600 leading-relaxed pl-16">${p.details.process}</p>
                </section>
            </div>
            <div class="space-y-8 text-left">
                <div class="bg-zinc-50 p-8 rounded-[2rem] space-y-8 border-2 border-zinc-100">
                    <div class="space-y-6">
                        <div>
                            <label class="block text-[10px] font-black uppercase text-zinc-400 mb-1">Role</label>
                            <p class="font-bold text-zinc-900">${p.details.role}</p>
                        </div>
                        <div>
                            <label class="block text-[10px] font-black uppercase text-zinc-400 mb-2">Tech Stack</label>
                            <div class="flex flex-wrap gap-2">
                                ${p.details.tools.map(t => `<span class="text-[10px] bg-white border border-zinc-200 px-2 py-1 rounded font-mono">${t}</span>`).join('')}
                            </div>
                        </div>
                    </div>
                    ${p.gameLink ? `
                    <a
                        href="${p.gameLink}"
                        target="_blank"
                        rel="noopener noreferrer"
                        class="w-full py-5 bg-[#c66b81] text-white rounded-2xl font-black text-lg hover:scale-105 transition-all shadow-xl inline-flex items-center justify-center gap-3"
                    >
                        VIEW PROJECT <i data-lucide="external-link"></i>
                    </a>` : ''}
                </div>
            </div>
        </div>
    `;

    document.getElementById('modal').classList.remove('hidden');
    document.body.classList.add('modal-active');
    lucide.createIcons();
}


