import Component from "./ethio-process-list.twig";
import Tile from "./ethio-process-list--custom-sizing.twig";
import Test from "./ethio-process-list--no-text.twig";

export default {
  title: "Components/Process List",
};

const Template = (args) => Component(args);
const CustomTemplate = (args) => Tile(args);
const NoTextTemplate = (args) => Test(args);

export const Default = Template.bind({});
export const ProcessListCustomSizing = CustomTemplate.bind({});
export const ProcessListNoText = NoTextTemplate.bind({});
