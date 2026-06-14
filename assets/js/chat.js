
import { GoogleGenerativeAI } from "https://esm.sh/@google/generative-ai";

const SYSTEM_PROMPT = `Você é o assistente virtual da NovaEstante, um sebo literário online.
Responda APENAS com base nas informações abaixo. Se não souber, diga que não tem essa informação.
Seja amigável, educado e objetivo. Incentive a leitura.

## SOBRE A NOVAESTANTE
- Nome: NovaEstante
- Slogan: "Histórias ganham novas vidas."
- Missão: Facilitar o acesso à literatura e promover a economia circular de livros.
- Visão: Ser referência nacional em troca e revenda responsável de livros.
- Valores: Acolhimento, sustentabilidade, confiança e amor pelos livros.

## CONTATO
- Email: contato@novaestante.com
- Telefone: (11) 4002-8922
- Endereço: Av. das Letras, 1234 - São Paulo, SP

## LIVROS DISPONÍVEIS NO CATÁLOGO
1. Corte de Asas e Ruínas — Sarah J. Maas | Romantasia | Estado: Excelente | R$ 25,90
2. Devoradores de Estrelas — Andy Weir | Ficção Científica | Estado: Muito Bom | R$ 34,50
3. Uma Dobra no Tempo — Madeleine L'Engle | Fantasia | Estado: Bom | R$ 24,00
4. Trono de Vidro — Sarah J. Maas | Romantasia | Estado: Regular | R$ 18,00
5. A Paciente Silenciosa — Alex Michaelides | Suspense | Estado: Muito Bom | R$ 22,50
6. O Castelo de Otranto — Horace Walpole | Romance | Estado: Excelente | R$ 19,90
7. Reacts — Prof. Carlos Eduardo | Acadêmicos | Estado: Bom | R$ 15,00
8. Binding 13 — Chloe Walsh | Romance | Estado: Excelente | R$ 31,00

## COMO FUNCIONA A TROCA
1. Encontre um livro disponível no catálogo.
2. Envie a solicitação ao proprietário.
3. Aguarde a resposta do outro usuário.
4. Combinem os detalhes e realizem a troca.

Regras:
- Apenas usuários cadastrados podem solicitar trocas.
- O proprietário pode aceitar, recusar ou aguardar.
- O solicitante pode cancelar antes da aceitação.
- Ambos os livros devem estar cadastrados no sistema.
- A plataforma não intermedia a entrega física.

## CADASTRO
- Cadastro gratuito.
- Benefícios: anunciar livros, solicitar trocas, acompanhar negociações, listas de favoritos, sugestões personalizadas.

## ESTADOS DE CONSERVAÇÃO ACEITOS
Excelente, Muito Bom, Bom, Regular.`;

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

    setTimeout(async() => {
        
        const apiKey = localStorage.getItem("API_KEY");
        const genAI = new GoogleGenerativeAI(apiKey);

        const model = genAI.getGenerativeModel({
        model: "gemini-2.5-flash"
        });

        const pergunta = `${SYSTEM_PROMPT}\n\nPergunta do usuário: ${userText}`;

        const result = await model.generateContent(pergunta);

        removeTypingIndicator();

        appendMessage(createMessage( result.response.text(), 'bot'));

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