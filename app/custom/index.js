import CustomContextPad from "./CustomContextPad";
import CustomElementFactory from "./CustomElementFactory";
import CustomRenderer from "./CustomRenderer";
import CustomContextPalette from "./CustomContextPalette";

export default {
  __init__: ["customContextPad", "customElementFactory", "customRenderer", "customContextPalette"],
  customContextPad: ["type", CustomContextPad],
  customElementFactory: ["type", CustomElementFactory],
  customRenderer: ["type", CustomRenderer],
  customContextPalette: ["type", CustomContextPalette]
};
