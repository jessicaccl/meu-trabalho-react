# 🚀 MyLifeGram (Projeto de React)

![Foto do Projeto MyLifeGram]([https://github.com/jessicaccl/meu-trabalho-react/blob/main/mylifegram.jpeg?raw=true])

## 📖 Visão Geral do Projeto
MyLifeGram é um clone funcional da interface do Instagram, construído como projeto para a disciplina de React. O objetivo foi aplicar conceitos fundamentais e avançados da biblioteca, criando um aplicativo de "feed social" dinâmico e interativo.

O projeto foi iniciado com `Create React App` e, como desafio técnico, foi **migrado com sucesso para `Vite`**, alinhando-se às ferramentas de *build* mais modernas do ecossistema React.


---

## ✨ Funcionalidades Implementadas
O aplicativo é totalmente funcional (no modo "mockado", sem backend) e permite ao usuário:

* **Tela de Login:** Uma tela de login visualmente idêntica à do Instagram, com ícones flutuantes (usando `styled-components` com props `$`) e navegação.
* **Feed da Home:** Uma página principal que exibe um feed de posts, stories e menus de navegação (superior e inferior).
* **"Curtir" um Post:** Cada post tem seu próprio estado. Clicar no ícone de coração o torna vermelho (via `useState` local no `Card`).
* **Criar um Novo Post:** Clicar no ícone `+` no menu inferior abre um modal.
* **Publicar no Feed:** Ao preencher o formulário no modal (URL da imagem, legenda) e clicar em "Publicar", o novo post aparece no topo do feed.
* **Posts com Música:** O sistema de postagem permite adicionar uma URL de `.mp3` (que renderiza um player `<audio>`) ou um link de "Embed" do Spotify (que renderiza o `<iframe>` do player do Spotify).

---

## 🛠️ Stack Tecnológica (O que foi usado)

Este projeto foi construído com as seguintes tecnologias e conceitos:

* **React (v18+)**: Biblioteca principal para a construção da UI.
* **Vite**: A ferramenta de *build* e servidor de desenvolvimento (substituindo o Create React App).
* **JavaScript (ES6+)** e **JSX**.
* **`styled-components`**: Para toda a estilização CSS-in-JS, permitindo a criação de componentes de UI encapsulados e dinâmicos.
* **`react-router-dom`**: Para a navegação e roteamento entre as páginas `/login` e `/home`.
* **`react-icons`**: Para a biblioteca de ícones (corações, menu, etc.) idênticos aos do Instagram.

---

## 🧠 Conceitos-Chave de React Aplicados

O foco do projeto foi demonstrar o domínio dos seguintes padrões do React:

1.  **Componentização:** O projeto é 100% modular. A UI é dividida em componentes reutilizáveis (ex: `Button`, `Input`, `Card`, `Stories`, `Header`, `BottomNav`, `ModalNovoPost`).
2.  **Props (Propriedades):** Os componentes "Pai" (como a `Home`) passam dados para os componentes "Filho" (como `Card` e `Stories`).
3.  **Estado Local (useState):** Usado em componentes "Filho" para controlar sua própria lógica interna.
    * **Exemplo:** O `Card.jsx` usa `useState` para "lembrar" se ele foi curtido (`isLiked`) ou não, sem afetar os outros cards.
4.  **Estado Elevado (Lifting State Up):** O conceito mais avançado do projeto. O estado "mestre" (a lista de `posts`) vive no componente "Pai" (`Home.jsx`).
    * **Exemplo:** O `ModalNovoPost` (Filho) coleta os dados e os "envia para cima" (via uma função passada por `props`) para a `Home`, que usa o `setPosts` para atualizar o feed de todos os componentes.

---

## 🏁 Como Rodar o Projeto Localmente

Para testar o projeto, siga os passos abaixo:

1.  **Clone o repositório:**
    ```bash
    git clone [https://github.com/jessicaccl/meu-trabalho-react.git](https://github.com/jessicaccl/meu-trabalho-react)
    ```

2.  **Entre na pasta do projeto:**
    ```bash
    cd meu-trabalho-react
    ```

3.  **Instale as dependências:**
    ```bash
    npm install
    ```

4.  **Inicie o servidor do Vite:**
    ```bash
    npm start
    ```

5.  Abra [http://localhost:5173](http://localhost:5173) no seu navegador.

---

## 🧪 Como Testar as Funcionalidades 

Siga este guia para testar as principais features dinâmicas:

1.  **Testar a "Curtida" (Estado Local):**
    * Na página `/home`, role o feed.
    * Clique no ícone de coração (contorno) em qualquer post.
    * **Resultado:** O ícone deve se tornar vermelho e preenchido. Clicar em outro post não afetará o primeiro.

2.  **Testar a Criação de Post (Estado Elevado):**
    * Clique no ícone `+` no menu inferior.
    * O modal "Criar nova publicação" deve aparecer.
    * Preencha os campos. Para a URL da imagem, você pode usar um link de teste: `https://picsum.photos/600`
    * Digite uma legenda.
    * Clique em "Publicar".
    * **Resultado:** O modal fechará e o seu novo post aparecerá no topo do feed.

3.  **Testar o Post com Música (MP3):**
    * Abra o modal de novo post.
    * No campo "URL da Mídia", coloque uma imagem.
    * No campo "Caminho da música", cole este link de MP3: `https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3` 
    * Clique em "Publicar".
    * **Resultado:** O novo post aparecerá com um player `<audio>` padrão logo abaixo da legenda.

4.  **Testar o Post com Música (Spotify):**
    * Vá ao Spotify e escolha uma música.
    * Clique em "Compartilhar" (...) -> "Embutir faixa".
    * Copie **apenas o link `src`** do `<iframe>`. (Ex: `https://open.spotify.com/embed/track/4cOdK2wGLETKBW3PvgPWqT`)
    * Cole esse link "Embed" no campo "Caminho da música" no modal.
    * Clique em "Publicar".
    * **Resultado:** O novo post aparecerá com o player oficial do Spotify embutido.
