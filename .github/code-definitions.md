# Coding Standards - Projeto NovaEstante

## Objetivo

Este documento define os padrões de desenvolvimento do projeto NovaEstante.

Todos os desenvolvedores e agentes de IA devem seguir estas convenções para garantir:

* Organização
* Manutenibilidade
* Legibilidade
* Escalabilidade
* Consistência do código

---

# Estrutura de Pastas

```text

├── index.html
│
├── assets/
│   ├── images/
│   │   ├── books/
│   │   ├── icons/
│   │   └── logo/
│   │
│   ├── css/
│   │   ├── style.css
│   │   ├── variables.css
│   │   ├── components.css
│   │   └── responsive.css
│   │
│   ├── js/
│   │   ├── main.js
│   │   ├── books.js
│   │   ├── search.js
│   │   ├── chatbot.js
│   │   └── utils.js
│   │
│   └── data/
│       └── books.json
│
├── pages/
│   ├── books.html
│   ├── trades.html
│   └── contact.html
│
├── docs/
│   ├── context.md
│   ├── coding-standards.md
│   └── requirements.md
│
└── README.md
```

---

# Convenção de Nomes

## Arquivos

Utilizar:

```text
kebab-case
```

Exemplos:

```text
book-card.js
search-books.js
trade-request.js
responsive.css
```

Não utilizar:

```text
BookCard.js
bookCard.js
BOOKCARD.js
```

---

# HTML

## Estrutura Semântica

Utilizar sempre:

```html
<header>
<nav>
<main>
<section>
<article>
<footer>
```

Evitar:

```html
<div class="header">
<div class="menu">
```

quando houver elemento semântico disponível.

---

## Indentação

Utilizar:

```html
4 espaços
```

Exemplo:

```html
<section class="books-section">
    <h2>Livros Disponíveis</h2>

    <div class="book-grid">
        <article class="book-card">
        </article>
    </div>
</section>
```

---

## IDs

Utilizar apenas para elementos únicos.

Exemplo:

```html
id="search-input"
id="chatbot-container"
```

---

## Classes

Utilizar:

```text
kebab-case
```

Exemplos:

```html
book-card
book-title
book-price
trade-button
main-header
```

---

# CSS

## Metodologia

Utilizar padrão inspirado em BEM simplificado.

Estrutura:

```css
.block
.block__element
.block--modifier
```

Exemplos:

```css
.book-card {}

.book-card__image {}

.book-card__title {}

.book-card--featured {}
```

---

## Variáveis CSS

Todas as cores devem ficar em:

```css
variables.css
```

Exemplo:

```css
:root {

    --color-primary: #8B5E3C;
    --color-secondary: #D8B4A0;
    --color-background: #F5EBDD;
    --color-text: #4A3B31;

    --border-radius: 12px;

}
```

---

## Organização CSS

Ordem obrigatória:

```css
1. Variáveis

2. Reset

3. Layout

4. Componentes

5. Utilitários

6. Responsividade
```

---

## Responsividade

Utilizar Mobile First.

Exemplo:

```css
.book-grid {

    display: grid;
    grid-template-columns: 1fr;

}

@media (min-width: 768px) {

    .book-grid {

        grid-template-columns: repeat(2, 1fr);

    }

}

@media (min-width: 1024px) {

    .book-grid {

        grid-template-columns: repeat(4, 1fr);

    }

}
```

---

# JavaScript

## Convenção

Utilizar:

```text
camelCase
```

---

## Variáveis

Exemplos:

```javascript
const booksList = [];

const searchInput = "";

const selectedGenre = "";
```

Não utilizar:

```javascript
const BooksList = [];
const books_list = [];
```

---

## Funções

Utilizar verbos.

Exemplos:

```javascript
loadBooks()

filterBooks()

searchBooks()

renderBooks()

sendTradeRequest()

openChatbot()
```

Evitar:

```javascript
books()
filter()
data()
```

---

## Constantes

Utilizar:

```javascript
UPPER_SNAKE_CASE
```

Exemplo:

```javascript
const API_URL = "";

const MAX_BOOKS = 50;

const DEFAULT_GENRE = "Fantasia";
```

---

## Eventos

Separar funções de eventos.

Exemplo:

```javascript
function handleSearchInput() {

}

function handleTradeButtonClick() {

}
```

---

# Estrutura dos Dados

## Livro

Modelo padrão:

```javascript
{
    id: 1,
    title: "Trono de Vidro",
    author: "Sarah J. Maas",
    genre: "Fantasia",
    condition: "Muito Bom",
    price: 39.90,
    image: "assets/images/books/trono-de-vidro.jpg"
}
```

---

# Padrão para Cards

Estrutura HTML:

```html
<article class="book-card">

    <img
        class="book-card__image"
        src=""
        alt=""
    >

    <h3 class="book-card__title"></h3>

    <p class="book-card__author"></p>

    <p class="book-card__genre"></p>

    <p class="book-card__condition"></p>

    <p class="book-card__price"></p>

    <button class="book-card__buy-button">
        Comprar
    </button>

</article>
```

---

# Comentários

Utilizar comentários apenas quando necessário.

Exemplo:

```javascript
// Filtra os livros conforme o gênero selecionado
```

Evitar:

```javascript
// Declara variável
const books = [];
```

---

# Boas Práticas

* Utilizar HTML semântico.
* Evitar CSS inline.
* Evitar JavaScript inline.
* Criar funções pequenas.
* Evitar repetição de código.
* Utilizar nomes descritivos.
* Separar responsabilidades.
* Manter arquivos organizados.

---

# Regra para Agentes de IA

Toda IA que gerar código para o projeto NovaEstante deve:

* Seguir esta estrutura de pastas.
* Utilizar nomenclatura definida.
* Criar código responsivo.
* Utilizar HTML semântico.
* Utilizar CSS modular.
* Utilizar JavaScript moderno (ES6+).
* Priorizar legibilidade e manutenção.
* Não criar arquivos fora da estrutura definida sem justificativa.

```
```
