import * as nodes from '../utility/nodes';





/* ~~~~~ Clock Template ~~~~~ */

export const clock = () => {
  try {
    let newDate = new Date();

    let year = newDate.getFullYear();
    let monthArr = ['January','February','March','April','May',
    'June','July','August','September','October','November','December'];
    let month = monthArr[newDate.getMonth()];
    let date = newDate.getDate();

    let hourArr = [12,'01','02','03','04','05','06','07','08','09',10,11,12,
    '01','02','03','04','05','06','07','08','09',10,11];
    let hour = hourArr[newDate.getHours()];

    let numArr = [0,1,2,3,4,5,6,7,8,9];
    let numArrFormat = ['00','01','02','03','04','05','06','07','08','09'];
    const loopFormat = (fns) => {
      let format = ''; 
      for(let cur of numArr) {
        if(fns === cur) { format = numArrFormat[cur];  break; }
        else { format = fns; } 
      }
      return format;
    }

    let minute = loopFormat(newDate.getMinutes()); 
    let second = loopFormat(newDate.getSeconds());

    let dayArr = ['Sunday','Monday','Tuesday','Wednesday',
    'Thursday','Friday','Saturday'];
    let day = dayArr[newDate.getDay()];

    let dayTime = '';
    if(newDate.getHours() < 12) { dayTime = 'AM'; }
    else { dayTime = 'PM'; }

    let dateString = `${month} ${date}, ${year}`;
    let timeString = `${day}, ${hour}:${minute}:${second} ${dayTime} `;

    let fullString = `${dateString} | ${timeString}`;

    nodes.select('.section-header__clock-date').innerHTML = dateString;
    nodes.select('.section-header__clock-time').innerHTML = timeString;

    setInterval(clock,1000);    
  }
  catch(err){ /*alert(`OnLoad | clock() | ${err}`);*/ }  
}





/* ~~~~~  ~~~~~ */
/* ~~~~~  ~~~~~ */
/* ~~~~~  ~~~~~ */
