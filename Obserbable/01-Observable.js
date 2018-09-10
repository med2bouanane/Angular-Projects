const rxjs = require('rxjs');

class Example_01 {
    constructor() {

        const observable$ = rxjs.from([1, 2, 3]);

        observable$.subscribe(
            number => console.log(number),
            error => console.log(error),
            () => console.log('Finished')
        );

    }
}

module.exports = Example_01;