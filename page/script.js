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



function focusInput() {
	equationElement.focus();
};
