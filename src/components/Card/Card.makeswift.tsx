import { runtime } from "@/makeswift/runtime";
import { Card } from "./";
import {
    TextInput,
    Image,
    TextArea,
    Link,
    Style,
} from "@makeswift/runtime/controls";

runtime.registerComponent(Card, {
    type: "product-card",
    label: "Product Card",
    icon: "image",
    props: {
        className: Style(),
        image: Image(),
        alt: TextInput({
            label: "Image alt text",
            defaultValue: "Description of the image",
        }),
        heading: TextInput({ label: "Heading", defaultValue: "My Heading" }),
        linkText: TextInput({ label: "Link text", defaultValue: "Read more" }),
        description: TextArea({
            label: "Description",
            defaultValue: "My description",
        }),
        link: Link({ label: "Link" }),
    },
});