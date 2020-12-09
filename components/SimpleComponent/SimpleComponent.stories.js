import { storiesOf } from "@storybook/vue";
import SimpleComponent from "./SimpleComponent";

storiesOf("SimpleComponent", module)
  .add("normal", () => ({
    components: { SimpleComponent },
    template: `
    <SimpleComponent :title="title" />
    `,
    data: () => ({
      title: "This is normal",
    }),
  }))
  .add("Large", () => ({
    components: { SimpleComponent },
    template: `
    <SimpleComponent :title="title" :isLarge="true" />
    `,
    data: () => ({
      title: "This is large",
    }),
  }));
