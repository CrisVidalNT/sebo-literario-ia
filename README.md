# 📚 NovaEstante

> Histórias ganham novas vidas.

**NovaEstante** é uma plataforma digital para compra, venda e troca de livros usados. Incentivamos a economia circular, a leitura acessível e a reutilização de livros em bom estado, conectando leitores interessados em descobrir novas histórias de forma sustentável.

---

## 🎯 Objetivo

Permitir que usuários:

- ✅ Comprem livros usados com preços acessíveis
- ✅ Vendam seus livros para novas mãos
- ✅ Troquem livros entre si
- ✅ Descubram novas leituras através de recomendações
- ✅ Economizem dinheiro
- ✅ Contribuam para a sustentabilidade

---

## 👥 Público-Alvo

- **Leitores frequentes** em busca de títulos acessíveis
- **Estudantes e universitários**
- **Professores e educadores**
- **Colecionadores** de livros
- **Participantes de clubes de leitura**
- **Faixa etária:** 15 a 65 anos

---

## 💡 Proposta de Valor

- 📖 **Livros com preços acessíveis** — Economize na sua próxima leitura
- 🔄 **Sistema de trocas** — Troque livros com outros leitores
- 🌱 **Sustentabilidade** — Dê nova vida aos seus livros
- ✨ **Facilidade de navegação** — Interface intuitiva e responsiva
- 🤖 **Assistente virtual** — IA para tirar dúvidas e orientar

---

## 🌳 Sustentabilidade

NovaEstante promove a economia circular ao incentivar a reutilização de livros em bom estado. Cada livro repassado é:

- ♻️ Uma redução de resíduos
- 📚 Uma oportunidade de leitura acessível
- 🌍 Uma contribuição para o planeta

---

## 🏗️ Estrutura do Projeto

```
sebo-literario-ia/
├── index.html
├── README.md
├── LICENSE
│
├── assets/
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
│   ├── images/
│   │   ├── books/
│   │   ├── icons/
│   │   └── logo/
│   │
│   └── data/
│       └── books.json
│
├── pages/
│   ├── books.html
│   ├── trades.html
│   └── contact.html
│
└── docs/
    ├── context.md
    ├── code-definitions.md
    └── design-definitions.md
```

---

## 🎨 Identidade Visual

### Paleta de Cores

| Elemento | Cor | Código |
|----------|-----|--------|
| Primária | Rosa Vivo | `#d4547a` |
| Secundária | Rosa Suave | `#f0a0bb` |
| Fundo | Rosa Névoa | `#fff0f5` |
| Texto Principal | Vinho Escuro | `#2d1f29` |
| Texto Secundário | Ameixa | `#6b4d5e` |

**Gradiente Principal:** `#f9c5d1 → #d4547a`

### Tipografia

- **Títulos:** Playfair Display ou Cormorant Garamond
- **Textos:** Poppins ou Nunito Sans

---

## 📑 Seções do Site

### 1️⃣ Início
- Banner principal com call-to-action
- Apresentação dos benefícios da plataforma
- Chamada para cadastro

### 2️⃣ Sobre
- História do projeto
- Missão, visão e valores
- Importância da reutilização de livros

### 3️⃣ Livros
- Catálogo completo de livros
- Busca por título, autor e gênero
- Cards com informações detalhadas
- Botões de compra e troca

### 4️⃣ Trocas
- Explicação de como funciona o sistema
- Regras de negociação
- Gerenciamento de solicitações

### 5️⃣ Contato
- Formulário de contato
- Informações de suporte
- Links para redes sociais
- Perguntas frequentes

---

## 📋 Padrões de Desenvolvimento

Este projeto segue padrões rigorosos de codificação para garantir qualidade, legibilidade e manutenibilidade.

### 🔤 Convenções de Nomes

- **Arquivos:** `kebab-case` — `book-card.js`, `search-books.js`
- **Classes CSS:** `kebab-case` — `book-card`, `book-title`
- **IDs HTML:** `kebab-case` — `search-input`, `chatbot-container`
- **Variáveis JS:** `camelCase` — `booksList`, `searchInput`
- **Funções JS:** `camelCase` com verbos — `loadBooks()`, `filterBooks()`
- **Constantes JS:** `UPPER_SNAKE_CASE` — `API_URL`, `MAX_BOOKS`

### 🎯 Arquitetura CSS

- Metodologia **BEM simplificada**
- Variáveis centralizadas em `variables.css`
- Organização: Variáveis → Reset → Layout → Componentes → Utilitários → Responsividade
- Abordagem **Mobile First**

### 💻 JavaScript Moderno

- ES6+ com `const` e `let`
- Funções pequenas e bem definidas
- Separação clara de responsabilidades
- Eventos separados de lógica de dados

### 📱 Responsividade

Breakpoints padrão:
- Mobile: até 767px
- Tablet: 768px a 1023px
- Desktop: 1024px+

---

## 📚 Estrutura de Dados — Livro

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

**Estados de conservação aceitos:**
- Excelente
- Muito Bom
- Bom
- Regular

---

## 🤖 Assistente Virtual

O assistente IA da NovaEstante pode:

- 📖 Explicar como funcionam as trocas
- 🔍 Ajudar a encontrar livros
- ❓ Tirar dúvidas sobre pedidos
- 📋 Explicar políticas e regras
- 💬 Fornecer recomendações personalizadas

**Tom de comunicação:** Amigável, educada, prestativa e clara — incentivando a leitura sem jargão técnico excessivo.

---

## 🚀 Como Começar

### Pré-requisitos

- Navegador web moderno (Chrome, Firefox, Safari, Edge)
- Editor de código (VS Code recomendado)
- Conhecimento básico de HTML, CSS e JavaScript

### Instalação

1. Clone ou baixe este repositório:
   ```bash
   git clone https://github.com/seu-usuario/sebo-literario-ia.git
   cd sebo-literario-ia
   ```

2. Abra o arquivo `index.html` no seu navegador ou use um servidor local:
   ```bash
   python -m http.server 8000
   # ou
   npx http-server
   ```

3. Navegue até `http://localhost:8000`

---

## 📖 Regras de Negócio

### Venda

- ✅ Apenas livros usados em bom estado
- ✅ Descrição detalhada obrigatória
- ✅ Foto da capa obrigatória
- ✅ Estado de conservação informado

### Troca

- 🔄 Realizada entre usuários cadastrados
- ✅ Solicitar troca
- ✅ Aceitar ou recusar
- ✅ Cancelar solicitação

---

## 🛠️ Stack Tecnológico

- **Markup:** HTML5 semântico
- **Estilos:** CSS3 (Grid, Flexbox, Gradientes, Variáveis)
- **Interatividade:** JavaScript vanilla (ES6+)
- **Dados:** JSON local (extensível para API futura)

---

## 📝 Licença

Este projeto está sob licença [LICENSE](LICENSE).

---

## 👨‍💻 Desenvolvimento

Desenvolvido como projeto acadêmico da disciplina de **Desenvolvimento Web Aplicada à Inteligência Artificial**.

### Contribuições

Para contribuir, siga os padrões definidos em [`code-definitions.md`](docs/code-definitions.md) e [`design-definitions.md`](docs/design-definitions.md).

---

## 📞 Contato e Suporte

Para dúvidas, sugestões ou reportar problemas, acesse a seção de **Contato** no site ou use o assistente virtual integrado.

---

**NovaEstante** — Porque toda história merece viver mais vezes. 📚✨
