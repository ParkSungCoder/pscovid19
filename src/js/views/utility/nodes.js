




/* ~~~~~ Nodes ~~~~~ */

export const state = {};

export const select = (node) => { return document.querySelector(`${node}`); }
export const selectAll = (node) => { return document.querySelectorAll(`${node}`); }
export const elementId = (node) => { return document.getElementById(`${node}`); }
export const elementName = (node) => { return document.getElementsByName(`${node}`); }
export const elementTag = (node) => { return document.getElementsByTagName(`${node}`); }

export const selectEvent = (node,event,fn) =>
  { select(node).addEventListener(`${event}`,fn); }
export const selectAllEvent = (node,event,fn) => 
  { selectAll(node).addEventListener(`${event}`,fn); }
export const elementIdEvent = (node,event,fn) => 
  { elementId(node).addEventListener(`${event}`,fn); }
export const elementNameEvent = (node,event,fn) => 
  { elementName(node).addEventListener(`${event}`,fn); }
export const elementTagEvent = (node,event,fn) => 
  { elementTag(node).addEventListener(`${event}`,fn); }





/* ~~~~~ Node Selector ~~~~~ */

export const getNode = (query,node) => {
  let element
  if(`${query}` === 'select'){ element = select(node); }
  else if(`${query}` === 'selectAll'){ element = selectAll(node); }
  else if(`${query}` === 'id'){ element = elementId(node); }
  else if(`${query}` === 'name'){ element = elementName(node); }
  else if(`${query}` === 'tag'){ element = elementTag(node); }
  else { element = undefined; }

  return element;
}
export const setValue = (query,node,value = '') => {
  let element = getNode(query,node);
  return element.value = value;
}
export const getValue = (query,node) => { 
  let element = getNode(query,node);
  return element.value;
}





/* ~~~~~ Node Elements ~~~~~ */

export const elements = {

    // Search Selectors
    searchInput: select('.search-input'),
    searchBtn: select('.search-btn'),
};





/* ~~~~~  ~~~~~ */
/* ~~~~~  ~~~~~ */
/* ~~~~~  ~~~~~ */
