Crie apenas a seção "Trocas" de um site chamado NovaEstante, um sebo literário online para compra, venda e troca de livros usados. Slogan: "Histórias ganham novas vidas."

## Conteúdo da seção

A seção deve apresentar três blocos principais:

### 1. Como funciona a troca
Explicação visual em etapas (passo a passo) do processo de troca entre usuários cadastrados:
- Passo 1: Encontre um livro disponível para troca no catálogo
- Passo 2: Envie uma solicitação de troca ao proprietário
- Passo 3: Aguarde a resposta (aceitar ou recusar)
- Passo 4: Combinem os detalhes e realizem a troca

### 2. Regras de negociação
Cards ou lista visual com as regras:
- Apenas usuários cadastrados podem solicitar trocas
- O proprietário pode aceitar, recusar ou aguardar
- O solicitante pode cancelar antes da aceitação
- Ambos os livros devem estar cadastrados no sistema
- A plataforma não intermedia a entrega física
- Trocas combinadas fora da plataforma são de responsabilidade dos usuários

### 3. Painel de Solicitações de Troca (simulado)
Área com cards de solicitações fictícias em diferentes status, demonstrando visualmente os estados possíveis:
- Pendente (aguardando resposta)
- Aceita (troca confirmada)
- Recusada
- Cancelada

Cada card de solicitação deve conter:
- Livro oferecido (título + autor)
- Livro desejado (título + autor)
- Nome fictício do outro usuário
- Data da solicitação
- Badge de status com cor correspondente
- Botões de ação condicionais ao status:
  - Pendente: botões "Aceitar" e "Recusar" (para o proprietário) ou "Cancelar" (para o solicitante)
  - Aceita: botão "Ver detalhes"
  - Recusada/Cancelada: botão "Nova solicitação"

## Interatividade JavaScript

- Clicar em "Aceitar" muda o status do card para Aceita com animação
- Clicar em "Recusar" muda o status para Recusada com animação
- Clicar em "Cancelar" muda para Cancelada com animação
- Filtro por status: botões/tabs para mostrar Todas, Pendentes, Aceitas, Recusadas, Canceladas

## Requisitos técnicos

- HTML + CSS + JS puro em um único arquivo
- Totalmente responsivo (desktop → tablet → mobile)
- Animações suaves de entrada (staggered fade-in ao carregar)
- Transição animada ao mudar status dos cards
- Seção isolada usando <section id="trocas"> pronta para integrar ao site completo
- Sem frameworks externos além de Google Fonts e Font Awesome
- Cards de solicitação com mínimo de 4 exemplos fictícios (um de cada status)