function num1(arr)
{
    let max=arr[0];
    let min= arr[0];
    for(let i=0; i<arr.length; i++)
    {
        if(arr[i]>max)
        {
            max=arr[i];
        
        }
     else if(arr[i]<min){
            min=arr[i];
            
        }
    }
    return [max,min];
    
}
 let result=num1([56,87,65,90,1])

console.log(result)