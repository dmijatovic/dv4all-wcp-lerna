import { html } from 'lit-html';
import '../../icons/lib/dv4icons'

//check accessibility
import { withA11y } from '@storybook/addon-a11y';

/**
 * Change icon color using css prop fill:purple;
 */
export default{
  title:"Icons/dv4icon-arrow-right",
  decorators: [withA11y],
  component:'dv4-icon-arrow-right',
  parameters:{
    componentSubtitle:"SVG icon as web component",
    descriptionSlot:"This is my short description?!?"
  }
}

/**
 * This is basic SVG component layout. What can we do with this?
 */
export const basic = () => html`
  <dv4-icon-arrow-right title="dv4-icon-arrow-right"></dv4-icon-arrow-right>
`

/**
 * This is purple version of SVG icon. Uses CSS fill prop to change color.
 * @param {String} title
 */
export const purple = (title) => html`
  <style>
    .purple{
      fill: purple;
    }
  </style>
  <dv4-icon-arrow-right title="dv4-icon-arrow-right" class="purple"></dv4-icon-arrow-right>
`