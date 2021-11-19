const assert = require('assert');
const { Given, When, Then } = require('@cucumber/cucumber');

Given('image is in format {word}', function (format) {
    this.format = format;
});

Given('image has successfully been converted to {word}', function () {
    this.success = true;
});

Given('image has not successfully been converted to {word}', function () {
    this.success = false;
});

When('user chooses action convert to/from jpeg', function () {
    this.actualAnswer = isSuccessful(this.success);
});

When('user drags image in into input field', function () {
    this.actualAnswer = isItPNGOrJPEG(this.format);
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
