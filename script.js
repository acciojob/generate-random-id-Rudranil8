function makeid(l) {
	let str="QWERTYUIOPASDFGHJKLZXCVBNMqwertyuiopasdfghjklzxcvbnm1234567890";
	let v="";
	for(let i=0; i<l; i++){
		v=v+str[i];
	}
	return v;
}

// Do not change the code below.
const l = prompt("Enter a number.");
alert(makeid(l));
