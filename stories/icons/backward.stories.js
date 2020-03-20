import { html } from 'lit-html';
import '../../icons/lib/dv4icons'

//check accessibility
import { withA11y } from '@storybook/addon-a11y';

import mdx from './backward.mdx';

export default{
  title:"Icons/dv4icon-backward",
  decorators: [withA11y],
  component:'dv4-icon-backward',
  parameters:{
    docs: {
      page: mdx,
    }
  }
}

/**
 * This is default setup for Backward component
 */
export const basic = () => html`
  <dv4-icon-backward title="dv4-icon-backward"></dv4-icon-backward>
`