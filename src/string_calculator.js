// StringCalculator.js
function DiceCalculator() {}
DiceCalculator.prototype.add = function(string_numbers) {


        var number  = string_numbers.split(",");
        var even = 0;
		var odd = 0;
		for (let i = 0; i < number.length; i++) {
			
			if(number[i] %2 ==0){
				
				even += parseInt(number[i]);
			}
			else{
	
				odd += parseInt(number[i]);
			}
		}
        return (odd - even) * 2;

    }
;