import { addParameters, addDecorator, configure } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import theme from './config-theme';

addParameters({
  options: {
    theme: theme,
    storySort: (a, b) => a[1].id.localeCompare(b[1].id),
    /**
     * display panel that shows addon configurations
     * @type {Boolean}
     */
    showPanel: false,
  },
});

addDecorator(withKnobs);

const req = require.context('../stories', true, /.story.(tsx?|ts?)$/);
function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
