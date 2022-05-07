const core = require('@actions/core');
const github = require('@actions/github');
const http = require('https'); // or 'https' for https:// URLs
const fs = require('fs');
const path = require("path");
const tar = require('tar-fs');
const zlib = require('zlib');

confLoom = core.getInput("loom")
loom = confLoom ? confLoom : "19-loom+6-625"
const file = fs.createWriteStream("openjdk-19.tar.gz");
let downloadFile = "https://download.java.net/java/early_access/loom/6/openjdk-" + loom + "_linux-x64_bin.tar.gz";
console.log("Downloading file at " + downloadFile + ".")
http.get(downloadFile, function (response) {
    response.pipe(file);
    file.on("finish", () => {
        file.close();
        console.log("Download Completed");
        fs.createReadStream("openjdk-19.tar.gz")
            .pipe(zlib.createGunzip())
            .pipe(tar.extract("loom-jdk"))
            .on("finish", () => {
                console.log("Unzipped JDK Loom");
                let loomJdkJdk19 = "loom-jdk/jdk-19";
                const absolutePath = path.resolve(loomJdkJdk19);
                console.log("Setting:")
                console.log("JAVA_HOME=" + absolutePath)
                core.exportVariable('JAVA_HOME', absolutePath);
                let newPath = absolutePath + "/bin:" + process.env.PATH;
                console.log("PATH=" + newPath)
                core.exportVariable('PATH', newPath);
            });
    });
});
