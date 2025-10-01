const math = require("mathjs");

const equationElement = document.getElementById("equation");

equationElement.focus();



function clearInput() {
	equationElement.value = "";
	equationElement.focus();
};



function deleteLastCharacter() {
	equationElement.value = equationElement.value.substr(0, equationElement.value.length - 1);
	equationElement.focus();
};



function equate() {
	const equation = equationElement.value
		.replace(/÷/g, "/")
		.replace(/×/g, "*")
		.replace(/−/g, "-");

	equationElement.value = math.evaluate(equation);
	equationElement.focus();
};



function focusInput() {
	equationElement.focus();
};



function type(char) {
	equationElement.value += char;
	equationElement.focus();
};