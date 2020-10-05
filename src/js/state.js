




/* ~~~~~ State Variables ~~~~~ */

export const state = {};
state.summary = {
	countries: [],
  global: {},
  errors: {
    NetworkError: false,
  }, 
};
state.search = {
	inputs: { country: '', },
	instances: [],
	duplicates: { country: false, },
	errors: {
	  serverunreached: false,
	  noresults: false,
	  AbortError: false,
	  TypeError: false,
	}
};




/* ~~~~~  ~~~~~ */
/* ~~~~~  ~~~~~ */
/* ~~~~~  ~~~~~ */
