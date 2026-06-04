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
});
