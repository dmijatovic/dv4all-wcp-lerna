
export default ({title='Next'})=>(`
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
  <path d="M32 0c17.673 0 32 14.327 32 32s-14.327 32-32 32-32-14.327-32-32 14.327-32 32-32zM32 58c14.359 0 26-11.641 26-26s-11.641-26-26-26-26 11.641-26 26 11.641 26 26 26z"></path>
  <path d="M36 32l-16-12v24z"></path>
  <path d="M44 20h-8v24h8v-24z"></path>
  </svg>
`)