import Component from "./ethio-alert.twig";
import TestComponent from "./test/test-patterns/test-ethio-alert-lists.twig";
import ComparisonComponent from "./test/test-patterns/test-alert-comparison.twig";
import onPageComponent from "./test/test-patterns/test-alert-in-template.twig";
import BannerContent from "../../ethio-banner/src/content/ethio-banner.json";
import FooterContent from "../../ethio-footer/src/ethio-footer.json";
import SiteAlertContent from "../../ethio-site-alert/src/content/ethio-site-alert~info.json";
import SidenavContent from "../../ethio-sidenav/src/ethio-sidenav.json";

import {
  DefaultContent,
  EmergencyContent,
  ErrorContent,
  InfoContent,
  NoHeaderContent,
  NoIconContent,
  SlimContent,
  SuccessContent,
  WarningContent,
  TestAlertContent,
} from "./content";

export default {
  title: "Components/Alert",
};

const Template = (args) => Component(args);
const TestTemplate = (args) => TestComponent(args);
const ComparisonTemplate = (args) => ComparisonComponent(args);
const onPageTemplate = (args) => onPageComponent(args);

export const Default = Template.bind({});
Default.args = DefaultContent;

export const Emergency = Template.bind({});
Emergency.args = EmergencyContent;

export const Error = Template.bind({});
Error.args = ErrorContent;

export const Info = Template.bind({});
Info.args = InfoContent;

export const NoHeader = Template.bind({});
NoHeader.args = NoHeaderContent;

export const NoIcon = Template.bind({});
NoIcon.args = NoIconContent;

export const Slim = Template.bind({});
Slim.args = SlimContent;

export const Success = Template.bind({});
Success.args = SuccessContent;

export const Warning = Template.bind({});
Warning.args = WarningContent;

export const Test = TestTemplate.bind({});

export const TestAlertSiteAlertComparison = ComparisonTemplate.bind({});
TestAlertSiteAlertComparison.args = {
  ...BannerContent,
  ...FooterContent,
  ...TestAlertContent,
};

export const TestAlertsInTemplate = onPageTemplate.bind({});
TestAlertsInTemplate.args = {
  ...BannerContent,
  ...FooterContent,
  ...SidenavContent,
  ...SiteAlertContent,
  ...TestAlertContent,
};
