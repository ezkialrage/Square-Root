function sRoot(x){
     //initial guess is X/2
    var guess = x/2;
    var high = 0;
    var low = 0;
    var root = 0;
   //if guess * guess is x, root is guess
    if ((guess*guess)===x) {
        root=guess;
    }
      //otherwise we have to figure out a closer root number, find the guesses
    else{
        findGuess(guess);
    }

   function findGuess(guess) {
      //we are finding the base numbers to average.  our root will be between the low and high values. 
        if ((guess*guess)>x) {
            high = guess;
              //cutting each guess value in half for quick operations
            guess = guess/2;
           //call the function again to keep drilling down to find our low average number
            findGuess(guess);
        }
        else{
           //once we find the low value, we now have our high and low values to average. 
            low = guess;
           //call the average function to found out our root!
            average(low, high);
        }
    }

     //take the low and high values and find the average of these two numbers.  
    function average(low, high){
          //our root is between our low value and high value, so lets start in the middle and work from there
        guess = (low + high) / 2;
         
          //if the average of these two numbers is less than or equal to .01, we have our root value(can adjust for accuracy)
        if (Math.abs((guess * guess - x)) <= .01) {
           if(((Math.floor(guess)*Math.floor(guess))-x)===0){
               root = Math.floor(guess);
               return;
            }
           else if(((Math.ceil(guess)*Math.ceil(guess))-x)===0){
                root = Math.ceil(guess);
                return;  
            }
           else{
                 root = guess;
                 return;
          }
        }
     //if our new guess^2 is higher than x, we have our new high value because our root number is less than this guess, rerun the average function
        else if(((guess * guess) > x)){
            high = guess;
            average(low, high);
        }
     //if our new guess^2 is less than x, we have our new low value, rerun the average function
        else if (((guess * guess) < x)){
            low = guess;
            average(low, high);
        }
    }
    
     console.log(parseFloat(root.toFixed(4)));
     return parseFloat(root.toFixed(4));
}