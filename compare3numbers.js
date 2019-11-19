function compareTheThree(a,b,c) // create a function
{    var biggest = a
     var smallest = b
     if((a > b) && (a > c)) // check a is bigger 
     {
         biggest = a
     }
    else if((b > a) && (b > c)) // check  if b is bigger
    {
        biggest = b
    }
    else // check c is bigger 
     {
        biggest = c
     }
     // now checking for smallest
     if((a < b) && (a < c)) // check  if a is smaller
     {
        smallest = a //print a
     }

     else if((b < a) &&  (b < c)) // check b is smaller
     {
        smallest = b
     }
     else if  ((c < a) &&  (c < b))// check  if c is smaller
     {
        smallest = c //print c
     } 

    console.log( biggest + " " + "is biggest of the three")
    console.log( smallest + " " + "is smallest of the three")
}
    
compareTheThree(7,6,50) //pass in values