import { runtime } from "@/makeswift/runtime";

import { List, TextInput, Group, Slot, Style } from "@makeswift/runtime/controls";

import { Accordion } from "./";
runtime.registerComponent(Accordion, {
  type: "accordion",
  label: "Accordion",
  props: {
    className: Style(),
    accordions: List({
      label: "Accordion",
      type: Group({
        label: "Accordion",
        preferredLayout: Group.Layout.Inline,
        props: {
          title: TextInput({
            label: "Title",
            defaultValue: "Accordion Title",
          }),
          children: Slot(),
        },
      }),
      getItemLabel(accordionItem) {
        return accordionItem?.title || "Accordion Title";
      },
    }),
  },
});