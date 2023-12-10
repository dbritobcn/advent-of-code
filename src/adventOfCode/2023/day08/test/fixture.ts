import { inputParser } from "../utils/inputParser";

export const inputFixture01 = `RL

AAA = (BBB, CCC)
BBB = (DDD, EEE)
CCC = (ZZZ, GGG)
DDD = (DDD, DDD)
EEE = (EEE, EEE)
GGG = (GGG, GGG)
ZZZ = (ZZZ, ZZZ)`;

export const inputFixtureParsed01 = {
    directions: ['R', 'L'],
    nodes: {
        AAA: {
            R: 'CCC',
            L: 'BBB'
        },
        BBB: {
            R: 'EEE',
            L: 'DDD'
        },
        CCC: {
            R: 'GGG',
            L: 'ZZZ'
        },
        DDD: {
            R: 'DDD',
            L: 'DDD'
        },
        EEE: {
            R: 'EEE',
            L: 'EEE'
        },
        GGG: {
            R: 'GGG',
            L: 'GGG'
        },
        ZZZ: {
            R: 'ZZZ',
            L: 'ZZZ'
        },
    },
};

export const inputFixture02 = `LLR

AAA = (BBB, BBB)
BBB = (AAA, ZZZ)
ZZZ = (ZZZ, ZZZ)`;

export const inputFixtureParsed02 = {
    directions: ['L', 'L', 'R'],
    nodes: {
        AAA: {
            L: 'BBB',
            R: 'BBB'
        },
        BBB: {
            L: 'AAA',
            R: 'ZZZ'
        },
        ZZZ: {
            L: 'ZZZ',
            R: 'ZZZ'
        },
    },
};

export const inputWithGhosts = `LR

11A = (11B, XXX)
11B = (XXX, 11Z)
11Z = (11B, XXX)
22A = (22B, XXX)
22B = (22C, 22C)
22C = (22Z, 22Z)
22Z = (22B, 22B)
XXX = (XXX, XXX)`;

export const inputWithGhostsParsed = inputParser(inputWithGhosts);