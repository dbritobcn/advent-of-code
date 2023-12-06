import { Races } from "../utils/inputParser";

export const inputFixture: string = `Time:      7  15   30
Distance:  9  40  200`;

export const inputFixtureParsed: Races = {
  time: [ 7, 15, 30 ],
  distance: [ 9, 40, 200 ]
};

export const inputKerningFixtureParsed: Races = {
  time: [ 71530 ],
  distance: [ 940200 ]
};