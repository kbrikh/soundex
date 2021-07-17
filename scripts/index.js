#! /usr/bin/env node

/* eslint no-console: off */
/* eslint no-restricted-globals: off */

const soundex = require('../index');

const cmdLine = process.argv;

function errorMessage() {
    console.log('Syntax error');
    console.log('Usage : soundex <word-to-parse> [<length>]');
    console.log('<word-to-parse> : Text that includes whitespaces should be surrounded by double quotes');
    console.log('<length> : Number of digit after the first letter (default = 3). OPTIONAL\n');
}

function soundexCli() {
    if (cmdLine.length !== 3 && cmdLine.length !== 4) {
        errorMessage();
        return;
    }

    const text = cmdLine[2];
    let digit = null;

    if (cmdLine.length === 4) {
        digit = Number(cmdLine[3]);
    }

    if (!isNaN(digit)) {
        console.log(soundex(text, digit));
    } else {
        errorMessage();
    }
}

soundexCli();
