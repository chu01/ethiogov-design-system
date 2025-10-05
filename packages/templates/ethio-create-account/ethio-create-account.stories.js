// Import page content
import Component from "./ethio-create-account.twig";
import DefaultContent from "./ethio-create-account.json";
import EsContent from "./ethio-create-account~lang-es.json";

export default {
  title: "Pages/Create Account",
};

export const CreateAccountPage = () =>
  Component({
    ...DefaultContent,
  });

export const CreateAccountPageSpanish = () =>
  Component({
    ...EsContent,
  });
