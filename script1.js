function binary(decimal) {
	let num=decimal;
	let bit=1;
	let bin=0;
	let rem=0;
	while (num>0)
		{
			rem= num % 2;
			bin= (rem*bit)+bin;
			num=parseInt(num/2);
			bit=bit*10;
		}
	return bin.toString();
    let result=binary(100);
    console.log(result)
}

