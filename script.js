document
  .getElementById("language-toggle")
  .addEventListener("click", function () {
    const currentLang = this.textContent;

    if (currentLang === "PT-PT") {
      this.textContent = "EN";
      translateToPortuguese();
    } else {
      this.textContent = "PT-PT";
      translateToEnglish();
    }
  });

function translateToPortuguese() {
  document.getElementById("title").textContent = "Mahjong Portugal";
  document.getElementById("home-tab").textContent = "Início";
  document.getElementById("news-tab").textContent = "Notícias";
  document.getElementById("rules-tab").textContent = "Regras";

  document.getElementById("welcome-title").textContent =
    "Bem-vindo ao Clube de Mahjong Portugal";
  document.getElementById("welcome-text").textContent =
    "Somos uma comunidade de entusiastas de Mahjong que se reúnem regularmente para jogar, aprender e apreciar a rica tradição deste antigo jogo. Seja você um jogador experiente ou um iniciante, encontrará um ambiente acolhedor aqui.";

  document.getElementById("news-title").textContent = "Notícias do Clube";
  document.getElementById("tournament-title").textContent = "Próximo Torneio";
  document.getElementById("tournament-text").textContent =
    "Junte-se a nós para o nosso próximo grande torneio no dia 15 de setembro! As inscrições já estão abertas. Não perca a oportunidade de competir com os melhores!";
  document.getElementById("members-title").textContent =
    "Novos Membros Bem-vindos!";
  document.getElementById("members-text").textContent =
    "Estamos sempre abertos a novos membros. Se você estiver interessado em aprender ou jogar Mahjong, sinta-se à vontade para participar de uma das nossas sessões semanais.";

  document.getElementById("rules-title").textContent = "Regras do Mahjong";
  document.getElementById("rules-text").textContent =
    "O Mahjong é um jogo de habilidade, estratégia e cálculo que envolve um grau de sorte. O jogo é geralmente jogado por quatro jogadores. Aqui estão as regras básicas:";
  document.getElementById("rule-1").textContent =
    "O jogo é jogado com um conjunto de 144 peças baseadas em caracteres e símbolos chineses.";
  document.getElementById("rule-2").textContent =
    "Cada jogador começa pegando 13 peças.";
  document.getElementById("rule-3").textContent =
    "O objetivo é ser o primeiro a completar uma mão legal usando as peças tiradas e descartadas.";
  document.getElementById("rule-4").textContent =
    "As regras específicas variam conforme a região, mas as variantes mais comuns são o Cantonês, o Riichi Japonês e o Mahjong Americano.";

  document.getElementById("footer-text").textContent =
    "© 2024 Clube de Mahjong Portugal. Todos os direitos reservados.";
}

function translateToEnglish() {
  document.getElementById("title").textContent = "Mahjong Portugal";
  document.getElementById("home-tab").textContent = "Home";
  document.getElementById("news-tab").textContent = "News";
  document.getElementById("rules-tab").textContent = "Rules";

  document.getElementById("welcome-title").textContent =
    "Welcome to the Mahjong Club Portugal";
  document.getElementById("welcome-text").textContent =
    "We are a community of Mahjong enthusiasts who gather regularly to play, learn, and enjoy the rich tradition of this ancient game. Whether you are a seasoned player or a beginner, you'll find a welcoming environment here.";

  document.getElementById("news-title").textContent = "Club News";
  document.getElementById("tournament-title").textContent =
    "Upcoming Tournament";
  document.getElementById("tournament-text").textContent =
    "Join us for our next big tournament on the 15th of September! Registration is open now. Don't miss out on the opportunity to compete with the best!";
  document.getElementById("members-title").textContent = "New Members Welcome!";
  document.getElementById("members-text").textContent =
    "We are always open to new members. If you are interested in learning or playing Mahjong, feel free to join one of our weekly sessions.";

  document.getElementById("rules-title").textContent = "Rules of Mahjong";
  document.getElementById("rules-text").textContent =
    "Mahjong is a game of skill, strategy, and calculation involving a degree of chance. The game is usually played by four players. Here are the basic rules:";
  document.getElementById("rule-1").textContent =
    "The game is played with a set of 144 tiles based on Chinese characters and symbols.";
  document.getElementById("rule-2").textContent =
    "Each player begins by drawing 13 tiles.";
  document.getElementById("rule-3").textContent =
    "The goal is to be the first to complete a legal hand using the drawn and discarded tiles.";
  document.getElementById("rule-4").textContent =
    "Specific rules vary by region, but the most common variants are Cantonese, Japanese Riichi, and American Mahjong.";
}
