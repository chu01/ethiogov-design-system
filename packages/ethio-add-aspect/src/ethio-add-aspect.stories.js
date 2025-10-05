import Component from "./ethio-add-aspect.twig";
import TestComponent from "./test/test-ethio-add-aspect.twig";

export default {
  title: "Components/Add Aspect",
};

const Template = (args) => Component(args);
const TestTemplate = (args) => TestComponent(args);

export const AddAspect = Template.bind({});
export const Test = TestTemplate.bind({});
