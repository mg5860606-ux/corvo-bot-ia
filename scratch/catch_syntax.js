const fs = require('fs');
try {
    require('./corvo.js');
} catch (e) {
    console.log(e.stack);
}
