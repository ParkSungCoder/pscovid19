




/* ~~~~~ Clear Window Hash ~~~~~ */

export const windowReset = () => { history.replaceState({},document.title, '.'); }

export const nodeLocation = (loc) => {
	try {
	  window.location.hash = `#${loc}`;
	  windowReset();
	}
	catch(err){ /*alert(`Clear Hash | location() | ${err}`);*/ }	
}

export const top = () => {
  try {
	  window.location.hash = `#`;
	  windowReset();
  }
	catch(err){ /*alert(`Clear Hash | top() | ${err}`);*/ }	
}

export const display = () => {
  try {
	  window.location.hash = `#display`;
	  windowReset();
  }
	catch(err){ /*alert(`Clear Hash | display() | ${err}`);*/ }	
}

export const cardCountry = (res) => {
  try {
	  window.location.hash = `${res.Country}-card`;
	  windowReset();
  }
	catch(err){ /*alert(`Clear Hash | cardCountry() | ${err}`);*/ }	
}

export const error = () => {
  try {
	  window.location.hash = `#error-close`;
	  windowReset();
  }
	catch(err){ /*alert(`Clear Hash | error() | ${err}`);*/ }	
}



/* ~~~~~  ~~~~~ */
/* ~~~~~  ~~~~~ */
/* ~~~~~  ~~~~~ */
