import { state } from '../state';
import * as nodes from '../views/utility/nodes';
import * as clearHash from '../views/utility/clearHash';
import * as GlobalModel from '../models/globalCount';







/* ~~~~~ GLobal Count State Variables ~~~~~ */







/* ~~~~~ Global Count Controller ~~~~~ */

const ctrlGlobalCount = async () => {
  try { 
    GlobalModel.globalCount(state.summary); 
  } 
  catch(err){ alert(`Ctrl Global Count | ctrlGlobalCount() | ${err}`); }
}





/* ~~~~~ Global Count Events ~~~~~ */

export const globalCountEvents = () => { 
  try { 
    ctrlGlobalCount();
  }
  catch(err){ /*alert(`Ctrl Global Count | globalCountEvents() | ${err}`);*/ }
}





/* ~~~~~  ~~~~~ */
/* ~~~~~  ~~~~~ */
/* ~~~~~  ~~~~~ */
