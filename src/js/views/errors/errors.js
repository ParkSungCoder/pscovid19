import * as nodes from '../utility/nodes';
import * as clearHash from '../utility/clearHash';





/* ~~~~~ Error Views ~~~~~ */

export const displaySection = () => { return nodes.select('.section-display'); }
export const containerMain = () => { return nodes.select('.container-main'); }

export const clearErr = () => {
  try {
    let errbtn = nodes.select('.errors-btn');
    let errContainer = nodes.select('.errors');
    
    errbtn.addEventListener('click',(event) => { 
      if(event.target !== event.currentTarget)
        { errbtn.parentNode.parentNode.parentNode.removeChild(errContainer); } 
      else { errbtn.parentNode.parentNode.parentNode.removeChild(errContainer); }

      event.stopPropagation();
      clearHash.display();
    }); 
  }
  catch(err){ /*alert(`Errors | clearErr() | ${err}`);*/ } 
}


export const noResultView = () => {
  try {
    const markup =`
    <div class="errors-noresults errors">
      <div class="errors-cont">
        <h1>No Results Found</h1>
      <div id="error-close" class="errors-btn">
        <div class="errors-btn-hamberg"></div>
      </div>
      </div>
    </div>
    `;
    displaySection().insertAdjacentHTML('afterbegin', markup); 
    clearErr();
    clearHash.error();
  }
  catch(err){ /*alert(`Errors | noResultView() | ${err}`);*/ } 
}


export const abortView = () => {
  try {
    const markup =`
    <div class="errors-requestfailed errors">
      <div class="errors-cont">
        <h1>Request Failed, Please Try Again Later</h1>
      <div id="error-close" class="errors-btn">
        <div class="errors-btn-hamberg"></div>
      </div>
      </div>
    </div>
    `;
    displaySection().insertAdjacentHTML('afterbegin', markup);
    clearErr();
    clearHash.error();
  }
  catch(err){ /*alert(`Errors | abortView() | ${err}`);*/ } 
}


export const connectFailView = () => {
  try {
    const markup =`
    <div class="errors-requestfailed errors">
      <div class="errors-cont">
        <h1>Cannot Establish Connection To Server, Please Try Again Later</h1>
      <div id="error-close" class="errors-btn">
        <div class="errors-btn-hamberg"></div>
      </div>
      </div> 
    </div>
    `;
    displaySection().insertAdjacentHTML('afterbegin', markup);
    clearErr();
    clearHash.error();
  }
  catch(err){ /*alert(`Errors | connectFailView() | ${err}`);*/ } 
}

export const isErrors = (state) => {
  try {
    if(state.errors.serverunreached){ connectFailView(); }
    if(state.errors.noresults){ noResultView(); }
    if(state.errors.AbortError){ abortView(); }
    if(state.errors.TypeError){ noResultView(); }
  } 
  catch(err){ /*alert(`Errors | isErrors() | ${err}`);*/ } 
}

export const clearAllErrors = () => {
  try {
    let errorNodes = nodes.selectAll('.errors');
    for(let cur of errorNodes){ cur.parentNode.removeChild(cur); }
  }
  catch(err){ /*alert(`Errors | clearAllErrors() | ${err}`);*/ } 
}





/* ~~~~~  ~~~~~ */
/* ~~~~~  ~~~~~ */
/* ~~~~~  ~~~~~ */
