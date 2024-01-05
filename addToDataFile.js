'use strict'

const fs = require('fs');

function addToDataFile(filename, context) {
    try {
        fs.writeFileSync(filename, JSON.stringify(context), 'utf8');
    } catch (error) {
        console.error(error);
    }
}


module.exports = {
    addToDataFile
}