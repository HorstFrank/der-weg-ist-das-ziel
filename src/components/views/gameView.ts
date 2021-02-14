// import "./../../../global.css";
import { createElement } from "../utils/createElement";
// import { createDivContainer } from "./../utils/createDivContainer";
// import { getWpLinks } from "./../utils/api";

// const headline = createElement("h1", {
//   className: "headline",
//   innerText: "Dummy Headline",
// });

// const gameStateContainer = createDivContainer(
//   "main__state-container",
//   "state-container"
// );
// const gameResultContainer = createDivContainer(
//   "main__result-container",
//   "result-container"
// );

export function creategameView() {
  //   const links = await getWpLinks();

  return createElement("div", {
    className: "main",
    // childs: [gameStateContainer, gameResultContainer],
  });
}
