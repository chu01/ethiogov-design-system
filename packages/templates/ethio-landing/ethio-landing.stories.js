import Component from "./ethio-landing.twig";
import DefaultContent from "./ethio-landing.json";

export default {
  title: "Pages/Landing Page",
};

const Template = (args) => Component(args);

export const LandingPage = Template.bind({});
LandingPage.args = DefaultContent;
