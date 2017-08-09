'use strict';


function ExampleMap0() {

    Map.call(this, {
        cols: 12,
        rows: 12,
        tsize: 64,
        layers: [
            [
                1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
                1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
                1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
                1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
                1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
                1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1,
                1, 1, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1,
                1, 1, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1,
                1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1,
                1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1,
                1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1,
                1, 3, 3, 1, 1, 2, 3, 3, 3, 3, 1, 1
            ],
            [
                3, 3, 3, 3, 3, 0, 0, 0, 0, 0, 0, 0,
                0, 0, 0, 5, 0, 0, 0, 0, 0, 0, 0, 0,
                0, 0, 0, 5, 0, 0, 0, 0, 0, 0, 0, 0,
                0, 5, 5, 5, 0, 0, 0, 0, 0, 5, 0, 0,
                0, 0, 0, 7, 0, 8, 0, 0, 0, 0, 0, 0,
                0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                0, 0, 0, 0, 0, 0, , 0, 0, 0, 0, 0,
                0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5,
                0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                0, 4, 4, 0, 5, 4, 4, 4, 4, 4, 5, 0,
                0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 6
            ]
        ]
    });
}


// Inherit from `Map`
ExampleMap0.prototype = Object.create(Map.prototype);
ExampleMap0.prototype.constructor = ExampleMap0;


window.ExampleMap0 = ExampleMap0;