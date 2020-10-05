import * as nodes from '../utility/nodes';







/* ~~~~~ Country Image ~~~~~ */
 
export const countryImage = (res) => {
  try {
    let countryCode = res.CountryCode.toLowerCase();

    let style = document.createElement('style');
    document.head.appendChild(style);
    
    style.sheet.insertRule(`
      #${res.CountryCode}-img { 
        background-image: url(imgs/${countryCode}.png); 
      }
    `);

  }
  catch(err) { /*alert(`Style Rules | countryImage() | ${err}`);*/ }  
}

export const countryImageStr = (countries) => {
  try {
    let reverse = countries.reverse();

    reverse.forEach( (cur) => {
      let countryCode = cur.CountryCode.toLowerCase();
      const markup = ` 
      <div style="width:100%"> 
        #${cur.CountryCode}-img { background-image: url(imgs/${countryCode}.png); }
      </div> `;
      nodes.elementId('display').insertAdjacentHTML('afterbegin', markup);
    });
  }
  catch(err) { /*alert(`Style Rules | countryImage() | ${err}`);*/ }  
}





/* ~~~~~  ~~~~~ */
/* ~~~~~  ~~~~~ */
/* ~~~~~  ~~~~~ */
