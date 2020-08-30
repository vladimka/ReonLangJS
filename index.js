const fs = require('fs');
const file = fs.readFileSync(__dirname + '/' + process.argv[2], 'utf8');
const instrcutions = file.toLowerCase().split(' ');
let numbers = [];
let currnum = 0;

for(let i = 0; i < 50000; i++)
	numbers.push(0);

for(let i = 0; i < instrcutions.length; i++){
	let instrcution = instrcutions[i];
	switch(instrcution){
		case "реон":
			currnum += 1;
			break;
		case "говно":
			currnum -= 1;
			break;
		case "киррил":
			numbers[currnum] += 1;
			break;
		case "хакер":
			numbers[currnum] -= 1;
			break;
		case "сас":
			process.stdout.write(String.fromCharCode(numbers[currnum]));
			break;
		case "жумайсынба":
			numbers[currnum] = instrcutions[i + 1].charCodeAt(0);
			i += 1;
			break;
		case "крутой":
			currnum *= 2;
			break;
		case "студия":
			currnum /= 2;
			break;
	}
}