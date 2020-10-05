import * as nodes from '../utility/nodes';





/* ~~~~~ Country List ~~~~~ */

export const selectLoad = () => {
  try {
    // nodes.select('').insertAdjacentHTML('afterbegin', select);
    // let isRadio = nodes.elementName('country_status')
    if(isRadio){ isRadio[0].checked = true; }
  }
  catch(err){ /*alert(`On Load | selectLoad() | ${err}`);*/ }  
}


export const selectRadio = () => {
  try {
    let label = nodes.elementName('country__data');
    for(let radio of label){
      radio.addEventListener('click',event => {
        if(radio.checked) { elements.searchInput.value = radio.value; }
      });
    }
  }
  catch(err){ /*alert(`On Load | selectRadio() | ${err}`);*/ }  
}


export const countryList = () => {
  try {
    let input, filter;
    let searchData,list, label, li, span;
    let value;
    
    input = elements.searchInput;
    filter = input.value.toUpperCase();

    searchData = elements.searchData;
    list = document.getElementById("country-list");
    label = list.getElementsByTagName('label');


    for(let cur of label) {  
      li = cur.getElementsByTagName('li')[0];
      span = li.getElementsByTagName('span')[0];
      value = span.textContent || span.innerText;

      if (input.value === '' || input.value === ' ' || input.value === null || input.value === undefined ) 
        { searchData.style.minHeight = '0'; elements.navbarBtn.style.top = '10rem'; 
        }
      else if(value.toUpperCase().indexOf(filter) > -1)
        { searchData.style.minHeight = '10rem'; 
          cur.style.display = ''; 
          cur.style.height = '2.5rem';
          elements.navbarBtn.style.top = '20rem';
        } 
      else 
        { cur.style.display = 'none'; 
          cur.style.height = '0'; 
          elements.navbarBtn.style.top = '10rem';
        }
    }
  }
  catch(err){ /*alert(`On Load | countryList() | ${err}`);*/ }  
}





/* ~~~~~  ~~~~~ */
/* ~~~~~  ~~~~~ */
/* ~~~~~  ~~~~~ */
