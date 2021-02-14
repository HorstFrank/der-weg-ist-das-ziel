import { createElement } from "./createElement";
import { createInt32Hash } from "./createInt32Hash";

export function createDivContainer(className: string, id?: string): string {
  return createElement("div", {
    className: className,
    id: id ? id : createInt32Hash(Math.random()),
  });
}
