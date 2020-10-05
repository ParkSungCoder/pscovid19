import * as nodes from '../utility/nodes';
import * as format from '../utility/format';





/* ~~~~~ Doughnut Chart ~~~~~ */

export const doughnutDataLabels = (label1,label2,label3,label4) => {
  try {
    let labels = [`${label1}`,`${label2}`,`${label3}`,`${label4}`];
    return labels;
  }
  catch(err){ /*alert(`Charts Doughnut | doughnutDataLabels() | ${err}`);*/ }  
}


export const doughnutDataArr = (data1,data2,data3,data4) => {
  try {
    let data = [`${data1}`,`${data2}`,`${data3}`,`${data4}`];
    return data;
  }
  catch(err){ /*alert(`Charts Doughnut | doughnutDataArr() | ${err}`);*/ }  
}


export const doughnutDataObj = (labelArr,dataArr) => {
  try {
    let data = {
      labels: labelArr,
      datasets: [{
        data: dataArr,
        backgroundColor: ['#CE2029','#F5BD1F','#545454','#007932'], borderWidth: 3, /*borderColor: 'black',*/  
        hoverBackgroundColor: 'crimson', hoverBorderColor: '#FFF600', hoverBorderWidth: 2,
      }],
    };
    return data;
  }
  catch(err){ /*alert(`Charts Doughnut | doughnutDataObj | ${err}`);*/ }  
}


export const doughnutOptObj = (title,font = 20) => {
  try {
    let options = {
      cutoutPercentage: 60,
      rotation: 2.25 * Math.PI,
      circumference: 1.5 * Math.PI,
      animation: { duration: 800, easing: 'easeOutBounce', },
      title: {
        display: true, text: `${title}`, position: 'top',
        fontSize: font, fontColor: '#FFF600', lineHeight: 1, 
        fontFamily: `heading, sans-serif`,padding: 10,
      },
      legend: {
        display: true, position: 'top', align: 'center',
        labels: {
          boxWidth: 15, fontSize: 12, fontColor: '#FFF600', fontFamily: `para, sans-serif`,
        }
      }
    };
    return options;
  }
  catch(err){ /*alert(`Charts Doughnut | doughnutDataObj | ${err}`);*/ }  
}


export const doughnut = (el,dataObj,optObj) => {
  try {  
    let easeArr = ['easeInElastic','easeOutElastic','easeInOutElastic', 
    'easeInBack','easeOutBack','easeInOutBack',
    'easeInBounce','easeOutBounce','easeInOutBounce'];

    Chart.defaults.global.elements.arc.borderColor = '#1B1B1B';

    let ctx = nodes.elementId(`${el}`).getContext('2d');
    let myDoughnutChart = new Chart(ctx, {
      type: 'doughnut',
      data: dataObj,
      options: optObj,
    });
  }
  catch(err){ /*alert(`Charts Doughnut | doughnut | ${err}`);*/ }
}






/* ~~~~~  ~~~~~ */
/* ~~~~~  ~~~~~ */
/* ~~~~~  ~~~~~ */
