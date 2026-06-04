document.addEventListener('DOMContentLoaded', function(){
    const btn = document.querySelector('.main-header__menu-toggle');
    const nav = document.querySelector('.main-nav');
    if (btn && nav) {
        btn.addEventListener('click', () => {
            const expanded = btn.getAttribute('aria-expanded') === 'true';
            btn.setAttribute('aria-expanded', String(!expanded));
            nav.classList.toggle('main-nav--open');
        });
    }

    const revealElements = document.querySelectorAll('#sobre .reveal');
    if(revealElements.length){
        const io = new IntersectionObserver((entries)=>{
            entries.forEach(entry => {
                if(entry.isIntersecting){
                    entry.target.classList.add('in-view');
                    io.unobserve(entry.target);
                }
            });
        }, { threshold: 0.15 });
        revealElements.forEach(el => io.observe(el));
    }

    const search = document.getElementById('livros-search');
    const chips = Array.from(document.querySelectorAll('#livros .chip'));
    const cards = Array.from(document.querySelectorAll('#livros .book-card'));

    if(search && chips.length && cards.length){
        const filterBooks = () => {
            const query = (search.value || '').trim().toLowerCase();
            const activeChip = chips.find(chip => chip.classList.contains('active'));
            const genre = activeChip ? activeChip.dataset.genre : 'All';

            let visibleIndex = 0;
            cards.forEach(card => {
                const title = card.dataset.title.toLowerCase();
                const author = card.dataset.author.toLowerCase();
                const cardGenre = card.dataset.genre;
                const matchesText = query === '' || title.includes(query) || author.includes(query);
                const matchesGenre = genre === 'All' || cardGenre === genre;
                if(matchesText && matchesGenre){
                    card.style.display = '';
                    setTimeout(() => card.classList.add('show'), visibleIndex * 80);
                    visibleIndex++;
                } else {
                    card.style.display = 'none';
                    card.classList.remove('show');
                }
            });
        };

        chips.forEach(chip => {
            chip.addEventListener('click', () => {
                chips.forEach(item => item.classList.remove('active'));
                chip.classList.add('active');
                filterBooks();
            });
        });

        const allChip = chips.find(chip => chip.dataset.genre === 'All');
        if(allChip) allChip.classList.add('active');

        search.addEventListener('input', filterBooks);
        window.addEventListener('load', () => {
            cards.forEach((card, index) => setTimeout(() => card.classList.add('show'), index * 80));
        });
    }

    const trocasTabs = Array.from(document.querySelectorAll('.trocas__tab'));
    const trocaCards = Array.from(document.querySelectorAll('.troca-card'));
    const trocaActions = Array.from(document.querySelectorAll('.troca-action'));

    const statusClasses = {
        'Pendente': 'status-pendente',
        'Aceita': 'status-aceita',
        'Recusada': 'status-recusada',
        'Cancelada': 'status-cancelada'
    };

    const updateStatus = (card, status) => {
        card.dataset.status = status;
        Object.values(statusClasses).forEach(cls => card.classList.remove(cls));
        card.classList.add(statusClasses[status]);
        const badge = card.querySelector('.troca-card__badge');
        if(badge) badge.textContent = status;
        card.style.opacity = '0';
        card.style.transform = 'translateY(14px)';
        setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'none';
        }, 50);
    };

    const filterTrocas = () => {
        const activeTab = trocasTabs.find(tab => tab.classList.contains('active'));
        const filter = activeTab ? activeTab.dataset.status : 'all';
        trocaCards.forEach(card => {
            const status = card.dataset.status;
            const visible = filter === 'all' || status === filter;
            card.style.display = visible ? '' : 'none';
        });
    };

    if(trocasTabs.length && trocaCards.length){
        trocasTabs.forEach(tab => {
            tab.addEventListener('click', () => {
                trocasTabs.forEach(item => item.classList.remove('active'));
                tab.classList.add('active');
                filterTrocas();
            });
        });

        trocaActions.forEach(button => {
            button.addEventListener('click', () => {
                const card = button.closest('.troca-card');
                if(!card) return;
                const action = button.dataset.action;
                if(action === 'aceitar') updateStatus(card, 'Aceita');
                if(action === 'recusar') updateStatus(card, 'Recusada');
                if(action === 'cancelar') updateStatus(card, 'Cancelada');
                if(action === 'nova') updateStatus(card, 'Pendente');
                if(action === 'detalhes') {
                    card.classList.add('highlight');
                    setTimeout(() => card.classList.remove('highlight'), 450);
                }
                filterTrocas();
            });
        });

        filterTrocas();
    }

    const contactForm = document.getElementById('contact-form');
    if(contactForm){
        contactForm.addEventListener('submit', event => {
            event.preventDefault();
            const button = contactForm.querySelector('button[type="submit"]');
            if(button) {
                button.textContent = 'Mensagem enviada!';
                button.disabled = true;
            }
            setTimeout(() => {
                if(button) {
                    button.textContent = 'Enviar mensagem';
                    button.disabled = false;
                }
                contactForm.reset();
            }, 1800);
        });
    }
});
