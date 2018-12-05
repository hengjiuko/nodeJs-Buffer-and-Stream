var fs = require( "fs" );
//console.log( fs );

//创建一个可读流
var _readStream = fs.createReadStream( "a.txt" );

//创建一个可写流
var _writeSream = fs.createWriteStream( "c.txt" );

//管导流读写操作
_readStream.pipe( _writeSream );

console.log( "执行完毕" );
