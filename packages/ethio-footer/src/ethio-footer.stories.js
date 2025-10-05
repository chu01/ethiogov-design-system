import Medium from "./ethio-footer.twig";
import Big from "./ethio-footer--big/ethio-footer--big.twig";
import Slim from "./ethio-footer--slim/ethio-footer--slim.twig";

import DefaultContent from "./ethio-footer.json";
import BigContent from "./ethio-footer--big/ethio-footer--big.json";
import SlimContent from "./ethio-footer--slim/ethio-footer--slim.json";

export default {
  title: "Components/Footer",
};

const Template = (args) => Medium(args);
const BigTemplate = (args) => Big(args);
const SlimTemplate = (args) => Slim(args);

export const Default = Template.bind({});
Default.args = DefaultContent;

export const BigFooter = BigTemplate.bind({});
BigFooter.args = BigContent;

export const SlimFooter = SlimTemplate.bind({});
SlimFooter.args = SlimContent;
