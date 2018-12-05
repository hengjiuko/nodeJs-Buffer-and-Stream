//Buffer随着nodeJs一起安装的，所以可以直接使用
//不需要require引入

//console.log( Buffer );


//字符串之间的转换
var _buf = Buffer.from( "xxx123","ascii" );

console.log( _buf );

//默认是utf-8格式
console.log( _buf.toString() );

console.log( _buf.toString( "base64" ) );
//转换为十六进制格式
console.log( _buf.toString( "hex" ) );