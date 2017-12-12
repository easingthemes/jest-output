**Do you want to request a _feature_ or report a _bug_?**

bug

**What is the current behavior?**

jest output is using `stderr`.

**If the current behavior is a bug, please provide the steps to reproduce and
either a repl.it demo through https://repl.it/languages/jest or a minimal
repository on GitHub that we can `yarn install` and `yarn test`.**

This repo (https://github.com/easingthemes/jest-output) has `task.js` file which uses `nodejs spawn` to run `npm test` (`jest`) and print output by type.


command:

```
node ./task.js
```

Output:

```
> jest

stderr: PASS ./add.test.js
stderr:   add
stderr:     ✓ should add two numbers (3ms)
stderr:

stderr: Test Suites: 1 passed, 1 total
Tests:       1 passed, 1 total
Snapshots:   0 total
Time:        0.582s, estimated 1s
Ran all test suites.
```


**What is the expected behavior?**

Not using `stderr` for output, use `stdout` instead.

**Please provide your exact Jest configuration and mention your Jest, node,
yarn/npm version and operating system.**

```
node: v8.1.2
npm: 5.0.3
jest: ^21.2.1
MacOS 10.12.6
```

