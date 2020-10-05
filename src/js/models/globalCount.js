import * as GlobalView from '../views/globalCount/card';




/* ~~~~~ Global Count Model ~~~~~ */

export const globalCount = (state) => {
  try { 
  	GlobalView.globalCard(state.global);
  } 
  catch(err){ /*alert(`Global Count Model | globalCount() | ${err}`);*/ }
}





/* ~~~~~  ~~~~~ */
/* ~~~~~  ~~~~~ */
/* ~~~~~  ~~~~~ */
