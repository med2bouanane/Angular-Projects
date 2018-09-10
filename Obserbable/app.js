const ExampleCreate = require('./02-observableCreation');
const Example_01 = require('./01-Observable');
const ExampleSubject = require('./03-Subjects');
const ExampleBehaviorSubject = require('./04-BehaviorSubject');
const Trace = require('./trace');


console.log(Trace.paint('01-OBSERVABLE.JS').msgInit);
new Example_01();
console.log(Trace.paint('01-OBSERVABLE.JS').msgFin);


console.log(Trace.paint('02-observableCreation').msgInit);
// Create a observable
const observable$ = ExampleCreate.createObservableWithNumbers();

// we subscribe to the observable 
// and do anything with the data
observable$.subscribe(
    (data) => console.log(data), // Observer: function que recibe los datos emitidos por el observable
    (error) => console.log(error), // Observer de errores
    () => console.log('Observable sent "completed"') // Observer de fialización
);


console.log(Trace.paint('02-observableCreation').msgFin);


console.log(Trace.paint('03-Subjects.js').msgInit);
ExampleSubject.testSubject();
console.log(Trace.paint('03-Subjects.js').msgFin);


console.log(Trace.paint('04-BehaviorSubject.js').msgInit);
ExampleBehaviorSubject.testSubject();
console.log(Trace.paint('04-BehaviorSubject.js').msgFin);