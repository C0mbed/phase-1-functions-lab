// Code your solution in this file!

function distanceFromHqInBlocks(location) {
    let hq = 42;
    if (location > hq) {
        return location-hq;
    } else if (hq > location) {
        return hq-location;
    } else {
        return 0;
    }
}

function distanceFromHqInFeet(block) {
    const blocks = distanceFromHqInBlocks(block);
    return blocks*264;
}

function distanceTravelledInFeet(start, destination) {
    if (start > destination) {
        return (start-destination)*264;
    } else if (destination > start) {
        return (destination-start)*264;
    } else { return 0 };
}

function calculatesFarePrice(start, destination) {
    const distanceInFeet = distanceTravelledInFeet(start, destination);
    console.log(distanceInFeet);
    if (distanceInFeet > 400 && distanceInFeet < 2000) {
        return ((distanceInFeet-400)*2)/100;
    } else if (distanceInFeet > 2000 && distanceInFeet < 2500) {
        return 25;
    } else {
        if (distanceInFeet < 400) {
            return 0;
        } else {
            return "cannot travel that far";
        }
    }
}