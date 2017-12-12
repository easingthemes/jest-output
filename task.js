const { spawn } = require('child_process');
const jestNpm = spawn('npm', ['test']);

jestNpm.stdout.on('data', (data) => {
  console.log(`stdout: ${data}`);
});

jestNpm.stderr.on('data', (data) => {
  console.log(`stderr: ${data}`);
});
