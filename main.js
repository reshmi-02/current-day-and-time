let date=new Date();
let setsday=["sunday","monday","tuesday","wednesday","thurday","friday","saturday"];
let day=setsday[date.getDay()];


let hour=date.getHours(),min=date.getMinutes(),sec=date.getSeconds();
if(hour>=12){
  document.write(`
  Today is: ${day}<br><br>
  
  current time is: ${hour} PM : ${min} : ${sec}
  `);
}
else{
  document.write(`
  Today is: ${day}<br><br>
  
  current time is: ${hour} AM : ${min} : ${sec}
  `);
}