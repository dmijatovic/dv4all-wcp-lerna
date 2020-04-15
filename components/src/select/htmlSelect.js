import cssSelect from './cssSelect'

const htmlSelect = props =>{

  const labelElement = ({label, value})=>{
    if (label && value && value!=='-1'){
      return `
        <label>${label}</label>
      `
    } else {
      return ''
    }
  }

  const selectElement=({name, value, label,options=''})=>{
    const items = options.split(',')
    let html='<select '
    if (value && value!=='-1'){
      html+= ' class="touched"'
    }
    if (name){
      html+= ` id="${name}" name="${name}"`
    }
    if (label){
      if (value && value!=='-1'){
        html+=`><option value="-1">${label}</option>`
      }else{
        html+=`><option value="-1" selected disabled>${label}</option>`
      }
    } else {
      html+='><option value="-1" selected disabled></option>'
    }
    items.forEach((option,i)=>{
      if (option){
        if (value===`${i}`){
          html+=`<option value="${i}" selected>${option}</option>`
        }else{
          html+=`<option value="${i}">${option}</option>`
        }
      }
    })
    html+='</select>'
    return html
  }
  const messageElement = ({message})=>{
    if (message){
      return `
      <div class="msg">${message}</div>
      `
    }else{
      return ''
    }
  }

  return (`
    <style>
      ${cssSelect}
    </style>
    <div class="dv4-select">
      ${labelElement(props)}
      ${selectElement(props)}
      ${messageElement(props)}
      <svg version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        width="64" height="64"
        viewBox="0 0 64 64">
        <path d="M46.001 28c-0.557 0-1.111-0.231-1.506-0.683l-12.495-14.28-12.495 14.28c-0.727 0.831-1.991 0.916-2.822 0.188s-0.915-1.991-0.188-2.822l14-16c0.38-0.434 0.928-0.683 1.505-0.683s1.125 0.249 1.505 0.683l14 16c0.727 0.831 0.643 2.095-0.188 2.822-0.379 0.332-0.849 0.495-1.316 0.495z"></path>
      </svg>
    </div>
  `)
}

export default htmlSelect