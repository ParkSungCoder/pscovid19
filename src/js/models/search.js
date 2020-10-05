




/* ~~~~~ Search Model ~~~~~ */


const queryValidate = (listArr,country) => {
	try {
		let countryObj;
		for(let cur of listArr){
		  if(country === cur.Slug){ countryObj = cur; break; }
		  else if (country === cur.CountryCode){ countryObj = cur; break; }
		  else if (country === cur.Country){ countryObj = cur; break; }
		  else { countryObj = undefined; }
		}
		return countryObj;
	}
  catch(err){ /*alert(`Search Model | queryValidate() | ${err}`);*/ }
}


const queryDuplicates = (listArr,obj) => {
	try {
		let bool = false;
		for(let cur of listArr){
		  /*console.log(`${obj.Slug} => | ${cur.Slug} | ${cur.CountryCode} | ${cur.Country}`);*/
		  if(obj.Slug !== cur.Slug && obj.CountryCode !== cur.CountryCode && obj.Country !== cur.Country)
		  	{ bool = true; }
		  else { bool = false; /*console.log('Match');*/ break; }
		}
		
		return bool;
	}
  catch(err){ /*alert(`Search Model | queryduplicates() | ${err}`);*/ }
}


const countryPush = (state,countryObj) => {
	try { 
		let country;
		if(state.search.instances.length === 0)
			{ state.search.instances.push(countryObj); country = countryObj; }
		else if(state.search.instances.length > 0)
			{ let countryValidate = queryDuplicates(state.search.instances,countryObj); 
				if(countryValidate)
					{ state.search.instances.push(countryObj); 
						state.search.duplicates.country = false;
						country = countryObj; 
					}
				else{ state.search.duplicates.country = true; country = countryObj; /*console.log('Country Duplicate = true');*/ }
			}

		return country;
	}
  catch(err){ /*alert(`Search Model | countryPush() | ${err}`);*/ }
}


export const searchCountry = (state) => {
	try {
		let countryObj, objValidate;
		if(state.summary.countries !== undefined)
			{ countryObj = queryValidate(state.summary.countries,state.search.inputs.country); }
		if(countryObj !== undefined)
			{ objValidate = countryPush(state,countryObj); }
		
		return objValidate;
	}	
  catch(err){ /*alert(`Search Model | searchCountry() | ${err}`);*/ }
}





/* ~~~~~  ~~~~~ */
/* ~~~~~  ~~~~~ */
/* ~~~~~  ~~~~~ */
