
export default ({title='Stack'})=>(`
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
  <path d="M64 20l-32-16-32 16 32 16 32-16zM32 9.311l21.379 10.689-21.379 10.689-21.379-10.689 21.379-10.689zM57.59 28.795l6.41 3.205-32 16-32-16 6.41-3.205 25.59 12.795zM57.59 40.795l6.41 3.205-32 16-32-16 6.41-3.205 25.59 12.795z"></path>
  </svg>
`)