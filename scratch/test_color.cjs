const botExports = require('../ARQUIVES/funcoes/exports.js');
console.log('Color function type:', typeof botExports.color);
if (typeof botExports.color === 'function') {
    console.log('Test message in green');
} else {
    console.log('Error: color is still not a function');
}
