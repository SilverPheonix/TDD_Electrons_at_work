// StringCalculator.js
function DiceCalculator() {}
DiceCalculator.prototype.add = function(string_numbers) {
        var number  = string_numbers.split(",");
        var even = 0;
		var odd = 0;
		var evennumbers = [];
		for (let i = 0; i < number.length; i++) {
			
			if(number[i] %2 ==0){
				if(!evennumbers.includes(number[i])){
					even += parseInt(number[i]);
					evennumbers.push(number[i]);
				}
			}
			else{
	
				odd += parseInt(number[i]);
			}
		}
		var result= ((odd*2)-even)/2;
		if(result%2 != 0){
			result -= 1;
		}
		if(result <0){
			result *= (-1);
		}
        return result;

    }
;