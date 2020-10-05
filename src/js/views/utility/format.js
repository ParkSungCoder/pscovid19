




/* ~~~~~ Formats ~~~~~ */

export const date = (res) => {
  try {
	  let dateFn = new Date(res);
	  let readableDate = dateFn.toGMTString();
	  let date = readableDate.substring(0,16);

	  return date;
  }
  catch(err){ /*alert(`Format | dateFormat | ${err}`);*/ }
}





/* ~~~~~  ~~~~~ */
/* ~~~~~  ~~~~~ */
/* ~~~~~  ~~~~~ */
