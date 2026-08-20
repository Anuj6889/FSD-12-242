// const doc = document.querySelector(...);

import { identifier } from "revolt";

const button = new revolt.button();

button.on("click", () => {
  console.log("Button clicked!");
});

button.emit("click");