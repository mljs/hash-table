'use strict';

const should = require('should');
const HashTable = require('..');

describe('Hash table', function () {
    it('should work', function () {
        const table = new HashTable();
        should(table.size).equal(0);

        should(table.get(1)).equal(0);
        should(table.get(2)).equal(0);

        should(table.set(1, 5)).true();
        should(table.set(5, 6)).true();
        should(table.set(1, 4)).false();

        should(table.size).equal(2);

        should(table.containsKey(1)).true();
        should(table.containsKey(3)).false();

        should(table.containsValue(4)).true();
        should(table.containsValue(5)).false();
        should(table.containsValue(25)).false();

        should(table.remove(0)).false();
        should(table.remove(1)).true();
        should(table.remove(1)).false();

        should(table.size).equal(1);

        should(table.delete(0)).false();
        should(table.delete(5)).true();

        should(table.size).equal(0);
    });
});
