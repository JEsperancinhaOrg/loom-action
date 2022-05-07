const core = require('@actions/core');
const github = require('@actions/github');
const http = require('https'); // or 'https' for https:// URLs
const fs = require('fs');
const tar = require('tar-fs');
const zlib = require('zlib');

loom = "19-loom+6-625"
const file = fs.createWriteStream("openjdk-19.tar.gz");
const request = http.get("https://download.java.net/java/early_access/loom/6/openjdk-" + loom + "_linux-x64_bin.tar.gz", function (response) {
    response.pipe(file);
    file.on("finish", () => {
        file.close();
        console.log("Download Completed");
        fs.createReadStream("openjdk-19.tar.gz")
            .pipe(zlib.createGunzip())
            .pipe(tar.extract("loom-jdk"))
            .on("finish", () => {
                console.log("Unzipped JDK Loom");
            });
    });
});

try {
    // `who-to-greet` input defined in action metadata file
    const nameToGreet = core.getInput('who-to-greet');
    console.log(`Hello ${nameToGreet}!`);
    const time = (new Date()).toTimeString();
    core.setOutput("time", time);
    // Get the JSON webhook payload for the event that triggered the workflow
    const payload = JSON.stringify(github.context.payload, undefined, 2)
    console.log(`The event payload: ${payload}`);
} catch (error) {
    core.setFailed(error.message);
}