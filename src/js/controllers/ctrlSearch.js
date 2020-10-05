import { state } from '../state';
import * as nodes from '../views/utility/nodes';
import * as SearchModel from '../models/search';
import * as SearchView from '../views/search/searchView';
import * as loaders from '../views/loaders/loaders';
import * as errors from '../views/errors/errors';
import * as clearHash from '../views/utility/clearHash';


 
 


/* ~~~~~ States ~~~~~ */






/* ~~~~~ Search Controller ~~~~~ */

const ctrlSearch = async () => {
  try { 
  errors.clearAllErrors();
  let searchInputs = SearchView.inputMatch(state.search);
  if(searchInputs)
    { let searchQuery = SearchModel.searchCountry(state);
      if(searchQuery !== undefined)
        { loaders.circular();
          if(state.search.instances.length === 0)
            { loaders.clearCircular(); SearchView.countryCard(searchQuery); }
          else if(state.search.instances.length > 0)
            { if(state.search.duplicates.country === false)
                { loaders.clearCircular(); SearchView.countryCard(searchQuery); } 
              else if(state.search.duplicates.country === true)
                { loaders.clearCircular(); clearHash.nodeLocation(`${searchQuery.CountryCode}-img`); }
            }
        }
    }
  else { errors.isErrors(state.search); }
  nodes.elements.searchInput.value = '';
  nodes.elements.searchInput.focus();
  } 
  catch(err){ /*alert(`CtrlSearch | ctrlSearch() | ${err}`);*/ }
} 




 
/* ~~~~~ Search Events ~~~~~ */

export const searchEvents = () => {
  try {
    ['click', 'keycode === 13'].forEach(event => { nodes.elements.searchBtn.addEventListener(event, ctrlSearch); });
    nodes.elements.searchInput.addEventListener('keypress', (event) => { if(event.keyCode === 13){ ctrlSearch(); } });
  }
  catch(err){ /*alert(`CtrlSearch | searchEvents() | ${err}`);*/ }
}





/* ~~~~~  ~~~~~ */
/* ~~~~~  ~~~~~ */
/* ~~~~~  ~~~~~ */
