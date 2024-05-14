const returnFirstTwoDrivers = function(drivers){
    const copyOfDrivers = [...drivers]
    copyOfDrivers.splice(2)
    return copyOfDrivers
}

const returnLastTwoDrivers = function(drivers){
    return drivers.slice(2)
}

const  selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]
   
function createFareMultiplier(int){
    return function(fare){
        return int * fare
    }
}
const fareDoubler = function(fare){
    return fare *2
}

   const fareTripler = function(fare){
    return fare * 3
   }

//    selectDifferentDrivers() — This function takes two arguments, an array 
//    of the names of Scuber's drivers and either the returnFirstTwoDrivers() 
//    or returnLastTwoDrivers() function. Based on these two arguments, 
//    selectDifferentDrivers() will return either the first two drivers 
//    or the last two drivers.
  function selectDifferentDrivers(arrayOfDrivers, selectingDrivers){
        return selectingDrivers(arrayOfDrivers)
    }