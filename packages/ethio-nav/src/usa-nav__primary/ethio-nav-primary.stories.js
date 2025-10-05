import Component from "./ethio-nav__primary.twig";
import Content from "./ethio-nav__primary.json";

export default {
  title: "Components/Header/Partials/Primary",
};

const Template = (args) => Component(args);

export const Default = Template.bind({});
Default.args = Content;

export const Megamenu = Template.bind({});
Megamenu.args = {
  ...Content,
  nav: {
    ...Content.nav,
    megamenu: true,
  },
};
