import * as nodes from '../utility/nodes';





/* ~~~~~ String Templates ~~~~~ */

export const country = (countries) => {
  try {
    countries.forEach( (cur) => {
      const markup = ` <div style="width:100%"> "${cur.Country}", </div> `;
      nodes.elementId('display').insertAdjacentHTML('afterbegin', markup);
    });
  }
  catch(err){ /*alert(`String Templates | country() | ${err}`);*/ }  
};


export const slug = (countries) => {
  try {
    countries.forEach( (cur) => {
      const markup = ` <div style="width:100%"> "${cur.SlugSlug}", </div> `;
      nodes.elementId('display').insertAdjacentHTML('afterbegin', markup);
    });
  }
  catch(err){ /*alert(`String Templates | Slug() | ${err}`);*/ }  
};


export const countryCode = (countries) => {
  try {
    countries.forEach( (cur) => {
      const markup = ` <div style="width:100%"> "${cur.CountryCode}", </div> `;
      nodes.elementId('display').insertAdjacentHTML('afterbegin', markup);
    });
  }
  catch(err){ /*alert(`String Templates | countryCode() | ${err}`);*/ }  
};


export const countryList = countries => {
  try {
    countries.forEach( (cur) => {
      const markup = `
      <div style="width:100%">
        input type="radio" class="radio-input" name="country__data" 
        id="${cur.Slug}" value="${cur.Country}"> 
        label class="radio-group" for="${cur.Slug}"> 
          li> span>${cur.Country} ${cur.CountryCode} span> li> 
        label>
      </div>
      `;
      // nodes.select('').insertAdjacentHTML('afterbegin', markup);
    });
  }
  catch(err){ /*alert(`String Templates | countryList() | ${err}`);*/ }  
};





/* ~~~~~  ~~~~~ */
/* ~~~~~  ~~~~~ */
/* ~~~~~  ~~~~~ */
