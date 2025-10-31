# 🕹️ Detona Ralph - Jogo Web

Este projeto foi desenvolvido durante um **curso na [DIO (Digital Innovation One)](https://www.dio.me/)**.  
O objetivo do projeto é praticar **HTML, CSS e JavaScript** criando um jogo simples, divertido e interativo baseado no clássico **"Detona Ralph"**.

---

## 🎮 Sobre o Projeto

O jogo é uma versão simples do “Detona Ralph”, feita para treinar conceitos fundamentais de programação web, como:

-   Uso de `setInterval()` para controlar o tempo e a movimentação do inimigo
-   Armazenamento de dados com `localStorage`
-   Estruturação do projeto com HTML e CSS

Apesar de simples, o jogo está **funcional e jogável**, mas ainda **pode ser melhorado** — tanto na parte visual quanto na lógica de jogo.  
As melhorias futuras podem incluir sons extras, níveis de dificuldade, animações e um botão de reinício.

---

## ⚙️ Como Funciona o Jogo

1. O jogo começa com **3 vidas** e **20 segundos no cronômetro**.
2. Um inimigo aparece em posições aleatórias na grade.
3. Cada acerto no inimigo soma **1 ponto**.
4. Cada clique errado tira **1 vida**.
5. O jogo termina quando:
    - O tempo acaba ⏰
    - Ou as vidas chegam a zero ☠️
6. Quando o jogo termina, aparece um alerta mostrando sua pontuação.
7. Os **3 melhores resultados** (somente pontuação) são salvos e exibidos na tabela de ranking.
8. Ao **fechar ou atualizar a página (F5)**, o ranking é automaticamente limpo.
9. O jogo agora possui um **botão "Iniciar"**, que permite começar a partida manualmente, evitando que o jogo comece automaticamente ao carregar a página.

---

## 📁 Estrutura do Projeto
```
/detona-ralph
│
├── index.html
├── README.md
├── /src
│ ├── /scripts
│ │ └── engine.js
│ ├── /styles
│ │ ├── reset.css
│ │ └── main.css
│ └── /images
│ └── player.png
│ └── /sounds
│ └── hit.m4a
```
---

## 🚀 Tecnologias Utilizadas

-   **HTML5**
-   **CSS3**
-   **JavaScript (ES6)**
-   **LocalStorage**

---

## 🧠 Aprendizados

Durante o desenvolvimento, foram praticados conceitos como:

-   Estruturação de código e separação por responsabilidades
-   Controle de tempo e eventos com JavaScript
-   Armazenamento local de dados
-   Criação de rankings e pontuações

---

## 🔮 Melhorias Futuras

Algumas ideias para aprimorar o jogo:

-   Adicionar níveis de dificuldade (fácil, médio, difícil)
-   Inserir sons adicionais (erro, início, fim de jogo)
-   Criar animações para o inimigo e o personagem
-   Adicionar um botão de “Reiniciar Jogo” após o término
-   Melhorar o layout com transições e efeitos visuais

---

## 👨‍💻 Autor

Projeto desenvolvido por **Mariza Costa**, como parte dos estudos no curso da **[DIO - Digital Innovation One](https://www.dio.me/)**.
