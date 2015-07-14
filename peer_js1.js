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
console.log(value);
//3. Create a string that is set to 11, add it to 'value'
value = value + "11";
console.log(value);
//4. Create an array, loop through 'value' using charAt, set array[i] to each value
var array = [];
for (var i=0; when i < value.length; i++) {
	array.push(value(i))
}
console.log(array);