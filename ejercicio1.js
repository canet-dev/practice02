console.log('starting app');
setTimeout(() => {

console.log ('Inside Callback');
}, 2000);

setTimeout(() => {
console.log ('Second Timeout');
}, 0 );

console.log ('Finishing Up');