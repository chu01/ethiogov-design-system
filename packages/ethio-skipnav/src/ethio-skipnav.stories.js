import Component from "./ethio-skipnav.twig";
import Content from "./ethio-skipnav.json";

export default {
  title: "Components/Skipnav",
};

const Template = (args) => Component(args);

export const Skipnav = Template.bind({});
Skipnav.args = Content;
