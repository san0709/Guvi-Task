//a. Print odd numbers in an array

             //Anonymous Function
    let arr=[1,2,3,4,5,6,7];
    let odd = function(){
    for(let i = 0 ; i< arr.length ; i++)
    {
    if(arr[i]%2!=0)
    {
        console.log(arr[i]);
    } 
    }
    }
    odd();
                //IIFE:

    (function(){
    for(let i = 0 ; i< arr.length ; i++)
    {
    if(arr[i]%2!=0)
    {
        console.log(arr[i]);
    } 
    }  
    })();

//b. Convert all the strings to title caps in a string array

             //Anonymous Function

    let inputarray = ["Learn javascript the right way"];
    let outputarray = inputarray.map(function(item){
    return item.toUpperCase();
    });

//c.Sum of all numbers in an array
        //Anonymous Function
        const addition =function(arr){
            let result=0;
        for(i=0;i<arr.length;i++)
        {
        result=result+arr[i]
        }
            console.log(result);
    };
    addition([10,10,100]);

    //IIFE:
    (function(arr){
        let result=0;
        for(i=0;i<arr.length;i++)
        {
        result=result+arr[i]
        }
            console.log(result);
    })([12,12]);

    //d. return all prime numbers in an array

                    //Anonymous function
            let arr=[1,2,3,4,5,6,7,8,9,10,11,13,15,19,27];
            let prime =function(){
                for(i=0;i<arr.length;i++)
                {
                    if(arr[i]==1||arr[i]==2)
                    {
                    console.log(arr[i])
                    }
                    else if(arr[i]%2!==0&&arr[i]%3!==0){
                        console.log(arr[i]);
                    }
                }
                };
            prime();
                            //IIFE:
            let arr=[1,2,3,4,5,6,7,8,9,10,11,13,15,19,27];
            (function(){
                for(i=0;i<arr.length;i++)
                {
                    if(arr[i]==1||arr[i]==2)
                    {
                    console.log(arr[i])
                    }
                    else if(arr[i]%2!==0&&arr[i]%3!==0){
                        console.log(arr[i]);
                    }
                }
                })();
    //e.Return all the palindromes in an array
