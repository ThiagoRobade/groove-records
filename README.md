# 🎵 Groove Records — Vitrine de Produtos em React

Aplicação web desenvolvida como atividade prática da disciplina de desenvolvimento front-end / React, simulando uma vitrine de e-commerce de discos de vinil e música.

🔗 **Repositório:** [https://github.com/ThiagoRobade/groove-records](https://github.com/ThiagoRobade/groove-records)
🌐 **Deploy:** [GitHub Pages](https://thiagorobade.github.io/groove-records/)

---

## 👨‍🎓 Informações do Aluno

- **Nome:** Thiago Robade
- **Instituição:** Estácio
- **Curso:** Engenharia de Software
- **Período:** 8º Período

---

## 🎯 Objetivo do Projeto

Colocar em prática conceitos fundamentais do ecossistema React:
- Componentização e reutilização de código
- Passagem e consumo de dados via `props`
- Gerenciamento de estado com o hook `useState`
- Estilização pura com CSS e responsividade (sem frameworks externos)

---

## 🚀 Funcionalidades e Requisitos Atendidos

### 1. Componentes
- `Header`: Cabeçalho com o nome da loja, subtítulo e indicador do contador do carrinho de compras.
- `ProductList`: Componente contêiner que itera sobre a lista de produtos e renderiza cada item.
- `ProductCard`: Card individual reutilizável responsável por exibir os detalhes do produto e suas ações.

### 2. Props & Dados Dinâmicos
- Todo o conteúdo de cada `ProductCard` (título, artista/descrição, preço, imagem) é recebido exclusivamente via `props`.
- Catálogo estruturado em array de objetos com mais de 6 produtos cadastrados.

### 3. Gerenciamento de Estado (`useState`)
- **Carrinho de Compras:** Contador dinâmico no cabeçalho atualizado ao adicionar produtos.
- **Favoritos:** Botão em cada card que alterna interativamente o estado de favoritado (mudança visual de ícone/cor).

### 4. Estilização & CSS
- CSS puro (sem bibliotecas como Bootstrap ou Tailwind).
- Layout em grade responsiva (CSS Grid / Flexbox) adaptável a telas menores (smartphones e tablets).
- Efeitos visuais de transição e `hover` nos cards e botões interativos.

---

## 🛠️ Tecnologias Utilizadas

- [React](https://react.dev/)
- [Vite](https://vitejs.dev/) *(ou Create React App)*
- CSS3 Moderno (Flexbox / CSS Grid / Media Queries)
- JavaScript (ES6+)

---

## 📦 Como Rodar o Projeto Localmente

1. **Clone o repositório:**
   ```bash
   git clone https://github.com/ThiagoRobade/groove-records.git
   cd groove-records
   npm install
   npm start
   ```