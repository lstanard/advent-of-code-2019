export const computer = (
  input: Array<number>,
  noun?: number,
  verb?: number
): number => {
  const increment: number = 4;
  const finalResult: Array<number> = [...input];
  let instructionPointer: number = 0;
  let halt: boolean = false;

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
      const opcode: number = program[0];
      let value: number = 0;

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

      instructionPointer = instructionPointer + increment;
    }
  }

  return finalResult[0];
};
