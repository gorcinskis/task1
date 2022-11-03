# Project set up. Test layers

```text
In this section we will get the basic understanding about the testing layers.
We will see in practise the main difference between the unit and integration tests.
```
#### Step 1: check the project sctructure

Check the project structure and the set up:
- package.json file with dependencies
- app.cjs server
- index.html UI structure
- style.css
- js folder with files
- .gitignore file

#### Step 2: build the project locally

First of all you need to open the terminal and navigate to the project root.
**Once the path is correct, run the `yarn` command in order to set up all project dependencies**
After the installation, the project has to be started to start the local testing
**Run command `node app.cjs` to build the project locally**
Expected: in the terminal there will be the link to a localhost `Server running at http://localhost:8080`. Click on it if the window didn't appear automatically

This is how the local testing works. Play around the functionality

#### Step 3: check the jest installation and run tests

Check your "./package.json" file. As a dependencie you're supposed to see Cucumber:

```json
  "devDependencies": {
    "jest": "^25.5.4",
  }
```


Run the command 'yarn jest'
Expected: jest will say, that there are no tests, because it is true. So far we didn't add any tests

```text
No tests found, exiting with code 1
Run with `--passWithNoTests` to exit with code 0
In /Users/rainerssledevskis/WorkSpace/Evo/TA_Bootcamp/Evolution_Test_Layers_Bootcamp_Task_TypeScript
  6 files checked.
  testMatch: **/__tests__/**/*.[jt]s?(x), **/?(*.)+(spec|test).[tj]s?(x) - 0 matches
  testPathIgnorePatterns: /node_modules/ - 6 matches
  testRegex:  - 0 matches
Pattern:  - 0 matches
error Command failed with exit code 1.
info Visit https://yarnpkg.com/en/docs/cli/run for documentation about this command.
```
The next step is to update our "./package.json" file to create a command, which will start executing jest tests

Add this scripts section into your json file

```json
  "scripts": {
    "test": "jest"
  }
```
Run the command 'yarn jest' and make sure it outputs the same information as before. 

#### Step 4: Create tests

- Create a separate package with the name 'tests''
- Inside this package create a 'utils.test.js' file
- Write the first unit test

```javascript
import { generateText } from '../js/utils';

test('should output name and age', () => {
    const text = generateText('Rainer', 27);
    expect(text).toBe('Rainer (27 years old)');
});
```
Run 'yarn test' to check the result
Add the integration tests

```javascript
import { checkAndGenerate } from '../js/utils';

test('should generate a valid text output', () => {
    const text = checkAndGenerate('name surname', 30);
    expect(text).toBe('name surname (30 years old)');
})
```

## Submitting your solution

Please push your changes to the `main branch` of this repository. You can push one or more commits. <br>

Once you are finished with the task, please click the `Submit Solution` link on <a href="https://app.codescreen.com/candidate/7c6a6301-ba58-4dcd-8007-5dc039b9846b" target="_blank">this screen</a>.