//Subscribes independientes : puede probar que son independientes, usando la funcion unsubscribe
var observable = Rx.Observable
  .create(observer => {
    setInterval(() => {
      console.log(observer);
      observer.next(1);
    }, 1000);
  })
  .map(v => v)
  .filter(v => true);

// var sub1 = observable.subscribe({ name: "obs1", next: x => console.log(x), error: err => console.log(err) });
// var sub2 = observable.subscribe({ name: "obs2", next: y => console.log(y) });
// var sub3 = observable.subscribe({ name: "obs3", next: z => console.log(z) });

//Multicasted
var source = Rx.Observable.from([1, 2, 3]);
var subject = new Rx.Subject();
var multicasted = source.multicast(subject);

// These are, under the hood, `subject.subscribe({...})`:
multicasted.subscribe({
  next: v => console.log("observerA: " + v)
});
multicasted.subscribe({
  next: v => console.log("observerB: " + v)
});

// This is, under the hood, `source.subscribe(subject)`:
multicasted.connect();

/**
 * Creates an Observable sequence from changes to an object using Object.observe.
 * @param {Object} obj An object to observe changes.
 * @returns {Observable} An observable sequence containing changes to an object from Object.observe.
 */
Rx.Observable.ofObjectChanges = function(obj) {
  if (obj == null) { throw new TypeError('object must not be null or undefined.'); }
  if (typeof Object.observe !== 'function' && typeof Object.unobserve !== 'function') { throw new TypeError('Object.observe is not supported on your platform') }
  return new AnonymousObservable(function(observer) {
    function observerFn(changes) {
      for(var i = 0, len = changes.length; i < len; i++) {
        observer.onNext(changes[i]);
      }
    }

    Object.observe(obj, observerFn);

    return function () {
      Object.unobserve(obj, observerFn);
    };
  });
};

var objeto = { a: 1, b: 2 };

// Observable for change in objects
var objeto = {x: 1};
var source = Rx.Observable.ofObjectChanges(objeto);

var subscription = source.subscribe(
  function (x) {
    console.log('Next: %s', x);
  },
  function (err) {
    console.log('Error: %s', err);
  },
  function () {
    console.log('Completed');
  });

objeto.x = 42;

// => Next: {type: "update", object: Object, name: "x", oldValue: 1}
