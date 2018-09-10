const rxjs = require('rxjs');


class ExampleCreate{
    static createObservableWithNumbers(){
        const observable$ = rxjs.Observable.create( function subscribe(observer){
            // El OBSERVER (observador) envia Stream of data
            // EL OBRERVABLE es el objeto al que nos suscribimos para recibir los datos
            observer.next(10); // EL OBSERVABLE EMITE EVENTOS QUE SERAN INTERCEPTADOS POR EL OBSERVER
            observer.next(20);
            observer.next(30);
            observer.error('Error');
            observer.next(40);
            observer.complete();
        });

        return observable$;
    }
}

module.exports = ExampleCreate;