var expect      = require('chai').expect;
var _           = require("lodash");
var creditcards = require("../src/creditcards.js");


describe("English locale tests (en_US)", function() {
    it ('returns "Visa" for "visa" (network name)', function() {
    	expect(creditcards.getCreditcardName("en_US", "visa")).to.equal("Visa");
    });

    it ('returns "Expiration" for "expiration" (field name)', function() {
    	expect(creditcards.getFieldName("en_US", "expiration")).to.equal("Expiration");
    });
});

describe("Invalid locale tests (xx_XX)", function() {
    it ('returns empty string for "visa" (network name)', function() {
    	expect(creditcards.getCreditcardName("xx_XX", "visa")).to.equal("");
    });

    it ('returns empty string for "expiration" (field name)', function() {
    	expect(creditcards.getFieldName("xx_XX", "expiration")).to.equal("");
    });
});