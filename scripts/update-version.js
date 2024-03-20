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

// Update iOS version - Adjusted for CURRENT_PROJECT_VERSION
const iosPlistPath = './ios/App/App.xcodeproj/project.pbxproj';
const iosPlistData = fs.readFileSync(iosPlistPath, 'utf8');
const iosPlistObj = plist.parse(iosPlistData);

Object.keys(iosPlistObj.objects).forEach(key => {
    const obj = iosPlistObj.objects[key];
    if (obj.buildSettings && obj.buildSettings.CURRENT_PROJECT_VERSION) {
        iosPlistObj.objects[key].buildSettings.CURRENT_PROJECT_VERSION = newVersion;
    }
});

fs.writeFileSync(iosPlistPath, plist.build(iosPlistObj));

// Update Android version
const androidBuildGradlePath = './android/app/build.gradle';
let androidBuildGradle = fs.readFileSync(androidBuildGradlePath, 'utf8');
androidBuildGradle = androidBuildGradle.replace(/versionName ".*"/, `versionName "${newVersion}"`);
fs.writeFileSync(androidBuildGradlePath, androidBuildGradle);

console.log(`Version updated to ${newVersion}`);
process.exit(0);