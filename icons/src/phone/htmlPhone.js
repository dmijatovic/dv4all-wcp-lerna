
export default ({title='Pencil'})=>(`
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
  <path d="M44 40c-4 4-4 8-8 8s-8-4-12-8-8-8-8-12 4-4 8-8-8-16-12-16-12 12-12 12c0 8 8.219 24.219 16 32s24 16 32 16c0 0 12-8 12-12s-12-16-16-12z"></path>
  </svg>
`)