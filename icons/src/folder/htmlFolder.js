
export default ({title='Folder', open})=>(`
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
  ${open ?
    '<path d="M52 60l12-32h-52l-12 32zM8 24l-8 36v-52h18l8 8h26v8z"></path>'
    :
    '<path d="M28 8l8 8h28v44h-64v-52z"></path>'
  }
  </svg>
`)