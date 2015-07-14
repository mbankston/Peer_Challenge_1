//1. Start with the number 42 and set that equal to 'value'
var value = 42; 

//2. Create condition logic to check if the value is great or equal to 53
//2-1. If true, add 42 to 'value'
//2-2. If false, subtract 13 from 'value'

if (value >= 53) {
	value = value + 42;
} else {
	value = value-13;
}

//3. Create a string that is set to 11, add it to 'value'
value = value + "11";

//4. Create an array, loop through 'value' using charAt, set array[i] to each value
var array = [];
for (var i=0; i < value.length; i++) {
	array.push(value.charAt(i));
}

//5. Remove the first and last values off the array
array.shift();
array.pop();

//6. Create a new variable. Loop backwards through the array and store each value into the 
//new Variable, combining each of the values of that array (backwards remember!)
var value2 = "";
for (i=0; i<=array.length; i++){
	value2 += array.pop(value.charAt(i));
}

//7. parseInt both the 'value' and the new variable created in Step 6, ensure that both 'value' 
//and the new variable are set to these new parsed values;
value = parseInt(value);
value2 = parseInt(value2);

//8. Add 'value' and the new variable created in Step 6 together and store them in 'value'
value = value + value2;

//9. If the new value of 'value' is less than 60, set 'value' equal to 14. If not, 
//check to see if it is equal to 2930, if it is, set 'value' equal to 27. 
//If neither of these are true, set the value to 2.
if(value<60){
	value = 14;
}
else if (value=2930){
	value = 27;
}
else{
	value = 2
}

//10. Create a while loop that counts down from 10 and increments 'value' by 1.
i=10;
while(i>0){
	value = value += 1;
	i--;
}

//11. Create a function that accepts an argument 'val'. The function should convert 'val' to a String,
// then drop the first character off the String, but only if there 
//is more than 1 character in the String. Return 'val' and set the 'value' to the returned value.
function elevenFunction(val){
	value = value.toString();
	if(value.length>1){
		
		value = value.slice(1,value.length);
		return value;
			
	}
	else{
		return value;
	}

}

//12. Call the function.
value = elevenFunction(value);


//13. Console log value. Create an index.html file, link the this Javascript file. 
//Load in the browser, check the value.
console.log(value);

//14. Your answer should be a String value that equals 7. Is that what you got?








