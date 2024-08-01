function abbreviateNumber(value) {
 if(value){
   if (value >= 1.0e9) {
     return (value / 1.0e9).toFixed(1) + "B"; // Billion
   } else if (value >= 1.0e6) {
     return (value / 1.0e6).toFixed(1) + "M"; // Million
   } else if (value >= 1.0e3) {
     return (value / 1.0e3).toFixed(1) + "K"; // Thousand
   } else {
     return value.toString(); // Less than 1000
   }
 }
}

export default abbreviateNumber;