

## Funcionalidades da seção

- Barra de busca com filtros por: título, autor e gênero
- Catálogo de livros em grid responsivo (CSS Grid ou Flexbox)
- Mínimo de 8 cards de livros fictícios com dados realistas
- Filtro de gênero por botões/chips clicáveis: Romance, Fantasia, Ficção Científica, Suspense, Terror, Desenvolvimento Pessoal, Acadêmicos
- Interação funcional: filtro por gênero e busca por texto funcionando via JavaScript puro

## Estrutura de cada card

Cada card deve conter obrigatoriamente:
- Imagem da capa (usar placeholder colorido estilizado com gradiente + ícone de livro, sem imagens externas)
- Título do livro
- Nome do autor
- Gênero (badge/tag colorida)
- Estado de conservação com badge visual: Excelente · Muito Bom · Bom · Regular
- Preço em R$
- Botão "Comprar"
- Botão "Solicitar Troca"

## Estilo dos cards

- Border-radius: 16px
- Sombra suave: rgba(212, 84, 122, 0.10)
- Borda: 1px solid #f5c6d8
- Hover: leve elevação com transform e sombra intensificada
- Botão "Comprar": gradiente #f9c5d1 → #d4547a, texto branco, radius 8px
- Botão "Solicitar Troca": outline rosa com hover preenchido
- Badge de estado: cor variando por nível (Excelente = verde suave, Muito Bom = azul suave, Bom = amarelo suave, Regular = cinza)
- Badge de gênero: fundo rosa suave com texto vinho

## Requisitos técnicos

- HTML + CSS + JS puro em um único arquivo
- Layout responsivo: 4 colunas desktop → 2 tablet → 1 mobile
- Animação de entrada dos cards ao carregar (staggered fade-in)
- Filtro por gênero funcional via JS (mostrar/ocultar cards)
- Busca em tempo real por título ou autor via JS
- Seção isolada usando <section id="livros"> pronta para integrar ao site completo
- Sem frameworks externos além de Google Fonts e Font Awesome