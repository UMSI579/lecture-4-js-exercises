// Override console.log so we can store log output in an array that we can
// use to check our work.

// Copy the default console.log() to a new `stdlog` property 
// in `console`. This means calling console.stdlog() will call the
// *original* console.log. We need this copy because we're about to override
console.stdlog = console.log.bind(console); // Bind() is called so console.stdlog works in the same scope as console.log

// Create a `logs` property that stores the console.log() output.
console.logs = [];

// Overwrite the built-in default console.log().
console.log = function(){
    // Store the contents of the call to console log in the newly created
    // `logs` property.
    console.logs.push(Array.from(arguments));
    // Call the original console.log by invoking the copy we made on line 7.
    console.stdlog.apply(console, arguments);
}
