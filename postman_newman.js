const { exec } = require('child_process');

// Set environment variables
process.env.TESTRAIL_DOMAIN = 'youraccount.testrail.io';
process.env.TESTRAIL_USERNAME = 'username@test.com';
process.env.TESTRAIL_APIKEY = 'setup_in_testrail';
process.env.TESTRAIL_PROJECTID = '1';
process.env.TESTRAIL_RUNID = '123'; // Optional
process.env.TESTRAIL_SUITEID = '3'; // Optional
//process.env.TESTRAIL_TITLE = 'Postman Regression'; // Optional Title for a  new Run

/********REFERENCES************
Newman
https://github.com/postmanlabs/newman?tab=readme-ov-file#newman-options

Newman Test Rail
https://www.npmjs.com/package/newman-reporter-testrail

Newman html Extra
https://www.npmjs.com/package/newman-reporter-htmlextra
******************************/


// Run Newman with TestRail reporter and send results to a Test Run.
exec('newman run "postman_collection.json" -e "postman_environment.json" -r cli,testrail --insecure > output.log', (error, stdout, stderr) => {

//Run Newman with html reporter for html report
//exec('newman run "postman_collection.json" -e "postman_environment.json" -r htmlextra --reporter-htmlextra-export report.html --insecure', (error, stdout, stderr) => {

    console.log(`Stdout: ${stdout}`);
});
