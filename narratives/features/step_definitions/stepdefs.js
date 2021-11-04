const assert = require('assert');
const { Given, When, Then } = require('@cucumber/cucumber');

Given('image is in format {word}', function (format) {
    this.format = format;
});

Given('images has successfully been converted to low poly art'), function () {
    this.success = true;
}

Given('images has not successfully been converted to low poly art'), function () {
    this.success = true;
}

When('user chooses action convert to low poly art'), function () {
    this.actualAnswer = "";
}

When('user drags image in into input field', function () {
    this.actualAnswer = isItPNGOrJPEG(this.format);
});

Then('user should see a {string}', function (expectedAnswer) {
    assert.equal(this.actualAnswer, expectedAnswer);
});

function isSuccessful(success) {
    if (success === true) {
        return 'success message';
    } else {
        return 'warning message';
    }
}

function isItPNGOrJPEG(format) {
    if (format === 'PNG' || format === 'JPEG') {
        return 'progress bar';
    } else {
        return 'warning popup';
    }
}