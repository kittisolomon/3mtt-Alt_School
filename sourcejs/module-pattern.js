//module pattern design using IIFE (immediately invoked function variables

var counter = (function (){

    // private stuff
    let count = 0;
   
    function print(message) {
        console.log(message + '---' + count);
    }

    // return an object
    return {
        // value: count,
        get: function () { return count; },
        set: function (value) { count = value; },

        increment: function (){
            count += 1;
            print('After increment: ');
        },

        reset: function(){
            print('Before reset: ');
            count = 0;
            print('After reset: ');
        }
    }
})();

counter.increment();
counter.increment();
counter.increment();

//Accidentatlly created a closure
///console.log(counter.value);

counter.set(7);
console.log(counter.get());

counter.reset();