import { computer } from "./day2";
import { input as memory } from "./day2-input";

const range: Array<number> = [];
for (let i = 0; i <= 99; i++) {
  range.push(i);
}

for (let nounIndex = 0; nounIndex <= range.length; nounIndex++) {
  const noun = range[nounIndex];

  for (let verbIndex = 0; verbIndex <= range.length; verbIndex++) {
    const verb = range[verbIndex];

    if (noun && verb) {
      const output = computer([...memory], noun, verb);

      if (output === 19690720) {
        console.log("noun for 19690720: ", noun);
        console.log("verb for 19690720: ", verb);
      }
    }
  }
}
