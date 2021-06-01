# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @soliloquiy/lotide`

**Require it:**

`const _ = require('@soliloquiy/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `head(array)`: Returns the first item in an array
* `tail(array)`: Returns all items in an array except for the first
* `middle(array)`: Returns the middle item(s) in an array based on its length
* `assertArraysEqual(actual, expected)`: Returns a console log based on arrays being compared while utilizing eqArrays
* `assertEqual(actual, expected)`: Returns true or false based on primitives being compared
* `assertObjectsEqual(actual, expected)`: Returns a console log based on objects being compared while utilizing eqArrays
* `countLetters(str)`: Returns object of number of times a letter appears in a given string
* `countOnly(allItems, itemsToCount)`: Returns object with count for number of time value appears based on given list
* `eqArrays(arr1, arr2)`: Returns true or false based on arrays being compared in an array
* `eqObjects(object1, object2)`: Returns true or false based on objects being compared
* `findKey(object, callback)`: Returns the first key corresponding to the value that callback function equates to
* `findKeyByValue(obj, value)`: Returns key for corresponding value inputted
* `letterPositions(sentence)`: Returns the index of each place a letter appears and places in an object
* `map(array, callback)`: Returns an array after performing a callback on each item in the array
* `takeUntil(array, callback)`: Returns an array of the original with values until callback condition terminates it
* `without(arr1, arr2)`: Returns an array without values defined in arr2
