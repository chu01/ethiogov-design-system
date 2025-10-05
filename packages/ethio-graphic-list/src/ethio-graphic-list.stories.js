import Component from "./ethio-graphic-list.twig";
import Content from "./ethio-graphic-list.json";

export default {
  title: "Components/Graphic List",
};

const Template = (args) => Component(args);

export const GraphicList = Template.bind({});
GraphicList.args = Content;
