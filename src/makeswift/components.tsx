import { runtime } from "@/makeswift/runtime";
import { Style } from "@makeswift/runtime/controls";

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