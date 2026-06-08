import type { Preview } from "@storybook/react-vite";
import "@trussworks/react-uswds/lib/uswds.css";

const preview: Preview = {
  parameters: {
    options: {
      storySort: {
        order: ["Welcome", "Tokens", "Components", "Templates"],
      },
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },

    a11y: {
      // 'todo' - show a11y violations in the test UI only
      // 'error' - fail CI on a11y violations
      // 'off' - skip a11y checks entirely
      test: "todo",
    },
  },
};

export default preview;
