
//exc1
function extractNumbers(arr) 
{
    
        if(!Array.isArray(arr))
            throw new Error("Input must to be arr")
    


    let arrNew=[]
    for(let i=0;i<arr.length;i++)
    {
        if( typeof arr[i]==="number"&&!Number.isNaN(arr[i]))
        
            arrNew.push(arr[i])
        
    }
    return arrNew;

}

  
console.log(extractNumbers([1, "hi", 5, NaN]));



//exc2

function sumNumbersSafe(arr)
{
    try{
         let num_arr=extractNumbers(arr);
    
        let sum=0
        for(let i=0;i<num_arr.length;i++)
        {
            sum=sum+num_arr[i];
        }
        return sum;
    }

    catch(error)
    {
        console.warn(error.message)
        return 0;
    }

    
}

console.log(sumNumbersSafe(([1, "hi", 5, NaN])))

//exc3

function filterLargeSums(arrList, minTotal)
{
      return arrList.filter(function(arr)
    {
       return sumNumbersSafe(arr)>=minTotal
    }
    
)
 
}

console.log(filterLargeSums([[4, 6], [5, 5], [1, 2, 3]], 10));

//exc 4

function summaryStats(arrList)
{
    let arr_new=filterLargeSums(arrList,10)


   return arr_new.map(function(item)
{
    let sum=sumNumbersSafe(item);
    let average =sum/item.length;
    return{sum,average}
})
}


 console.log(summaryStats([[4, 6], [5, 5], [1, 2, 3]]))

 //exc5
  function safeCalculator(a, b, operation)
 {
    if ( typeof a !== typeof b)
    {
        throw new Error("Input is not of the same type")
    }
     if(operation=="add")
     {
        return a+b;
     }
     if(operation=="subtract")
     {
        return a-b;
     }
     if(operation=="divide")
     {
        return a/b;
     }
     if(operation=="multiply")
     {
        return a*b;
     }
 }

 console.log(safeCalculator(5,4,"divide"));