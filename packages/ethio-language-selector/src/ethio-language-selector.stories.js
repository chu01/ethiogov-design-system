import Component from "./ethio-language-selector.twig";
import ComponentThreeOrMore from "./ethio-language-selector--three-or-more/ethio-language-selector--three-or-more.twig";
import ComponentHeader from "./ethio-language-selector--header/ethio-language-selector--header.twig";
import UnstyledHeader from "./ethio-language-selector--unstyled/ethio-language-selector--unstyled.twig";
import DefaultContent from "./ethio-language-selector.json";
import ThreeOrMoreContent from "./ethio-language-selector--three-or-more/ethio-language-selector--three-or-more.json";
import HeaderContent from "./ethio-language-selector--header/ethio-language-selector--header.json";
import UnstyledContent from "./ethio-language-selector--unstyled/ethio-language-selector--unstyled.json";

export default {
  title: "Components/Language Selector",
};

const Template = (args) => Component(args);
const ThreeOrMoreTemplate = (args) => ComponentThreeOrMore(args);
const HeaderTemplate = (args) => ComponentHeader(args);
const UnstyledTemplate = (args) => UnstyledHeader(args);

export const TwoLanguages = Template.bind({});
TwoLanguages.args = DefaultContent;

export const ThreeOrMoreLanguages = ThreeOrMoreTemplate.bind({});
ThreeOrMoreLanguages.args = ThreeOrMoreContent;

export const InHeaderExample = HeaderTemplate.bind({});
InHeaderExample.args = HeaderContent;

export const UnstyledExample = UnstyledTemplate.bind({});
UnstyledExample.args = UnstyledContent;
