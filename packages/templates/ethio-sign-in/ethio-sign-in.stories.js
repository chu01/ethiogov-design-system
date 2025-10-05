import SignInForm from "./ethio-sign-in.twig";
import SignInMultipleForm from "./ethio-sign-in--multiple/ethio-sign-in--multiple.twig";
import DefaultContent from "./ethio-sign-in.json";
import EsContent from "./ethio-sign-in~lang-es.json";
import MultipleContent from "./ethio-sign-in--multiple/ethio-sign-in--multiple.json";
import EsMultipleContent from "./ethio-sign-in--multiple/ethio-sign-in--multiple~lang-es.json";

export default {
  title: "Pages/Sign-In",
};

export const SignInPage = () =>
  SignInForm({
    ...DefaultContent,
  });

export const SignInPageSpanish = () =>
  SignInForm({
    ...EsContent,
  });

export const MultipleSignInPage = () =>
  SignInMultipleForm({
    ...MultipleContent,
  });

export const MultipleSignInPageSpanish = () =>
  SignInMultipleForm({
    ...EsMultipleContent,
  });
