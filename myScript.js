function dateDiff() { 
  const secondDate = new Date("06/14/2025") // 10th May, 2022
  const firstDate = new Date() // today, 14th May, 2022
  
  const firstDateInMs = firstDate.getTime()
  const secondDateInMs = secondDate.getTime()
  
  const differenceBtwDates = secondDateInMs - firstDateInMs
  
  const aDayInMs = 24 * 60 * 60 * 1000
  
  const daysDiff = Math.round(differenceBtwDates / aDayInMs)

    document.getElementById("days").innerHTML = daysDiff;
              
};    
     

window.onload = dateDiff();