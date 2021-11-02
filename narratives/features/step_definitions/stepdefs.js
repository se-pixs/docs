const assert = require('assert');
const { Given, When, Then } = require('@cucumber/cucumber');

Given('image is in format {word}', function (format) {
    this.format = format;
});

When('user drags image in into input field', function () {
    this.actualAnswer = isItPNGOrJPEG(this.format);
});

Then('user should see a {string}', function (expectedAnswer) {
    assert.strictEqual(this.actualAnswer, expectedAnswer);
});

function isItPNGOrJPEG(format) {
    if (format === 'PNG' || format === 'JPEG') {
        return 'progress bar';
    } else {
        return 'warning popup';
    }
}