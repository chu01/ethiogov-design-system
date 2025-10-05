import Component from "./ethio-header.twig";
import ComponentExtended from "./ethio-header--extended/ethio-header--extended.twig";
import DefaultContent from "./ethio-header.json";
import MegamenuContent from "./ethio-header~megamenu.json";
import ExtendedContent from "./ethio-header--extended/ethio-header--extended.json";
import ExtendedMegamenuContent from "./ethio-header--extended/ethio-header--extended-megamenu.json";
import navSecondaryContent from "../../ethio-nav/src/ethio-nav__secondary/ethio-nav__secondary.json";
import { SmallContent as SmallSearchContent } from "../../ethio-search/src/content";
import TitleContent from "../../ethio-site-title/src/ethio-site-title.json";

export default {
  title: "Components/Header",
  args: {
    // Default search settings - Alternatively override in `ethio-header.json`
    search: {
      ...SmallSearchContent,
      search_js: true,
    },
    ...TitleContent,
  },
};

const Template = (args) => Component(args);
const ExtendedTemplate = (args) => ComponentExtended(args);

export const Default = Template.bind({});
Default.args = DefaultContent;

export const Megamenu = Template.bind({});
Megamenu.args = {
  ...MegamenuContent,
};

export const Extended = ExtendedTemplate.bind({});
Extended.args = {
  ...ExtendedContent,
  navSecondaryContent: {
    ...navSecondaryContent,
    search: true,
  },
};

export const ExtendedMegamenu = ExtendedTemplate.bind({});
ExtendedMegamenu.args = {
  ...ExtendedMegamenuContent,
  navSecondaryContent: {
    ...navSecondaryContent,
    search: true,
  },
};
