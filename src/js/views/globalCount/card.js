import * as nodes from '../utility/nodes';
import * as charts from '../charts/doughnut';





/* ~~~~~ Global Card ~~~~~ */

export const generateGlobalNew = (res,el) => {
  try {
    let NewActive = res.NewConfirmed - res.NewDeaths - res.NewRecovered; 
    let dataLabels = charts.doughnutDataLabels(`New Confirmed`,`New Active`,`New Deaths`,`New Recovered`);
    let dataArr = charts.doughnutDataArr(res.NewConfirmed,NewActive,res.NewDeaths,res.NewRecovered);
    let dataObj = charts.doughnutDataObj(dataLabels,dataArr);
    let OptObj = charts.doughnutOptObj(`New Global Count`,40);    
    charts.doughnut(`${el}`,dataObj,OptObj);
  }
  catch(err){ /*alert(`Global View | generateGlobalNew() | ${err}`);*/ }
}

export const generateGlobalTotal = (res,el) => {
  try {
    let TotalActive = res.TotalConfirmed - res.TotalDeaths - res.TotalRecovered; 
    let dataLabels = charts.doughnutDataLabels(`Total Confirmed`,`Total Active`,`Total Deaths`,`Total Recovered`);
    let dataArr = charts.doughnutDataArr(res.TotalConfirmed,TotalActive,res.TotalDeaths,res.TotalRecovered);
    let dataObj = charts.doughnutDataObj(dataLabels,dataArr);
    let OptObj = charts.doughnutOptObj(`Global Count Total`,40);    
    charts.doughnut(`${el}`,dataObj,OptObj);
  }
  catch(err){ /*alert(`Global View | generateGlobalTotal() | ${err}`);*/ }
}

export const globalCard = (globalres) => {
  try {
    const markup = `
      <div class="section-header__global-front">
        <div class="canvas-container-global">
          <canvas id="globalNew" width="50" height="50"></canvas> 
        </div> 
      </div>
      <div class="section-header__global-back">
        <div class="canvas-container-global">
          <canvas id="globalTotal" width="50" height="50"></canvas> 
        </div> 
      </div>
    `; 
    nodes.select('.section-header__global').insertAdjacentHTML('beforeend', markup);
    generateGlobalNew(globalres,`globalNew`);
    generateGlobalTotal(globalres,`globalTotal`);
  }
  catch(err){ /*alert(`Global View | globalCard() | ${err}`);*/ }
};






/* ~~~~~  ~~~~~ */
/* ~~~~~  ~~~~~ */
/* ~~~~~  ~~~~~ */
