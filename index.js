// Code your solution in this file!
function distanceFromHqInBlocks(someValue) {
    const headquarters = 42;
    console.log(`Distance from ${someValue} to headquarters`);
    return Math.abs(someValue - headquarters);
}
function distanceFromHqInFeet(someValue){
    const feet = 264;
    const headquarters =42;
    const block = Math.abs (someValue-headquarters)
    console.log(`distanceFromHq${someValue}InFeet `)
    return (feet * block);//converts to feet
}
function distanceTravelledInFeet(start, destination){
    const feet = 264;  
    const blocksTravelled = Math.abs(destination -start);
    console.log(`Blocks travelled in feet:${blocksTravelled}`);
    return (feet * blocksTravelled);// converts to feet
}
function calculatesFarePrice(start, destination){
    const feetTravelled = Math.abs(destination - start)*264//converts to feet
    let price
    if (feetTravelled <=400){
        price = 0;
    }
    else if (feetTravelled >400 && feetTravelled <=2000){
        price =((feetTravelled -400)*0.02 );
    } 
    else if (feetTravelled >2000 && feetTravelled<=2500){
        price = 25;
    }
    else {
        return 'cannot travel that far'
    }
    return price ;

}
