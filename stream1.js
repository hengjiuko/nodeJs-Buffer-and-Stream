var fs = require( "fs" );
//console.log( fs );

//读出来东西放这
var _data="";

//创建一个可读流
var _readStream = fs.createReadStream( "a.txt" );

//设置编码
_readStream.setEncoding( "utf-8" );

_readStream.on( "data",function( _n ){
    _data += _n;
} )

//数据都读完了
_readStream.on( "end",function(){
    console.log( _data );
} )

console.log( "都读完了" );