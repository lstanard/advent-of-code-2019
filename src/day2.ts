import { input as data } from "./day2-input";

let halt: boolean = false;

export const executeProgram = (
  program: Array<number>,
  finalResult: Array<number>
): Array<number> => {
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

  return finalResult;
};

export const computer = (input: Array<number>): Array<number> => {
  let finalResult: Array<number> = [...input];
  let opcodePos: number = 0;

  // "1202 program alarm"
  finalResult[1] = 12;
  finalResult[2] = 2;

  for (let index = 0; index < finalResult.length / 4; index++) {
    const program: Array<number> = finalResult.slice(opcodePos, opcodePos + 4);

    if (!halt) {
      finalResult = executeProgram(program, finalResult);
    }

    opcodePos = opcodePos + 4;
  }

  return finalResult;
};
