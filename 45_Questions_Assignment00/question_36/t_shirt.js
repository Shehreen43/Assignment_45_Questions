//               QUESTION:36
/*
T-Shirt: Write a function called make_shirt() that accepts a size and the
text of a message that should be printed on the shirt.

The function should print
a sentence summarizing the size of the shirt and the message printed on it.
Call the function.
*/
//make a function called make_shirt()
function make_shirt(size, message) {
    console.log(`You have ordered a ${size}-sized shirt with the following message: "${message}".`);
}
;
//call the function
make_shirt('Medium', 'Typescript');
export {};
