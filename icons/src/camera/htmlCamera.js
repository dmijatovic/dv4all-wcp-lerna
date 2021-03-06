
export default ({title='Camera'})=>(`
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
  <path d="M19 38c0 7.18 5.82 13 13 13s13-5.82 13-13-5.82-13-13-13-13 5.82-13 13zM60 16h-14c-1-4-2-8-6-8h-16c-4 0-5 4-6 8h-14c-2.2 0-4 1.8-4 4v36c0 2.2 1.8 4 4 4h56c2.2 0 4-1.8 4-4v-36c0-2.2-1.8-4-4-4zM32 55.75c-9.803 0-17.75-7.947-17.75-17.75s7.947-17.75 17.75-17.75c9.803 0 17.75 7.947 17.75 17.75s-7.947 17.75-17.75 17.75zM60 28h-8v-4h8v4z"></path>
  </svg>
`)