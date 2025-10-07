var temp=36;

if (temp<0) {
	console.log("Freezing Cold");
}
else if (temp>=0 && temp<=15) {
	console.log("very Cold");
}
else if (temp>15 && temp<=25) {
	console.log("Cold");
}
else if (temp>25 && temp<=35) {
	console.log("Warm");
}
else {
	console.log("Hot");
}
