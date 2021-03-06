
export default ({title='Flag'})=>(`
  <style>
    :host{
      display: inline-block;
    }
    /* SCALE SVG TO PARENT */
    svg{
      width:100%;
      height:100%;
    }
  </style>
  <svg version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    width="64"
    height="64"
    viewBox="0 0 64 64">
  <title>${title}</title>
  <path d="M0 0h8v64h-8v-64z"></path>
  <path d="M52 40.188c5.164 0 9.661-1.249 12-3.094v-32c-2.339 1.845-6.836 3.094-12 3.094s-9.661-1.249-12-3.094v32c2.339 1.845 6.836 3.094 12 3.094z"></path>
  <path d="M38 2.033c-2.932-1.246-7.22-2.033-12-2.033-6.025 0-11.271 1.249-14 3.094v32c2.729-1.845 7.975-3.094 14-3.094 4.78 0 9.068 0.787 12 2.033v-32z"></path>
  </svg>
`)