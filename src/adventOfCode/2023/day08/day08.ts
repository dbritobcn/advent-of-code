import { mcm } from "../../../utils/math";
import { input } from "./input";
import { findInitialNodes } from "./utils/findInitialNodes";
import { Maps, inputParser } from "./utils/inputParser";

const getStepsFromMap = (maps: Maps, initialNode: string): number => {
    let currentNode: string = initialNode;
    let steps: number = 0;
    let i: number = 0;
    do {
        currentNode = maps.nodes[currentNode][maps.directions[i]] as string;
        i = (i + 1 >= maps.directions.length) ? 0 : i + 1;
        steps ++;
    } while (!currentNode.match(/.{2}Z\b/g));
    return steps;
};

export const day08Part1 = (input: string): number => {
    const initialNode: string = 'AAA';
    const maps: Maps = inputParser(input);
    return getStepsFromMap(maps, initialNode);
};

// console.log("2023 - day 8 - part 01: ", day08Part1(input));

export const day08Part2 = (input: string): number => {
    const maps = inputParser(input);
    const initialNodes = findInitialNodes(maps);
    const steps: number[] = initialNodes.map((initialNode: string) => getStepsFromMap(maps, initialNode));
    return mcm(steps);
};

// console.log("2023 - day 8 - part 02: ", day08Part2(input));