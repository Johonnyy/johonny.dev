import { c as create_ssr_component } from "../../chunks/ssr.js";
const app = "";
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="flex flex-col bg-gradient-to-br from-black to-blue-950"><main class="flex flex-col justify-center items-center flex-1 p-4 w-full m-auto box-border">${slots.default ? slots.default({}) : ``}</main></div>`;
});
export {
  Layout as default
};
