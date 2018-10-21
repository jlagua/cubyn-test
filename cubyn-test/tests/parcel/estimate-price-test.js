var chai = require('chai');
var Parcel = require('../../src/parcel/parcel');

describe('Parcel', function() {
    it('estimatePrice return a positive number', function() {
        var parcel = new Parcel({
            type: "classic",
            volume: 1,
            weight: 1,
        });
        price = parcel.estimatePrice();
        chai.expect(price).to.be.a('number');
        chai.assert(price >= 0);
    });

    it('estimatePrice return a different price when type is different', function() {
        var cparcel = new Parcel({
            type: "classic",
            weight: 1,
        });
        cprice = cparcel.estimatePrice()
        var eparcel = new Parcel({
            type: "express",
            weight: 1,
        });
        eprice = eparcel.estimatePrice();
        chai.assert(cprice != eprice);
    });

    it('estimatePrice return correct prices for specific cases', function() {

        var parcel = new Parcel({
            type: "classic",
            weight: 0.1,
        });
        price = parcel.estimatePrice();
        chai.assert(price == 6);

        var parcel = new Parcel({
            type: "express",
            weight: 0.5,
        });
        price = parcel.estimatePrice();
        chai.assert(price == 12);

        var parcel = new Parcel({
            type: "classic",
            weight: 1,
        });
        price = parcel.estimatePrice();
        chai.assert(price == 9);

        var parcel = new Parcel({
            type: "express",
            weight: 2,
        });
        price = parcel.estimatePrice();
        chai.assert(price == 8);

        var parcel = new Parcel({
            type: "classic",
            weight: 2,
        });
        price = parcel.estimatePrice();
        chai.assert(price == 2);
    });
  });