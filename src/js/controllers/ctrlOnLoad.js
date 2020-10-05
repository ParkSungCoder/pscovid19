import { state } from '../state';
import * as nodes from '../views/utility/nodes'; 
import * as clearHash from '../views/utility/clearHash';
import * as onLoad from '../views/onLoad/clock';
import * as SearchView from '../views/search/searchView';

import * as onLoadApi from '../models/onLoadApi';
import * as CtrlGlobalCount from '../controllers/ctrlGlobalCount';
import * as CtrlSearch from '../controllers/ctrlSearch';

import * as errors from '../views/errors/errors'; 







/* ~~~~~ OnLoad State ~~~~~ */







/* ~~~~~ OnLoad Controller ~~~~~ */

const ctrlOnLoad = async () => {
  try {
    let bool = await onLoadApi.summaryInst(state.summary);
	  if(bool){
      CtrlGlobalCount.globalCountEvents();
      CtrlSearch.searchEvents();
      state.summary.errors.NetworkError = false;
    }
    else { 
      state.summary.errors.NetworkError = true;
      if(state.summary.errors.NetworkError){ errors.connectFailView(); } 
    }
  } 
  catch(err){ /*alert(`CtrlOnLoad | ctrlOnLoad() | ${err}`);*/ }
} 




 
/* ~~~~~ OnLoad Events ~~~~~ */

const selectRadio = () => {
  try {    
    let radios = nodes.elementName('country__data');
    for(let cur of radios) {
      if(cur.checked){ nodes.elements.searchInput.value = cur.value; break; }
    };
  }
  catch(err){ /*alert(`CtrlOnLoad | selectRadio() | ${err}`);*/ }
}

const searchOptions = () => {
  try {
    nodes.elements.searchInput.addEventListener('keyup',(event) => {
      if(event.isComposing){ return; }
      if(event.keyCode === 229 || event.keyCode === 0){ SearchView.searchOptions(); }
      SearchView.searchOptions();    
    }); 
  }
  catch(err){ /*alert(`CtrlOnLoad | searchOptions() | ${err}`);*/ }
}

const inputOnFocus = () => {
  try {
    clearHash.display();
    nodes.elements.searchInput.addEventListener('focus',(event) => {
      let cont = nodes.elementId('country-list');
      nodes.elements.searchInput.style.transition = 'all .2s';
    
      cont.style.height = '10rem'; 
      cont.style.transition = 'all .2s .2s';
      nodes.select('.navbar-btn').style.top = '20rem';

    }); 
  }
  catch(err){ /*alert(`CtrlOnLoad | inputOnFocus() | ${err}`);*/ }
}
 
const inputOnBlur = () => {
  try {
    nodes.elements.searchInput.addEventListener('blur',(event) => {
      let cont = nodes.elementId('country-list');
      cont.style.height = '0rem'; 
      cont.style.transition = 'all .2s';
      
      nodes.select('.navbar-btn').style.top = '8rem';

      nodes.elements.searchInput.style.transition = 'all .2s .2s';

    }); 
  }
  catch(err){ /*alert(`CtrlOnLoad | inputOnFocus() | ${err}`);*/ }
}

const aosInit = (bool) => {
  try {
    if(bool){ /*AOS.init(); console.log(bool);*/ }
  }
  catch(err){ /*alert(`CtrlOnLoad | aosInit() | ${err}`);*/ }
}

const navbarBtn = () => {
  try {
    let navtoggle = nodes.elementId('navbar-hidden-toggle');
    let navbtn = nodes.select('.navbar-btn');
    if(navtoggle.checked === false){ navbtn.style.top = '2rem'; }
    else{ navbtn.style.top = '8rem'; }
  }
  catch(err){ /*alert(`CtrlOnLoad | navbarBtn() | ${err}`);*/ }
}

export const onLoadEvents = () => {
  try {
    onLoad.clock();
    nodes.elements.searchInput.value = '';
    SearchView.countryList();
    nodes.elementId('country-list').addEventListener('click',selectRadio);
    

    [clearHash.top,ctrlOnLoad].forEach((cur) => { window.addEventListener('load',cur); });
  	nodes.selectEvent('.btn-top','click',clearHash.top);

    searchOptions();
    inputOnFocus();
    inputOnBlur();
 
    nodes.select('.navbar-btn').addEventListener('click',navbarBtn);
  }
  catch(err){ /*alert(`CtrlOnLoad | onLoadEvents() | ${err}`);*/ }
}





/* ~~~~~  ~~~~~ */
/* ~~~~~  ~~~~~ */
/* ~~~~~  ~~~~~ */
