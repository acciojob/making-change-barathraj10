const makeChange = (c) => {
  // your name here

	const obj={
		p:1,
		n:5,
		d:10,
		q:25		
	}
	const result={
		p:0,
		n:0,
		d:0,
		q:0
	}
	while(c>0){
		if(c/obj.q>0){
			result.q=Math.floor(c/obj.q);
			c=c%obj.q;
		}
		else if(c/obj.d>0){
			result.d=c/obj.d;
			c=c%obj.d;
		}
		else if(c/obj.n>0){
			result.n=c/obj.n;
			c=c%obj.n;
		}
		else{
			result.p=c/obj.p;
			c=c%obj.p;
		}
		
	}
};

// Do not the change the code below
const c = prompt("Enter c: ");
alert(JSON.stringify(makeChange(c)));
