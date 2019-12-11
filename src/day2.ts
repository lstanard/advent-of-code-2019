let halt: boolean = false;

export const executeProgram = (
  program: Array<number>,
  memory: Array<number>
): Array<number> => {
  const opcode: number = program[0];
  let value = 0;

  switch (opcode) {
    case 1:
      value = memory[program[1]] + memory[program[2]];
      break;
    case 2:
      value = memory[program[1]] * memory[program[2]];
      break;
    case 99:
      halt = true;
      break;
    default:
      break;
  }

  if (value) {
    memory.splice(program[3], 1, value);
  }

  return memory;
};

export const computer = (
  input: Array<number>,
  noun?: number,
  verb?: number
): number => {
  const increment: number = 4;
  let finalResult: Array<number> = [...input];
  let instructionPointer: number = 0;

  if (noun) {
    finalResult[1] = noun;
  }
  if (verb) {
    finalResult[2] = verb;
  }

  for (let index = 0; index < finalResult.length / increment; index++) {
    const program: Array<number> = finalResult.slice(
      instructionPointer,
      instructionPointer + increment
    );

    if (!halt) {
      finalResult = executeProgram(program, finalResult);
      instructionPointer = instructionPointer + increment;
    }
  }

  return finalResult[0];
};
