
export default ({title='Trophy'})=>(`
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
<path d="M52 12v-8h-40v8h-12v8c0 6.627 5.372 12 12 12 1.255 0 2.464-0.193 3.601-0.55 2.886 4.126 7.288 7.112 12.399 8.15v12.4h-4c-4.418 0-8 3.582-8 8h32c0-4.418-3.582-8-8-8h-4v-12.4c5.111-1.038 9.513-4.024 12.399-8.15 1.137 0.357 2.346 0.55 3.601 0.55 6.628 0 12-5.373 12-12v-8h-12zM12 27.25c-3.998 0-7.25-3.252-7.25-7.25v-4h7.25v4c0 2.512 0.464 4.915 1.31 7.129-0.425 0.078-0.862 0.121-1.31 0.121zM59.25 20c0 3.998-3.252 7.25-7.25 7.25-0.447 0-0.885-0.043-1.31-0.121 0.845-2.215 1.31-4.618 1.31-7.129v-4h7.25v4z"></path>
</svg>
`)