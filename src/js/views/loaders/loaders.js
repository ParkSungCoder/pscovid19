import * as nodes from '../utility/nodes';




/* ~~~~~ Loaders  ~~~~~ */

export const nodeLoader = () => { return nodes.select('.loader-card'); } 

export const circular = () => {
  try {
  	const markup = `
    <div class='loader-card'>
    	<div class="lds-roller">
        <div></div><div></div> <div></div><div></div>
        <div></div><div></div> <div></div><div></div>
      </div>
    </div>
    `;
    nodes.elementId('display').insertAdjacentHTML('afterbegin', markup);    
  }
  catch(err){ /*alert(`Loaders | circular() | ${err}`);*/ }
}

export const clearCircular = () => {
  try {
  	nodeLoader().parentNode.removeChild(nodeLoader());
  }
  catch(err){ /*alert(`Loaders | clearCircular() | ${err}`);*/ }
}






/* ~~~~~  ~~~~~ */
/* ~~~~~  ~~~~~ */
/* ~~~~~  ~~~~~ */
