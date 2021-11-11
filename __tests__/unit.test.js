// unit.test.js

const { exportAllDeclaration } = require('@babel/types');
const functions = require('../code-to-unit-test/unit-test-me.js');

// TODO - Part 2

//Phone numbers
test('Check for valid phone number', () => {
    expect(functions.isPhoneNumber('626-366-2730')).toBe(true);
});

test('Check for valid phone number', () => {
    expect(functions.isPhoneNumber('323-551-7001')).toBe(true);
})

test('Check for invalid phone number', () => {
    expect(functions.isPhoneNumber('123456789101112')).toBe(false);
})

test('Check for invalid phone number', () => {
    expect(functions.isPhoneNumber('HelloMyNameIsEdwin')).toBe(false);
})

//Email
test('Check for valid email', () => {
    expect(functions.isEmail('elaumack@ucsd.edu')).toBe(true);

});

test('Check for valid email', () => {
    expect(functions.isEmail('edwinlau20@gmail.com')).toBe(true);
});

test('Check for invalid email', () => {
    expect(functions.isEmail('elaumackucsd.edu')).toBe(false);
});

test('Check for invalid email', () => {
    expect(functions.isEmail('elaumack@ucsd')).toBe(false);
});

//password 
test('Check for valid password', () => {
    expect(functions.isStrongPassword('HelloEdwin')).toBe(true);
});

test('Check for valid password', () => {
    expect(functions.isStrongPassword('CSE110favclass')).toBe(true);
});

test('Check for invalid password', () => {
    expect(functions.isStrongPassword('ThisPasswordHasMoreThan15Characters')).toBe(false);
});

test('Check for invalid password', () => {
    expect(functions.isStrongPassword('Hello(())')).toBe(false);
});

//Date
test('Check for valid date', () => {
    expect(functions.isDate('11/11/2021')).toBe(true);
});

test('Check for valid date', () => {
    expect(functions.isDate('1/1/2021')).toBe(true);
});

test('Check for invalid date', () => {
    expect(functions.isDate('546/367/2021')).toBe(false);
});

test('Check for invalid date', () => {
    expect(functions.isDate('12/11/20289')).toBe(false);
});

//Hex
test('Check for valid hex', () => {
    expect(functions.isHexColor('#FFA07A')).toBe(true);
});

test('Check for valid hex', () => {
    expect(functions.isHexColor('#E9967A')).toBe(true);
});

test('Check for invalid hex', () => {
    expect(functions.isHexColor('##E9967A')).toBe(false);
});

test('Check for invalid hex', () => {
    expect(functions.isHexColor('#E9967A1234AB')).toBe(false);
});



