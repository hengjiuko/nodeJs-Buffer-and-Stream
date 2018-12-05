//引入文件模块
var fs = require( "fs" );
//console.log( fs );

//同步读取文件,将读取的结果保存在变量中
var _data = fs.readFileSync( "input.txt" );

//默认以uft-8形式输出
//console.log( _data.toString() );

//直接把内存中的东西输出
console.log( _data );

console.log( "--------同步读取文件完成" );
