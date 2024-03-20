const element ={
    type:'a',
    props:{
        href:'httpd://google.com',
        target:'blank',
    },
    children:'click me to visit google'
}

 customRender=(element,mainContainer)=>{
   const domElement = document.createElement(element.type)
   domElement.innerHTML=element.children;
   for (const prop in element.props) {
       if(prop==='children') continue;
       domElement.setAttribute(prop,element.props[prop])
   }
   mainContainer.appendChild(domElement)
}
const mainContainer = document.querySelector('#root')
customRender(element,mainContainer)