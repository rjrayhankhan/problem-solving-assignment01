//github link: https://github.com/rjrayhankhan/problem-solving-assignment01


//Program For calculation "kilometer to meter" Lest Start>>>==============================

function kilometerToMeter(kilometer) {
    if (kilometer < 0) {
        return "Length can not Be Negative Number."
    } else
        return kilometer / 1000; //we know 1 meter = 1000 kilometer.   
}
console.log(kilometerToMeter(-10));
console.log(kilometerToMeter(9000).toFixed(2));



//Calculate the budgetCalculator====================================================

function budgetCalculator(numberOfWatch, numberOfPhone, numberOfLaptop) {
    if ((numberOfWatch < 0) || (numberOfPhone < 0) || (numberOfLaptop < 0)) {
        return "Watch ,Phone, Laptop Not be Negative Number";
    } else
        return ((numberOfWatch * 50) + (numberOfPhone * 100) + (numberOfLaptop * 500));
}
console.log(budgetCalculator(1, -5, 3));
console.log(budgetCalculator(2, 1, 1));



//Creating a Hotel-Cost=====================================================

function hotelCost(numberOfDays) {
    if (numberOfDays < 0) {
        return "Days Number Not Be accept Negative Number."
    } else {
        if (numberOfDays <= 10) {
            firstTenDays = numberOfDays;
            return firstTenDays * 100;
        } else if ((numberOfDays > 10) && (numberOfDays <= 20)) {
            firstTenDays = 10
            tenToTwentyDays = numberOfDays - firstTenDays;
            return ((firstTenDays * 100) + (tenToTwentyDays * 80));
        } else if (numberOfDays > 20) {
            firstTenDays = 10
            tenToTwentyDays = 10
            twentyToMoreDays = numberOfDays - 20;
            return ((firstTenDays * 100) + (tenToTwentyDays * 80) + (twentyToMoreDays * 50));
        }
    }
}
console.log(hotelCost(-20));
console.log(hotelCost(0));
console.log(hotelCost(8));
console.log(hotelCost(13));
console.log(hotelCost(25));


//Find Out Tiny Friend name in the Array

function megaFriend(friends) {
    var numberOfArrayFriend = friends[0];
    for (var i = 0; i < friends.length; i++) {
        var currentFriends = friends[i];
        var newCurrentFriends = friends[i].length;
        if (newCurrentFriends < numberOfArrayFriend.length) {
            numberOfArrayFriend = currentFriends;
            console.log(numberOfArrayFriend);
        }
    }
    return numberOfArrayFriend;
}

var Friend = megaFriend(["sunny", "hanif", "salma", "Robiul", "Kamal Hossain"]);
console.log(Friend);
