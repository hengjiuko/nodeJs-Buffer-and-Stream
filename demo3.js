//1.创建缓存区，要适合你将要写入内容的大小
var _buf = Buffer.alloc( 30 );

//2 .write(),写入
var length = _buf.write( "今天星期四" );

//直接输出写入内容，没有转换格式
console.log( _buf );

//打印出写入的长度
console.log( length );

//打印出uft-8格式
console.log( _buf.toString() );