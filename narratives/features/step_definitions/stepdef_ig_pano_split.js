const assert = require('assert');
const { Given, When, Then } = require('@cucumber/cucumber');

Given('upladed image has at least a width of {word}', function (width) {
    this.width = width;
});

Given('image has sucessfully been split into images with a width of {word}', function () {
    this.success = true;
});

Given('image has not successfully been split into images with a width of {word}', function () {
    this.success = false;
});

When('user chooses action Instagram split panorame image', function () {
    this.actualAnswer = isSuccessful(this.success);
});

When('user drags image in into input field', function () {
    this.actualAnswer = isItWiderThan1048576Pixels(this.format);
});

function isSuccessful(success) {
    if (success === true) {
        return 'success message';
    } else {
        return 'warning message';
    }
}

function isItWiderThan1048576Pixels(width) {
    if (width >= 1048576) {
        return 'progress bar';
    } else {
        return 'warning popup';
    }
}
