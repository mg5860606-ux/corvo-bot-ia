const { execSync } = require('child_process');
try {
    execSync('node -c corvo.js', { encoding: 'utf8', stdio: 'pipe' });
    console.log("No syntax error");
} catch (e) {
    console.log(e.stderr.substring(0, 1000));
}
