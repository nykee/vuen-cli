#! /usr/bin/env node

const cmd = require("commander");
const chalk = require('chalk');
const downGit = require('./src/download');
const options = require('./src/options');


cmd.command('init').description('初始化模板').action(async (args) => {
    typeof args !== 'string' && (console.log(chalk.red('缺少必填参数')), process.exit(1));
    console.log(chalk.yellow('脚手架初始化模板：1、API层封装 2、axios封装 3、简易MockServer安装 \n'));
    // 填选项
    await options()
    // 拉取
    await downGit(args)
})
cmd.parse(process.argv) 