document.addEventListener('DOMContentLoaded', function(){
    const btn = document.querySelector('.main-header__menu-toggle');
    const nav = document.querySelector('.main-nav');
    if (!btn || !nav) return;
    btn.addEventListener('click', () => {
        const expanded = btn.getAttribute('aria-expanded') === 'true';
        btn.setAttribute('aria-expanded', String(!expanded));
        nav.classList.toggle('main-nav--open');
    });
});
