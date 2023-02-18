//https://sites.google.com/site/pamokumedziaga/kursai/course-a/uzduotys

//1. Skaičiai ir skaitmenys

//############################################# Task 1.0 #############################################

		let num = prompt("Please, enter a 2 digit number");

		//let digit1 = num / 10;
		//let digit2 = num % 10;

		//console.log(parseInt(digit1));
		//console.log(digit2);
		let reversedNumber = GetReversed(num);
		window.alert("Reversed number: " + reversedNumber); //reversing the number

		function GetReversed(num){ //function that reverses the given number
		  let digit1 = parseInt(num / 10);
		  let digit2 = num % 10;
		  let reversedNumber = digit2 * 10 + digit1;
		  return reversedNumber;
		}
		
//########################################## Task 1.1 ##############################################

		
		let num = prompt("Please, enter a 4 digit number");
		
		let reversedNumber = GetChangedNumber(num);
		window.alert("Result: " + reversedNumber); //reversing the number

		function GetChangedNumber(num){ //function that reverses the given number
		  let part1 = parseInt(num / 100);
		  let part2 = parseInt(num % 100);
		  let reversedNumber = part2 * 100 + part1;
		  return reversedNumber;
		}
		
		
		
//########################################## Task 1.2 ##############################################

		let num = prompt("Please, enter a 4 digit number");

		//console.log(parseInt(digit1));
		//console.log(digit2);
		let reversedNumber = GetChangedNumber(num);
		window.alert("Result: " + reversedNumber); //reversing the number

		function GetChangedNumber(num){ //function that reverses the given number
		  let remainder;
		  let digit1 = parseInt(num / 1000);
		  remainder = num % 1000;
		  let digit2 = parseInt(remainder / 100);
		  remainder = remainder % 100;
		  let digit3 = parseInt(remainder / 10);
		  let digit4 = remainder % 10;
		  
		  let reversedNumber = AssembleNumberInReverseOrder(digit1, digit2, 
													 digit3, digit4);
		  
		  return reversedNumber;
		}

		function AssembleNumberInReverseOrder(a, b, c, d){ //assembles a number 
		  //from given digits in reverse order
		  return d * 1000 + c * 100 + b * 10 + a;
		}

//########################################## Task 1.2 ##############################################

		let num = prompt("Please, enter a 4 digit number");

		let reversedNumber = reverse(num);
		window.alert("Result: " + reversedNumber); //reversing the number

		function reverse(s){
			return s.split("").reverse().join("");
		}

//########################################## Task 1.3 ##############################################

		let numberOfDays = prompt("Please, enter a number of days");
		let numberOfHours = numberOfDays * 24;
		let numberOfMinutes = numberOfHours * 60;
		let numberOfSeconds = numberOfMinutes * 60;
		window.alert("Days: " + numberOfDays + "\n" + 
					"Hours: " + numberOfHours + "\n" + 
					"Minutes: " + numberOfMinutes + "\n" + 
					"Seconds: " + numberOfSeconds
					);

		function reverse(s){
			return s.split("").reverse().join("");
		}

//########################################## Task 1.3.1 ##############################################

		let numberOfLiters = prompt("How many liters of gas has the farmer bought:");
		let initialLiterCount = numberOfLiters;
		let capacityCount50 = 0;
		let capacityCount25 = 0;
		let capacityCount10 = 0;
		let capacityCount5 = 0;
		let capacityCount2 = 0;
		let capacityCount1 = 0;

		if(numberOfLiters >= 50) {
		  capacityCount50 = parseInt(numberOfLiters / 50);
		  numberOfLiters %= 50;
		}
		if(numberOfLiters >= 25) {
		  capacityCount25 = parseInt(numberOfLiters / 25);
		  numberOfLiters %= 25;
		}
		if(numberOfLiters >= 10) {
		  capacityCount10 = parseInt(numberOfLiters / 10);
		  numberOfLiters %= 10;
		}
		if(numberOfLiters >= 5) {
		  capacityCount5 = parseInt(numberOfLiters / 5);
		  numberOfLiters %= 5;
		}
		if(numberOfLiters >= 2) {
		  capacityCount2 = parseInt(numberOfLiters / 2);
		  numberOfLiters %= 2;
		}
		if(numberOfLiters == 1) {
		  capacityCount1 = 1;
		  numberOfLiters -= 1;
		}

		printCapacityCounts(initialLiterCount, capacityCount50, capacityCount25, capacityCount10,
							capacityCount5, capacityCount2, capacityCount1);

		let sum = calculateSum(capacityCount50, capacityCount25, capacityCount10,
							  capacityCount5, capacityCount2, capacityCount1);
		window.alert("Smallest number of tanks: " + sum);

		function printCapacityCounts(initialLiterCount, c50, c25, c10, c5, c2, c1)
		{
		  window.alert("Total: " + initialLiterCount + " liters\n" + 
					   "50 liter: " + c50 + " units\n" + 
					   "25 liter: " + c25 + " units\n" + 
					   "10 liter: " + c10 + " units\n" + 
					   "5 liter: " + c5 + " units\n" + 
					   "2 liter: " + c2 + " units\n" + 
					   "1 liter: " + c1 + " units\n"
					  );
		}

		function calculateSum(num1, num2, num3, num4, num5, num6) {
		  return num1 + num2 + num3 + num4 + num5 + num6;
		}

//########################################## Task 1.4 ##############################################

		let number = prompt("Enter a two digit number:");
		let digit3 = parseInt(number % 10);

		let digit4 = parseInt(number / 10);
		let number1;
		number1 = number * 100 + digit3 * 10 + digit4;

		console.log("initial number: " + number + "\n" + 
				   "final number: " + number1 + "\n")


//########################################## Task 1.4 ##############################################

		let number = prompt("Enter a two digit number:");
		let number1 = number;
		number1 = reverse(number1);
		let result = number + number1;
		console.log("result: " + result);

		console.log()

		function reverse(s){
			return s.split("").reverse().join("");
		}
		
		
//########################################## Task 1.4.1 ##############################################

		let hours = prompt("Enter hours:");
		let mins = prompt("Enter minutes:");
		let totalMins = hours * 60 + mins;
		let finalHours = parseInt(totalMins / 60);
		let finalMinutes = totalMins % 60;
		console.log("--------------------------------------------");
		console.log("Initial time: ");
		printTime(hours, mins);
		console.log("Final time: ");
		printTime(finalHours, finalMins)
		console.log("--------------------------------------------");

		function printTime(hours, minutes) {
		  console.log(hours + ":" + minutes + "\n");
		}
		
//########################################## Task 1.4.2 ##############################################
		
		let firstHours = prompt("First time: enter hours:");
		let firstMinutes = prompt("First time: enter minutes:");
		let secondHours = prompt("Second time: enter hours:");
		let secondMinutes = prompt("Second time: enter minutes:");

		let difference = getDifferenceInMinutes(firstHours, firstMinutes, secondHours,
		secondMinutes);
		let hourDifference = parseInt(difference / 60);
		let minDifference = difference % 60;
		console.log("Time difference: " + hourDifference + ":" + minDifference + "\n");

		function getDifferenceInMinutes(hour1, minute1, hour2, minute2) {
			let totalMinutes1 = getTimeInMinutes(hour1, minute1);
			let totalMinutes2 = getTimeInMinutes(hour2, minute2);
			return totalMinutes2 - totalMinutes1;
		}

		function getTimeInMinutes(hours, minutes) {
			return parseInt(hours) * 60 + parseInt(minutes);
		}

