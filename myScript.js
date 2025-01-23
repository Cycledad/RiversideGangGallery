function dateDiff() { 
  
  const firstDate = new Date() // today
  const secondDate = new Date("06/14/2025") // June 14, 2025
  //const secondDate = new Date("01/24/2025")


  const firstDateInMs = firstDate.getTime()
  const secondDateInMs = secondDate.getTime()
  
  const differenceBtwDates = secondDateInMs - firstDateInMs
  
  const aDayInMs = 24 * 60 * 60 * 1000
  
  const daysDiff = Math.round(differenceBtwDates / aDayInMs) + 1

    document.getElementById("days").innerHTML = daysDiff;
              
};    
     

window.onload = dateDiff();