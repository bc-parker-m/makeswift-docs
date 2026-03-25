import { runtime } from "@/makeswift/runtime";
import { Style } from "@makeswift/runtime/controls";
import "@/components/Card/Card.makeswift";
import "@/components/Accordion/Accordion.makeswift";

function HelloWorld({ className }: { className: string }) {
  return <p className={className}>Hello, world!</p>;
}

runtime.registerComponent(HelloWorld, {
  type: "hello-world",
  label: "Hello, world!",
  props: {
    className: Style(),
  },
});