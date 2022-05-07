"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = __importDefault(require("@actions/core"));
const https_1 = __importDefault(require("https"));
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const tar_fs_1 = __importDefault(require("tar-fs"));
const zlib_1 = __importDefault(require("zlib"));
const confLoom = core_1.default.getInput("loom");
const loom = confLoom ? confLoom : "19-loom+6-625";
const file = fs_1.default.createWriteStream("openjdk-19.tar.gz");
let downloadFile = "https://download.java.net/java/early_access/loom/6/openjdk-" + loom + "_linux-x64_bin.tar.gz";
console.log("Downloading file at " + downloadFile + ".");
https_1.default.get(downloadFile, function (response) {
    response.pipe(file);
    file.on("finish", () => {
        file.close();
        console.log("Download Completed");
        fs_1.default.createReadStream("openjdk-19.tar.gz")
            .pipe(zlib_1.default.createGunzip())
            .pipe(tar_fs_1.default.extract("loom-jdk"))
            .on("finish", () => {
            console.log("Unzipped JDK Loom");
            let loomJdkJdk19 = "loom-jdk/jdk-19";
            const absolutePath = path_1.default.resolve(loomJdkJdk19);
            console.log("Setting:");
            console.log("JAVA_HOME=" + absolutePath);
            core_1.default.exportVariable('JAVA_HOME', absolutePath);
            let newPath = absolutePath + "/bin:" + process.env.PATH;
            console.log("PATH=" + newPath);
            core_1.default.exportVariable('PATH', newPath);
        });
    });
});
