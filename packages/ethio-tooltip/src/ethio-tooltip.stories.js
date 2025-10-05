import Component from "./ethio-tooltip.twig";
import TestComponent from "./test/test-patterns/test-ethio-tooltip-utilities.twig";
import TestNoWrapperComponent from "./test/test-patterns/test-ethio-tooltip-no-wrapper.twig";
import TestNonButtonComponent from "./test/test-patterns/test-ethio-tooltip-non-button.twig";
import UtilityComponent from "./ethio-tooltip--utilities.twig";

export default {
  title: "Components/Tooltip",
};

const Template = (args) => Component(args);
const TestTemplate = (args) => TestComponent(args);
const TestNoWrapperTemplate = (args) => TestNoWrapperComponent(args);
const TestNonButtonTemplate = (args) => TestNonButtonComponent(args);
const UtilityTemplate = (args) => UtilityComponent(args);

export const Tooltip = Template.bind({});
export const TooltipUtility = UtilityTemplate.bind({});
export const Test = TestTemplate.bind({});
export const TestNoWrapper = TestNoWrapperTemplate.bind({});
export const TestNonButton = TestNonButtonTemplate.bind({});
