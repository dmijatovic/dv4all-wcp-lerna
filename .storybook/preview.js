/* global window */

import {
  configure,
  addParameters,
  setCustomElements,
} from '@storybook/web-components';

import customElements from '../icons/custom-elements.json';

// import '../components/lib/dv4wcp'

import '@storybook/addon-console';
// import { DocsPage, DocsContainer } from '@storybook/addon-docs/blocks';

// console.log("setCustomElements...", customElements)
setCustomElements(customElements);

addParameters({
  docs: {
    iframeHeight: '800',
    // container: DocsContainer,
    // page: DocsPage,
    // inlineStories: false,
  },
});

// Load stories from 3 loacations
const reqStories = () => [
  require.context('../components/src', true, /\.stories\.(js|mdx)$/),
  require.context('../icons/src', true, /\.stories\.(js|mdx)$/),
  require.context('../loaders/src', true, /\.stories\.(js|mdx)$/)
]

const req = reqStories()


configure(
  req,
  module
);

console.log("req...maybe..id", req)

// force full reload to not reregister web components
if (module.hot) {
  module.hot.accept(req.id, () => {
    const currentLocationHref = window.location.href;
    window.history.pushState(null, null, currentLocationHref);
    window.location.reload();
  });
}
