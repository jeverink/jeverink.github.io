const tutorialPages = [
  {
    title: "Welcome to CTguesser",
    text: "CTguesser is a game where you have to guess a word from projections from different angles, based on Computed Tomography (CT) imaging."
  },
  {
    title: "Projections",
    text: "Each projection represents the distribution of the image at a given angle. Imagine all the pixels of the letter falling into one big pile.",
    image: "imgs/tutorial_1.png",
  },
  {
    title: "Projections",
    text: "Different angles give different information.",
    image: "imgs/tutorial_2.png",
  },
  {
    title: "Input",
    text: "Tap any cell to enter a letter.",
    image: "imgs/tutorial_3.png",
  },
  {
    title: "Target projections",
    text: "The target projection is shown in green. The angle can be changed at any time using the slider.",
    image: "imgs/tutorial_4.png",
  },
  {
    title: "Guessing",
    text: "Try to infer the letters that will match the target projection.",
    image: "imgs/tutorial_5.png",
  },
  {
    title: "Goal",
    text: "Find the word that matches the target. Good luck!",
    image: "imgs/tutorial_6.png"
  },
];

let tutorialIndex = 0;

const tutorialOverlay = document.getElementById("tutorialOverlay");
const tutorialTitle = document.getElementById("tutorialTitle");
const tutorialText = document.getElementById("tutorialText");
const tutorialProgress = document.getElementById("tutorialProgress");

const imageWrapper = document.getElementById("tutorialImageWrapper");
const imageEl = document.getElementById("tutorialImage");

function renderTutorial() {
  const page = tutorialPages[tutorialIndex];

  tutorialTitle.textContent = page.title;
  tutorialText.textContent = page.text;
  tutorialProgress.textContent =
    `Step ${tutorialIndex + 1} of ${tutorialPages.length}`;

  // Image handling
  if (page.image) {
    imageEl.src = page.image;
    imageEl.alt = page.title;
    imageWrapper.classList.remove("hidden");
  } else {
    imageWrapper.classList.add("hidden");
  }

  document.getElementById("tutorialPrevBtn").disabled = tutorialIndex === 0;
  document.getElementById("tutorialNextBtn").textContent =
    tutorialIndex === tutorialPages.length - 1 ? "Finish" : "Next";
}

document.getElementById("openTutorialBtn").onclick = () => {
  tutorialIndex = 0;
  renderTutorial();
  tutorialOverlay.classList.remove("hidden");
};

document.getElementById("closeTutorialBtn").onclick = () => {
  tutorialOverlay.classList.add("hidden");
};

document.getElementById("tutorialNextBtn").onclick = () => {
  if (tutorialIndex < tutorialPages.length - 1) {
    tutorialIndex++;
    renderTutorial();
  } else {
    tutorialOverlay.classList.add("hidden");
  }
};

document.getElementById("tutorialPrevBtn").onclick = () => {
  if (tutorialIndex > 0) {
    tutorialIndex--;
    renderTutorial();
  }
};
