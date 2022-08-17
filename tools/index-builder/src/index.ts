import _ from 'the-lodash';
import * as Path from 'path';
import { existsSync, readFileSync, writeFileSync } from 'fs';
import { GlobSync } from 'glob';
import { parse as parseYaml } from 'yaml';

import { RuleIndex, RuleBundle } from './library-types';

console.log(">>>> Kubevious Rules Library Index Builder <<<<");

const rootDir = Path.resolve('..', '..');
console.log('ROOT DIR: ', rootDir);

const libraryDir = Path.resolve(rootDir, 'library');
console.log('LIBRARY DIR: ', libraryDir);

const libraryIndexPath = Path.resolve(libraryDir, 'index.json');
console.log('LIBRARY INDEX PATH: ', libraryIndexPath);


interface RuleMetadata {
    name: string;
    description: string;
}

interface ExtractedRule
{
    id: string;
    dir: string;
    metadataPath: string;
    targetScriptPath: string;
    ruleScriptPath: string;
    readmePath: string;
    metadata: RuleMetadata;
    bundlePath: string;
}

function extractRules()
{
    const x = new GlobSync(`${libraryDir}/**/metadata.yaml`);
    // console.log(x);

    const rules: ExtractedRule [] = [];

    for(const metadataPath of x.found)
    {
        const ruleDir = Path.dirname(metadataPath);

        const metadataContents = readFileSync(metadataPath);
        const metadata = parseYaml(metadataContents.toString('utf8'));

        const ruleInfo : ExtractedRule = {
            id: ruleDir.substring(libraryDir.length + 1),
            dir: ruleDir,
            metadataPath: metadataPath,
            targetScriptPath: Path.join(ruleDir, 'target.js'),
            ruleScriptPath: Path.join(ruleDir, 'rule.js'),
            readmePath: Path.join(ruleDir, 'README.md'),
            metadata: metadata as RuleMetadata,
            bundlePath: Path.join(ruleDir, '_bundle.json'),
        }

        if (existsSync(ruleInfo.metadataPath) &&
            existsSync(ruleInfo.targetScriptPath) &&
            existsSync(ruleInfo.ruleScriptPath))
        {
            rules.push(ruleInfo);
        }
        else
        {
            console.log("ERROR: Missing files in: ", ruleDir);
        }
    }

    return _.orderBy(rules, x => x.id);
}

const myRules = extractRules();
console.log(myRules);

function buildIndex(rules : ExtractedRule[])
{
    console.log(">>> BUILD INDEX");

    const rulesIndex : RuleIndex[] = [];
    for(const rule of rules)
    {
        rulesIndex.push({
            id: rule.id,
            name: rule.metadata.name,
            description: rule.metadata.description,
            bundleUrl: `https://raw.githubusercontent.com/kubevious/rules-library/master/library/${rule.id}/_bundle.json`
        })
    }
    
    console.log(rulesIndex);

    writeFileSync(libraryIndexPath, JSON.stringify(rulesIndex, null, 4));
}

buildIndex(myRules);

function buildBundle(rule : ExtractedRule)
{
    const bundle : RuleBundle = {
        id: rule.id,
        name: rule.metadata.name,
        description: rule.metadata.description,
        targetScript: readFileSync(rule.targetScriptPath).toString('utf8'),
        ruleScript: readFileSync(rule.ruleScriptPath).toString('utf8')
    }

    writeFileSync(rule.bundlePath, JSON.stringify(bundle, null, 4));
}

function buildBundles(rules : ExtractedRule[])
{
    console.log(">>> BUILD Bundles");
    for(const rule of rules)
    {
        buildBundle(rule);
    }
}
buildBundles(myRules);



function buildReadme(rule : ExtractedRule)
{
    let readme : string  = '';
    readme += `# ${rule.metadata.name}\n`;
    readme += `**ID:** ${rule.id}\n\n`;
    readme += `**Description:** ${rule.metadata.description}\n\n`;

    readme += `## Target Script\n`;
    readme += `\`\`\`js\n`;
    readme += readFileSync(rule.targetScriptPath).toString('utf8');
    readme += `\n\`\`\`\n`;


    readme += `## Rule Script\n`;
    readme += `\`\`\`js\n`;
    readme += readFileSync(rule.ruleScriptPath).toString('utf8');
    readme += `\n\`\`\`\n`;

    writeFileSync(rule.readmePath, readme);
}

function buildReadmes(rules : ExtractedRule[])
{
    console.log(">>> BUILD README.MD");
    for(const rule of rules)
    {
        buildReadme(rule);
    }
}
buildReadmes(myRules);
