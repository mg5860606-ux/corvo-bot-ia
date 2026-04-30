const { exec } = require('child_process');
exec('node --check corvo.js', (err, stdout, stderr) => {
    require('fs').writeFileSync('scratch/syntax_error.log', stderr);
});
