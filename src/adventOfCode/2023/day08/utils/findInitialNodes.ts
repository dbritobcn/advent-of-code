import { Maps } from "./inputParser";

export const findInitialNodes = (maps: Maps): string[] => {
  return Object.keys(maps.nodes).filter(
    (node: string) => !!node.match(/.{2}A\b/g)
  );
};
