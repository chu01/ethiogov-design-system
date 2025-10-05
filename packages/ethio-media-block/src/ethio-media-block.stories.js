import Component from "./ethio-media-block.twig";
import Content from "./ethio-media-block.json";

export default {
  title: "Components/Media Block",
};

const Template = (args) => Component(args);

export const MediaBlock = Template.bind({});
MediaBlock.args = Content;
