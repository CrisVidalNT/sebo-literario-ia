/* ============================================================
   CHAT WIDGET — NovaEstante
   ============================================================ */

const TYPING_DELAY_MS = 900;

// Elementos do DOM
const widget   = document.getElementById('chat-widget');
const toggle   = document.getElementById('chat-toggle');
const closeBtn = document.getElementById('chat-close');
const form     = document.getElementById('chat-form');
const input    = document.getElementById('chat-input');
const messages = document.getElementById('chat-messages');

// ── Abrir / fechar ──────────────────────────────────────────

function openChat() {
    widget.classList.add('chat-widget--open');
    toggle.setAttribute('aria-expanded', 'true');
    document.getElementById('chat-window').setAttribute('aria-hidden', 'false');
    input.focus();
}

function closeChat() {
    widget.classList.remove('chat-widget--open');
    toggle.setAttribute('aria-expanded', 'false');
    document.getElementById('chat-window').setAttribute('aria-hidden', 'true');
    toggle.focus();
}

function toggleChat() {
    widget.classList.contains('chat-widget--open') ? closeChat() : openChat();
}

// ── Renderização de mensagens ───────────────────────────────

function createMessage(text, type) {
    const wrapper = document.createElement('div');
    wrapper.classList.add('chat-message', `chat-message--${type}`);

    const bubble = document.createElement('p');
    bubble.textContent = text;

    wrapper.appendChild(bubble);
    return wrapper;
}

function createTypingIndicator() {
    const wrapper = document.createElement('div');
    wrapper.classList.add('chat-message', 'chat-message--bot', 'chat-message--typing');
    wrapper.id = 'typing-indicator';

    const bubble = document.createElement('p');
    for (let i = 0; i < 3; i++) {
        const dot = document.createElement('span');
        dot.classList.add('typing-dot');
        bubble.appendChild(dot);
    }

    wrapper.appendChild(bubble);
    return wrapper;
}

function appendMessage(el) {
    messages.appendChild(el);
    messages.scrollTop = messages.scrollHeight;
}

function removeTypingIndicator() {
    const indicator = document.getElementById('typing-indicator');
    if (indicator) indicator.remove();
}

// ── Resposta do bot ─────────────────────────────────────────

function botReply(userText) {
    // Desabilita envio enquanto responde
    input.disabled = true;
    form.querySelector('.chat-window__send').disabled = true;

    // Exibe indicador de digitação
    appendMessage(createTypingIndicator());

    setTimeout(() => {
        removeTypingIndicator();
        appendMessage(createMessage(`Olá! "${userText}"`, 'bot'));

        // Reabilita envio
        input.disabled = false;
        form.querySelector('.chat-window__send').disabled = false;
        input.focus();
    }, TYPING_DELAY_MS);
}

// ── Envio do formulário ─────────────────────────────────────

function handleSubmit(e) {
    e.preventDefault();

    const text = input.value.trim();
    if (!text) return;

    appendMessage(createMessage(text, 'user'));
    input.value = '';

    botReply(text);
}

// ── Fechar com Escape ───────────────────────────────────────

function handleKeydown(e) {
    if (e.key === 'Escape' && widget.classList.contains('chat-widget--open')) {
        closeChat();
    }
}

// ── Event listeners ─────────────────────────────────────────

toggle.addEventListener('click', toggleChat);
closeBtn.addEventListener('click', closeChat);
form.addEventListener('submit', handleSubmit);
document.addEventListener('keydown', handleKeydown);