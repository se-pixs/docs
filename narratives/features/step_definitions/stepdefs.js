const assert = require('assert');
const { Given, When, Then } = require('@cucumber/cucumber');

Given('image is in format {word}', function (format) {
    this.format = format;
});

When('user drags image in into input field', function () {
    this.actualAnswer = isItPNG(this.format);
});

Then('user should see a {string}', function (expectedAnswer) {
    assert.strictEqual(this.actualAnswer, expectedAnswer);
});

function isItPNG(format) {
    // insert logic here
    if (format === 'PNG') {
        return 'progress bar';
    } else {
        return 'warning popup';
    }
}