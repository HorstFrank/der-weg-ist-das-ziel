import "./gameView.css";
import { createElement } from "./../utils/createElement";
// import { creategameView } from "./gameView";
import { getWpLinks } from "./../utils/api";
import { getRandomWpPage } from "./../utils/api";
import logoLeft from "../../assets/images/logo_l.png";
import logoRight from "../../assets/images/logo_r.png";
import trenner from "../../assets/images/trenner.png";
import abschluss from "../../assets/images/abschluss.png";

export default {
  title: "Components/gameView",
  parameters: { layout: "centered" },
};

// export async function test() {
//   return await "it works";
// }

// type rick = {
//   loaded: { linklist };
// };

// api.php?action=query&list=random&rnnamespace=0&rnlimit=1

let counter = 30;
let counterDiv = createElement("span", {
  className: "steps-left-container__number",
  innerText: counter,
});

const youAreHereDiv = createElement("span", {
  className: "you-are-here-container__wikisite",
  innerText: "FEHLER ?!?",
});

const winnerWinnerChickenDinner = createElement("div", {
  className: "gewonnen",
  innerText: "Sehr gut ... du hast GEWONNEN!!!!!",
});

async function userChoice(title) {
  const container = document.getElementById("link-container");
  if (title != "Weg") {
    counterDiv.innerText = --counter;
    youAreHereDiv.innerText = title;
    container.innerText = "";
    const listNew = await getWpLinks(title);
    if (listNew.links.length > 0) {
      listNew.links.forEach((e) => container.appendChild(createLinkButton(e)));
    } else {
      container.innerText =
        "Diese Seite ist eine Sackgasse. Du hast leider verloren.";
    }
  } else {
    container.innerText = "";
    container.appendChild(winnerWinnerChickenDinner);
  }
}

const createLinkListfromArray = (arr) => {
  return arr.map((title) => {
    // console.log(title);
    return createLinkButton(title);
  });
};

const createLinkButton = (title) => {
  return createElement("input", {
    className: "innerlinks",
    type: "button",
    value: title,
    onclick: () => userChoice(title),
  });
};

// const clearLinkContainer = () => {
//   document.getElementsByClassName("link-container")[0].innerText = "";
// };

// async function getRandomPageName() {
//   const x = await getRandomWpPage();
//   console.log(x);
// }

const headerHtml = createElement("div", {
  className: "logo-cont",
  childs: [
    createElement("img", {
      className: "logo-left",
      src: logoLeft,
    }),
    //   dog,
    createElement("span", {
      className: "logo-headline",
      innerText: "Der Weg ist das Ziel",
    }),
    createElement("img", {
      className: "logo-right",
      src: logoRight,
    }),
  ],
});

// const dividerLine = createElement("div", {
//   className: "trenner container-center",
//   childs: [
//     createElement("img", {
//       className: "abschluss",
//       src: abschluss,
//     //   src: "../../assets/images/abschluss.png",
//     }),
//   ],
// });

const createDividerLine = () =>
  createElement("div", {
    className: "trenner container-center",
    childs: [
      createElement("img", {
        className: "abschluss",
        src: abschluss,
      }),
    ],
  });

export const gameViewXX = (args, { loaded: { linklist } }) => {
  youAreHereDiv.innerText = linklist.title;

  return createElement("div", {
    childs: [
      createDividerLine(),
      headerHtml,
      createElement("div", {
        className: "you-are-here-container",
        childs: [
          createElement("div", {
            className: "you-are-here-container__label",
            innerText: "Du bist augenblicklich auf dem Wikipediaartikel: ",
          }),
          youAreHereDiv,
        ],
      }),
      createElement("div", {
        className: "steps-left-container",
        childs: [
          createElement("span", {
            innerText: "Du hast noch ",
          }),
          counterDiv,
          createElement("span", {
            innerText: " Versuche um zu 'Weg' zu kommen. ",
          }),
        ],
      }),

      createElement("div", {
        className: "link-headline",
        innerText: "Die Seite enthält folgende Verlinkungen:",
      }),
      createElement("div", {
        className: "link-container",
        id: "link-container",
        childs: [...createLinkListfromArray(linklist.links)],
      }),
      createDividerLine(),
    ],
  });
};

gameViewXX.loaders = [
  async () => ({
    linklist: await getWpLinks(),
  }),
];

// export const gameView = () => gameViewXX;
