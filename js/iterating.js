(function(){
    "use strict";

    /**
     * TODO:
     * Create an array of 4 people's names and store it in a variable called
     * 'names'.
     */

    var names = ['Gisele', 'Leilani', 'Emmanuel', 'Valentino'];
    {
        console.log('Here are the names of my kids ' + names + '.')
    }

    /**
     * TODO:
     * Create a log statement that will log the number of elements in the names
     * array.
     */
    console.log(names.length);
    /**
     * TODO:
     * Create log statements that will print each of the names individually by
     * accessing each element's index.
     */
    console.log(names[0]);
    console.log(names[1]);
    console.log(names[2]);
    console.log(names[3]);

    /**
     * TODO:
     * Write some code that uses a for loop to log every item in the names
     * array.
     */
    for(var i = 0; i < names.length; i++){
        console.log("The names at index " + i + ' is: ' + names[i]);
    }
    /**
     * TODO:
     * Refactor your above code to use a `forEach` loop
     */
    names.forEach(function(names) {
        console.log("Here are My kids names: " + names +".")
    });
    /**
     * TODO:
     * Create the following three functions, each will accept an array and
     * return an an element from it
     * - first: returns the first item in the array
     * - second: returns the second item in the array
     * - last: returns the last item in the array
     *
     * Example:
     *  > first([1, 2, 3, 4, 5]) // returns 1
     *  > second([1, 2, 3, 4, 5]) // returns 2
     *  > last([1, 2, 3, 4, 5]) // return 5
     */
    var number = [1,2,3,4,5];
    function first(array) {
    console.log('This return the first number:' + array[0])
    }
    first(number)

    function second(array) {
        console.log('This return the second number:' + array[1])
    }
    second(number)

    function last(array){
        console.log('This is my last number: ' + array[4])
    }
    last(number)


        // return('This is my first number' + numbers [0]);
        // return('This is my second number' + numbers [1]);
        // return('This is my third number' + numbers [2]);
    // number.forEach(function(num,secNum,thirdN,lastNum)
    // {
    //     console.log('This is my first number' + num)
    //     console.log('This is my second number' + secNum)
    //     console.log('This is my last number' + lastNum)
    // });


})();
