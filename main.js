#! /usr/bin/env node

const cmd = require("commander");
const chalk = require('chalk');
const downGit = require('./src/download');
const options = require('./src/options');
const  fs = require('fs');
const symbol =require('log-symbols');


cmd.command('init').description('初始化模板').action(async (args) => {
    let type;
    if(typeof args !== 'string'){
        console.log(chalk.red('缺少必填参数'));
        process.exit(1);
    }
    // 文件是否存在
    let isExist = async(args) => {
        return new Promise((resolve) => {
            if(fs.existsSync(args)) {
                console.log(symbol.error, chalk.red('文件夹名已被占用，请更换名字重新创建'))
            }else{
                resolve();
            }
        });
    };
    console.log(chalk.yellow('vue脚手架初始化模板：1、API层封装 2、axios封装 3、简易MockServer安装 \n'));
    console.log(chalk.yellow('react脚手架初始化模板：1、API层封装 2、axios封装 3、简易MockServer安装 4、ant-design4.0 \n'));
    // 填选项
    await options().then(res=>{
        type= res.type;

    });
    // 拉取文件
    await downGit(args,type);

});
cmd.parse(process.argv) ;