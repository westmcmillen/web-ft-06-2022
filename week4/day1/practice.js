// Total bill tip percentage return new total with tip

// const tipCalculator = (bill, percentage) => {
//     return bill + (bill * percentage) / 100;
// };

// calc total bill if above 100 add 30% if between 50 and 99 25% below 50 20%

// const newTipCalculator = total => {
//     let newTotal;
//     if (total > 100) {
//         newTotal = total + (total * 30) / 100;
//     }
//     if (total > 50 && total < 100) {
//         newTotal = total + (total * 25) / 100;
//     }
//     newTotal = total + (total * 20) / 100;
//     return newTotal.toFixed(2);
// };

// console.log(newTipCalculator(9.99));

// create function that recieves a number guarenteed range 1 to 5 timeslot as a string
// if status is 4 - 5 placed first if 3 second below 3 last run 3 times with 3 data sets
// return array of objects with vip status and timeslot;

const reservations = [];

const makeAReservation = (vipStatus, timeslot) => {
    reservations.push({ vipStatus, timeslot });
    return reservations.sort((a, b) => b.vipStatus - a.vipStatus);
};
