import DefaultContent from "./ethio-docs.json";
import Component from "./ethio-docs.twig";

export default {
  title: "Pages/Documentation Page",
  args: DefaultContent,
};

const Template = (args) => Component(args);

export const DocumentationPage = Template.bind({});

export const TestDocumentationReorder = Template.bind({});
TestDocumentationReorder.argTypes = {
  sidenav_reorder: {
    control: { type: "boolean" },
    defaultValue: false,
    name: "Reorder with CSS",
  },
};
