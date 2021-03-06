
export default ({title='Menu'})=>(`
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
  <path d="M30 44c5.523 0 10-4.477 10-10v-24c0-5.523-4.477-10-10-10s-10 4.477-10 10v24c0 5.523 4.477 10 10 10zM44 28v6c0 7.732-6.268 14-14 14s-14-6.268-14-14v-6h-4v6c0 9.265 7 16.894 16 17.889v8.111h-8v4h20v-4h-8v-8.111c9-0.995 16-8.624 16-17.889v-6h-4z"></path>
  </svg>
`)