const hq= 42

function distanceFromHqInBlocks (block){
    if (block > hq){
        return block-hq;
    }
    else if (block < hq){
        return hq-block;
    }
}

function distanceFromHqInFeet (block){
    return distanceFromHqInBlocks(block)*264;
}

function distanceTravelledInFeet (start, destination){
    if (start > destination){
        return (start-destination)*264;
    }
    else if (start < destination){
        return (destination-start)*264;
    }
}

function calculatesFarePrice(start, destination){
    if (distanceTravelledInFeet(start, destination)<=400){
        return 0
    }
    else if (distanceTravelledInFeet(start, destination) > 400 && distanceTravelledInFeet(start, destination) < 2000){
        return ((distanceTravelledInFeet(start, destination)-400)*(.02))
    }
    else if (distanceTravelledInFeet(start, destination) > 2000 && distanceTravelledInFeet(start, destination) < 2500){
        return 25
    }
    else if (distanceTravelledInFeet(start, destination) > 2500) {
        return 'cannot travel that far'
    }

}

//Below is how i did this wrong. AAQ helped me through the first two functions then i finished myself.
//In the incorrect code i was defining hard numbers for each function forceing it to pass the test.
//AAQ helped me understand how to call the first function in the second function helping me solve the rest myself.


// // Code your solution in this file!
// // /*function distanceFromHqInBlocks (distance, blocks) {
// //     if (distance === 43){
// //         return blocks= 1
// //     }
// //     else if (distance===50){
// //         return blocks = 8;
// //     }
// //     else if (distance === 34){
// //         return blocks = 42-distance;
// //     }
// // }

// function distanceFromHqInFeet (distance, feet) {
//     distanceFromHqInBlocks(distance);

//     if (distance === 43){
//         return feet=264;
//     }
//     else if (distance===50){
//         return feet= 2112;
//     }
//     else if (distance===34){
//         return feet = distanceFromHqInBlocks(34)*distanceFromHqInFeet(43);
//     }
// }

// function distanceTravelledInFeet (num1, num2, feetTraveled){
    
//     if (num1, num2){
//         return feetTraveled;
//     }
//     else if (num1 === 50, num2 === 60){
//         return feetTraveled= 2640;
//     }
//     else if (num1===34, num2===28){
//         return feetTraveled= ((num1-num2)*264)
//     }
// }

// function calculatesFarePrice(start, destination, fare){

//     if (((start-destination)*264) <= 400) {
//         return fare = 0;
//     }  
//     else if(((start-destination)*264) > 400 && ((start-destination)*264) <= 2000){
//         return fare =(((start-destination)*264)-400)*(.02);
//     }
//     else if(((destination-start)*264) > 2000 && ((destination-start)*264) <= 2500){
//         return fare = 25;
//     }
//     else if (((start-destination)*264) > 2500) {
//         return 'cannot travel that far'
//     }
// }
// */
// /*if (start === 43, destination === 44){
//         return 0;
//     }
//     else if (start ===34, destination===32){
//         return 
//     }*/