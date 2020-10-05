import { state } from '../state';
import * as CtrlOnLoad from './ctrlOnLoad';




/* ~~~~~ Ctrl Main State ~~~~~ */






/* ~~~~~ Main Controller ~~~~~ */

export const mainController = () => {
	try { 
		
		CtrlOnLoad.onLoadEvents();
		
	}
  catch(err){ /*alert(`Main Controller | mainController() | ${err}`);*/ }
} 
mainController();




/* ~~~~~  ~~~~~ */
/* ~~~~~  ~~~~~ */
/* ~~~~~  ~~~~~ */
