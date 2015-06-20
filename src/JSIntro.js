
exports.Sum = function(num1, num2){
	return num1+num2;
}

exports.SumOfArray = function(arrayOfNums){
	var sum=0;
	for(var i=0;i<arrayOfNums.length;i++)
		sum=sum+arrayOfNums[i];
	return sum;
}

// Sum only the unique numbers in the array.
// Ex: If array is [2,3,3,2], the sum is 2+3=5

exports.SumOfUniqueNumbers = function(arrayOfNums){
	var sum=0;
	arrayOfNums=arrayOfNums.sort();
	for(var i=0;i<arrayOfNums.length;i++)
	{
		if(arrayOfNums[i]==arrayOfNums[i+1])
			continue;
		else
			sum=sum+arrayOfNums[i];
	}
	return sum;
}

exports.ReverseString = function(str){
	var str1="";
	
	var j=0;
	for(var i=str.length-1;i>=0;i--)
		str1+=str[i];
	return str1;
}


exports.ReverseArrayOfStrings = function(arrayOfStrings){
	var temp=[],index=0;
	for(var i=0;i<arrayOfStrings.length;i++)
	{
		str1="";
		for(var j=arrayOfStrings[i].length-1;j>=0;j--)
		{
			str1+=arrayOfStrings[i][j];
		}
		temp[index++]=str1;
			console.log(temp[index-1]);
	}

	return temp;
}