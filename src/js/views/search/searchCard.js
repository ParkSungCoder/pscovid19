import * as nodes from '../utility/nodes';
import * as format from '../utility/format';
import * as chart from '../charts/doughnut';
import * as clearHash from '../utility/clearHash';






/* ~~~~~ Country Card Template ~~~~~ */

export const generateChart = (res,el) => {
  try {
    let TotalActive = res.TotalConfirmed - res.TotalDeaths - res.TotalRecovered; 
    let dataLabels = chart.doughnutDataLabels(`Confirmed`,`Active`,`Deaths`,`Recovered`);
    let dataArr = chart.doughnutDataArr(res.TotalConfirmed,TotalActive,res.TotalDeaths,res.TotalRecovered);
    let dataObj = chart.doughnutDataObj(dataLabels,dataArr);
    let OptObj = chart.doughnutOptObj(format.date(res.Date));    
    chart.doughnut(`${el}`,dataObj,OptObj);
  }
  catch(err){ /*alert(`Search Cards | generateChart | ${err}`);*/ }
}

export const countryCard = (res) => {
  try {
    let imgId = `${res.CountryCode}-img`;
    const markup = `
    <div class='country-card' id='${res.Country}-card'
    data-aos="zoom-in" data-aos-easing="slide" data-aos-duration="500"
        data-aos-anchor-placement="top-center">
      <div class="country-card__header" id="${imgId}"></div>

      <div class="country-card__middle">
        <div class="country-card__middle-divider">&nbsp;</div>
        <div class="country-card__middle-header">
          <h2> ${res.Country} | ${res.CountryCode}</h2>
        </div>
      </div>

      <div class='country-card__description'>
        <div class="canvas-card">
          <canvas id="${res.CountryCode}-doughnut" width="50" height="50"></canvas> 
        </div>           
      </div>
    </div>
    `;
    nodes.elementId('display').insertAdjacentHTML('afterbegin', markup);
    generateChart(res,`${res.CountryCode}-doughnut`);
    clearHash.nodeLocation(imgId); 
  }
  catch(err){ /*alert(`Search Cards | countryCard | ${err}`);*/ }
}





/* ~~~~~  ~~~~~ */
/* ~~~~~  ~~~~~ */
/* ~~~~~  ~~~~~ */
