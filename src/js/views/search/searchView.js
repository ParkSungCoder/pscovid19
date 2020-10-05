import * as nodes from '../utility/nodes';
import * as lists from './searchLists';
import * as inputs from './searchInputs';
import * as cards from './searchCard';








/* ~~~~~ Variables ~~~~~ */

export const inputValue = () => { return inputs.getInputValue(); }





/* ~~~~~ Validate Search Inputs ~~~~~ */

const inputStrCond = () => {
	try {
		let bool = false;
		if(inputValue() !== '' && inputValue() !== ' ' && inputValue() !== false && isNaN(inputValue()) 
			&& inputValue() !== undefined && inputValue() !== null){ bool = true; }
		return bool;
	}
	catch(err){ /*alert(`Search View | inputStrCond | ${err}`);*/ }
}


const inputIndexOf = (ifList,valList,input) => {
	try {
		let index = ifList.indexOf(input), value;
		
		if(index !== -1){ value = valList[index]; }
		else { value = -1; }

		return value;
	}
	catch(err){ /*alert(`Search View | inputIndexOf | ${err}`);*/ }
}


export const inputMatch = (state) => {
	try {
		let inputFilter = inputValue().toUpperCase();
		let temp, value = undefined;

		if(inputStrCond()){ temp = inputIndexOf(lists.countryArr,lists.slugArr,inputValue());
			if(temp !== -1){ value = temp; } }
		if(temp === -1){ temp = inputIndexOf(lists.countryCodeArr,lists.slugArr,inputFilter); 
			if(temp !== -1){ value = temp; } }
		if(temp === -1){ temp = inputIndexOf(lists.slugArr,lists.slugArr,inputValue()); 
			if(temp !== -1){ value = temp; } }


		if(temp === -1){ state.errors.noresults = true; }
		else { state.errors.noresults = false; }

		state.inputs.country = value;
	  return value;
	}
	catch(err){ /*alert(`Search View | inputMatch | ${err}`);*/ }
}





/* ~~~~~ Search Country Card ~~~~~ */

export const countryCard = (resObj) => {
	try {
		cards.countryCard(resObj);
	}
	catch(err){ /*alert(`Search View | countryCard | ${err}`);*/ }	
}





/* ~~~~~ Country List Elements ~~~~~ */

export const countryList = () => {
	try {
		nodes.elementId('country-list').insertAdjacentHTML('afterbegin', lists.countryList);
	}
	catch(err){ /*alert(`Search View | countryList | ${err}`);*/ }	
}






/* ~~~~~ Search List Options ~~~~~ */

export const searchOptions = () => {
  try {
  	let input = nodes.elements.searchInput.value;
  	let filter = input.toUpperCase();

  	let list = nodes.elementId('country-list');
  	let labels = list.querySelectorAll('label.radio-group');

  	for(let cur of labels){
  		let li = cur.getElementsByTagName('li')[0]; 
  		let span = li.getElementsByTagName('span')[0];
  		let value = span.textContent || span.innerText;
  		if (value.toUpperCase().indexOf(filter) > -1) {
        cur.style.display = 'flex';
      } else {
        cur.style.display = 'none';
      }
  	}

  }
  catch(err){ /*alert(`Search View | searchOptions() | ${err}`);*/ }
}






/* ~~~~~  ~~~~~ */
/* ~~~~~  ~~~~~ */
/* ~~~~~  ~~~~~ */
