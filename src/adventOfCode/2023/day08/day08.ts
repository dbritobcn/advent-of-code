import { inputParser } from "./utils/inputParser";

const initialNode = 'AAA';
const finalNode = 'ZZZ';

export const day08Part1 = (input: string): number => {
    const maps = inputParser(input);
    let currentNode = initialNode;
    let steps = 0;
    let i = 0;
    do {
        currentNode = maps.nodes[currentNode][maps.directions[i]];
        i = (i + 1 >= maps.directions.length) ? 0 : i + 1;
        steps ++;
    } while (currentNode !== finalNode);
    return steps;
};