var _buf = Buffer.from( [0x1,0x2,0x3,0x4,0x5] );

console.log( _buf );//二进制数据

console.log( _buf.toString() );//乱码

//把二进制数据转换为JSON字符串
var _json=JSON.stringify( _buf );

console.log( _json );
console.log( typeof _json );