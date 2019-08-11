#!/usr/bin/env node
const { writeFileSync } = require("fs");
const { join } = require("path");
const packagePath = join(__dirname, "package.json");
const o = require(packagePath);
o.dependencies["apollo-client"] = process.argv[2];
writeFileSync(packagePath, JSON.stringify(o, null, 2));
