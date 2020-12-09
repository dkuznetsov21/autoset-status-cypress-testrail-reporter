# TestRail Reporter for Cypress

[![version](https://img.shields.io/npm/v/cypress-testrail-reporter.svg)](https://www.npmjs.com/package/cypress-testrail-reporter)
[![downloads](https://img.shields.io/npm/dt/cypress-testrail-reporter.svg)](https://www.npmjs.com/package/cypress-testrail-reporter)
[![MIT License](https://img.shields.io/github/license/Vivify-Ideas/cypress-testrail-reporter.svg)](https://github.com/Vivify-Ideas/cypress-testrail-reporter/blob/master/LICENSE.md)

Publishes [Cypress](https://www.cypress.io/) runs on TestRail.

Cloned from the original package [cypress-testrail-reporter](https://github.com/Vivify-Ideas/cypress-testrail-reporter) by [Milutin Savovic](https://github.com/mickosav)

The original package by Milutin is awesome!

Allows for options to create a new test run on **cypress run** or if you want the option to create one manually.


## Install

```shell
$ npm install salty-cypress-testrail-reporter --save-dev
```

## Usage

Add reporter to your `cypress.json`:

```json
...
{
  "reporter": "salty-cypress-testrail-reporter",
  "reporterOptions": {
    "domain": "yourdomain.testrail.com",
    "username": "username",
    "password": "password",
    "projectId": idNumber,
    "suiteId": suiteNumber,
    "createTestRun": "boolean",
    "runId": testRunNumber,
    "runName": "Test Run Name"
  }
}
```

Your Cypress tests should include the ID of your TestRail test case. Make sure your test case IDs are distinct from your test titles:

```Javascript
// Good:
it("C123 C124 Can authenticate a valid user", ...
it("Can authenticate a valid user C321", ...

// Bad:
it("C123Can authenticate a valid user", ...
it("Can authenticate a valid userC123", ...
```

## Reporter Options

**domain**: _string_ domain name of your TestRail instance (e.g. for a hosted instance _instance.testrail.com_).

**username**: _string_ email of the user under which the test run will be created.

**password**: _string_ password or the API key for the aforementioned user.

**projectId**: _number_ project with which the tests are associated.

**suiteId**: _number_ suite with which the tests are associated.

**createTestRun**: _boolean_ **true** if you want a test run created for you : **false** if you want to manually create your own test run on TestRail.  If you select **false**, you have to pass a value into the runID property.

**runId**: _number_ (optional: only necessary if createTestRun is set to true) a specific test run id number.

**runName**: _string_ (optional) name of the Testrail run.

# Functionality Update 01/04/2019
We were having issues where we wanted to run a test run once a day using multiple spec files.  However, when `createTestRun: true`, the testrail reporter would create a testrun for each spec file which is not what we wanted.

I included some logic for when `createTestRun: true` that checks the most recently created test run in Testrail with the current date you are running your test.

The testrail reporter will create a single testrun for the day and push all results to that newly created testrun.

## TestRail Settings

To increase security, the TestRail team suggests using an API key instead of a password. You can see how to generate an API key [here](http://docs.gurock.com/testrail-api2/accessing#username_and_api_key).

If you maintain your own TestRail instance on your own server, it is recommended to [enable HTTPS for your TestRail installation](http://docs.gurock.com/testrail-admin/admin-securing#using_https).

For TestRail hosted accounts maintained by [Gurock](http://www.gurock.com/), all accounts will automatically use HTTPS.

You can read the whole TestRail documentation [here](http://docs.gurock.com/).

## Author

Author: Spencer Kekauoha - [github](https://github.com/skekauoha)

## License

This project is licensed under the [MIT license](/LICENSE.md).

## Acknowledgments

* [Milutin Savovic](https://github.com/mickosav), author of the [cypress-testrail-reporter](https://github.com/Vivify-Ideas/cypress-testrail-reporter) repository that was cloned.
* [Pierre Awaragi](https://github.com/awaragi), owner of the [mocha-testrail-reporter](https://github.com/awaragi/mocha-testrail-reporter) repository that was forked.
* [Valerie Thoma](https://github.com/ValerieThoma) and [Aileen Santos](https://github.com/asantos3026) for proofreading the README.md file and making it more understandable.