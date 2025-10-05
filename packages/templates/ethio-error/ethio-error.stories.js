import Component from "./ethio-error.twig";
import DefaultContent from "./ethio-error.json";
import EsContent from "./ethio-error~lang-es.json";

export default {
  title: "Pages/Error",
};

export const PageNotFound = () =>
  Component({
    ...DefaultContent,
  });

export const PageNotFoundSpanish = () =>
  Component({
    ...EsContent,
  });
