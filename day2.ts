import { input } from "./day2-input";

const finalResult: Array<number> = [...input];
let opcodePos: number = 0;
let halt: boolean = false;

// "1202 program alarm"
finalResult[1] = 12;
finalResult[2] = 2;

const executeProgram = (program: Array<number>): void => {
  const opcode: number = program[0];
  let value = 0;

  switch (opcode) {
    case 1:
      value = finalResult[program[1]] + finalResult[program[2]];
      break;
    case 2:
      value = finalResult[program[1]] * finalResult[program[2]];
      break;
    case 99:
      halt = true;
      break;
    default:
      break;
  }

  if (value) {
    finalResult.splice(program[3], 1, value);
  }
};

for (let index = 0; index < finalResult.length / 4; index++) {
  const program: Array<number> = finalResult.slice(opcodePos, opcodePos + 4);

  if (!halt) {
    executeProgram(program);
  }

  opcodePos = opcodePos + 4;
}

// expect 11590668
console.log("finalResult[0]:", finalResult[0]);
