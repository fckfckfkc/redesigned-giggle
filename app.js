const operations = [1000, -700, 300, -500, 10000];
const balance = 100;

const totalBalance = calculate(operations, balance);
console.log(totalBalance);
function isCorrectOperation (result) {
	console.log(result > 0);
}

 function calculate (operations, balance) {
	let sum = balance;
	for (let i = 0; i<operations.length; i++){
		const result = sum + operations[i];
		if(i>0){
		 isCorrectOperation (result)
		}
		sum = result;

	}
	return sum;
}  



function plus (operations) {
	let sumOfPluses = 0;
	let quantityOfPluses = 0;
	let averageIncome = 0;
	for (let i=0; i<operations.length; i++){
       if (operations[i]>0) {
		sumOfPluses += operations[i] ;
	   }
	   
	}
	


   for (let i=0; i<operations.length; i=i+1){
	if (operations[i]>0){
		quantityOfPluses++
	}
   }
  
   console.log(averageIncome = sumOfPluses/quantityOfPluses)
} 
plus (operations,balance)

function minus (operations) {
	let sumOfMinuses = 0;
    let quantityOfMinuses = 0;
	let averageExpenses = 0;
	 
	for (let i=0; i<operations.length; i++) {
		if (operations[i]<0){
			sumOfMinuses +=operations[i];
		}
	}
	

	for (let i=0; i<operations.length; i=i+1){
		if (operations[i]<0){
			quantityOfMinuses++
		}
	}
	console.log(averageExpenses = sumOfMinuses/quantityOfMinuses)
}
minus (operations)

