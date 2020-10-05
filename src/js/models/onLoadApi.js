import { state } from '../state';
import { requestOptions, covidApi } from './covid-api-config';






/* ~~~~~ OnLoad State ~~~~~ */







/* ~~~~~ OnLoad Class ~~~~~ */

export class summaryApi {
  
  constructor() {
 
  }

  async getCountries() {
    try {
      const reqs = await fetch(`${covidApi}/summary`, requestOptions);
      const res = await reqs.json();

      return res;
    }  
    catch(err){ 
      /*alert(`OnLoad Model | getCountries() | ${err}`);*/ 
      if(err === 'NetworkError'){ state.summary.errors.NetworkError = true; }
    }
  }
}
 




/* ~~~~~ Summary Class Instance ~~~~~ */

export const summaryInst = async (state) => {
  try {
    let summary = new summaryApi();
    let res = await summary.getCountries();

    state.global = await res.Global; 
    state.countries = await res.Countries;

    return true;
  }
  catch(err){ /*alert(`OnLoad Model | summaryInst() | ${err}`);*/ }
}





/* ~~~~~  ~~~~~ */
/* ~~~~~  ~~~~~ */
/* ~~~~~  ~~~~~ */
