const makeChange = (c) => {
  // your name here

	const obj={
		p:1,
		n:5,
		d:10,
		q:25		
	}
	while(c>0){
		if(c/q>0){
			obj.q=c/q;
			c=c%q;
		}
		else if(c/d>0){
			obj.d=c/d;
			c=c%d;
		}
		else if(c/n>0){
			obj.n=c/n;
			c=c%n;
		}
		else{
			obj.p=c/p;
			c=c%p;
		}
		
	}
};

// Do not the change the code below
// const c = prompt("Enter c: ");
alert(JSON.stringify(makeChange(c)));
