"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var the_lodash_1 = __importDefault(require("the-lodash"));
var Path = __importStar(require("path"));
var fs_1 = require("fs");
var glob_1 = require("glob");
var yaml_1 = require("yaml");
console.log(">>>> Kubevious Rules Library Index Builder <<<<");
var rootDir = Path.resolve('..', '..');
console.log('ROOT DIR: ', rootDir);
var libraryDir = Path.resolve(rootDir, 'library');
console.log('LIBRARY DIR: ', libraryDir);
var libraryIndexPath = Path.resolve(libraryDir, 'index.json');
console.log('LIBRARY INDEX PATH: ', libraryIndexPath);
function extractRules() {
    var x = new glob_1.GlobSync("".concat(libraryDir, "/**/metadata.yaml"));
    // console.log(x);
    var rules = [];
    for (var _i = 0, _a = x.found; _i < _a.length; _i++) {
        var metadataPath = _a[_i];
        var ruleDir = Path.dirname(metadataPath);
        var metadataContents = (0, fs_1.readFileSync)(metadataPath);
        var metadata = (0, yaml_1.parse)(metadataContents.toString('utf8'));
        var ruleInfo = {
            id: ruleDir.substring(libraryDir.length + 1),
            dir: ruleDir,
            metadataPath: metadataPath,
            targetScriptPath: Path.join(ruleDir, 'target.js'),
            ruleScriptPath: Path.join(ruleDir, 'rule.js'),
            readmePath: Path.join(ruleDir, 'README.md'),
            metadata: metadata,
            bundlePath: Path.join(ruleDir, '_bundle.json'),
        };
        if ((0, fs_1.existsSync)(ruleInfo.metadataPath) &&
            (0, fs_1.existsSync)(ruleInfo.targetScriptPath) &&
            (0, fs_1.existsSync)(ruleInfo.ruleScriptPath)) {
            rules.push(ruleInfo);
        }
        else {
            console.log("ERROR: Missing files in: ", ruleDir);
        }
    }
    return the_lodash_1.default.orderBy(rules, function (x) { return x.id; });
}
var myRules = extractRules();
console.log(myRules);
function buildIndex(rules) {
    console.log(">>> BUILD INDEX");
    var rulesIndex = [];
    for (var _i = 0, rules_1 = rules; _i < rules_1.length; _i++) {
        var rule = rules_1[_i];
        rulesIndex.push({
            id: rule.id,
            name: rule.metadata.name,
            description: rule.metadata.description,
            bundleUrl: "https://raw.githubusercontent.com/kubevious/rules-library/master/library/".concat(rule.id, "/_bundle.json.")
        });
    }
    console.log(rulesIndex);
    (0, fs_1.writeFileSync)(libraryIndexPath, JSON.stringify(rulesIndex, null, 4));
}
buildIndex(myRules);
function buildBundle(rule) {
    var bundle = {
        id: rule.id,
        name: rule.metadata.name,
        description: rule.metadata.description,
        targetScript: (0, fs_1.readFileSync)(rule.targetScriptPath).toString('utf8'),
        ruleScript: (0, fs_1.readFileSync)(rule.ruleScriptPath).toString('utf8')
    };
    (0, fs_1.writeFileSync)(rule.bundlePath, JSON.stringify(bundle, null, 4));
}
function buildBundles(rules) {
    console.log(">>> BUILD Bundles");
    for (var _i = 0, rules_2 = rules; _i < rules_2.length; _i++) {
        var rule = rules_2[_i];
        buildBundle(rule);
    }
}
buildBundles(myRules);
//# sourceMappingURL=index.js.map