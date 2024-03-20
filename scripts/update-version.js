import fs from 'fs';
import plist from 'plist';
import { argv } from 'process';

// Extract version argument
const newVersion = argv[2];

if (!newVersion) {
    console.error('No version provided');
    process.exit(1);
}

// Update package.json
const packageJsonPath = './package.json';
const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));
packageJson.version = newVersion;
fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2) + '\n');

// Update iOS version (CURRENT_PROJECT_VERSION in project.pbxproj)
const iosPbxprojPath = './ios/App/App.xcodeproj/project.pbxproj';
let iosPbxproj = fs.readFileSync(iosPbxprojPath, 'utf8');
iosPbxproj = iosPbxproj.replace(/CURRENT_PROJECT_VERSION = \d+\.\d+\.\d+;/g, `CURRENT_PROJECT_VERSION = ${newVersion};`);
fs.writeFileSync(iosPbxprojPath, iosPbxproj);

// Update Android version
const androidBuildGradlePath = './android/app/build.gradle';
let androidBuildGradle = fs.readFileSync(androidBuildGradlePath, 'utf8');
androidBuildGradle = androidBuildGradle.replace(/versionName ".*"/, `versionName "${newVersion}"`);
fs.writeFileSync(androidBuildGradlePath, androidBuildGradle);

console.log(`Version updated to ${newVersion}`);
process.exit(0);