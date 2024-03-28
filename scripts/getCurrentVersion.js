import fs from 'fs';
// import plist from 'plist'; // Uncomment if needed for iOS version reading

// Function to log inconsistency
function logInconsistency(file1, version1, file2, version2) {
    console.error(`Inconsistency found: ${file1} version (${version1}) does not match ${file2} version (${version2})`);
}

// Get package.json version
const packageJsonPath = './package.json';
const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));
const packageVersion = packageJson.version;
console.log(`Current version in package.json: ${packageVersion}`);

// Initialize version consistency check
let isConsistent = true;

// Get iOS version (CURRENT_PROJECT_VERSION from project.pbxproj)
// Uncomment below lines if iOS version reading is needed
/*
const iosPbxprojPath = './ios/App/App.xcodeproj/project.pbxproj';
let iosPbxproj = fs.readFileSync(iosPbxprojPath, 'utf8');
const iosVersionMatch = iosPbxproj.match(/CURRENT_PROJECT_VERSION = (\d+\.\d+\.\d+);/);
if (iosVersionMatch) {
    const iosVersion = iosVersionMatch[1];
    console.log(`Current iOS version: ${iosVersion}`);
    if (iosVersion !== packageVersion) {
        logInconsistency('package.json', packageVersion, 'iOS project', iosVersion);
        isConsistent = false;
    }
}
*/

// Get Android version
const androidBuildGradlePath = './android/app/build.gradle';
let androidBuildGradle = fs.readFileSync(androidBuildGradlePath, 'utf8');
const androidVersionMatch = androidBuildGradle.match(/versionName "([^"]*)"/);
if (androidVersionMatch) {
    const androidVersion = androidVersionMatch[1];
    console.log(`Current Android version: ${androidVersion}`);
    if (androidVersion !== packageVersion) {
        logInconsistency('package.json', packageVersion, 'Android build.gradle', androidVersion);
        isConsistent = false;
    }
}

if (isConsistent) {
    console.log('All versions are consistent.');
} else {
    console.error('Version inconsistency detected.');
    process.exit(1);
}
