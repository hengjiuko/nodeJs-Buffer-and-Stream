var fs = require( "fs" );
// console.log( fs );

//要写入的数据
var data = "今天星期四，这是一个写入流的文件";

//创建一个写入流
var _writeSream = fs.createWriteStream( "b.txt" );

//设置编码
_writeSream.write( data,"utf-8" );

//标记文件结尾
_writeSream.end();

//所以数据写触发了
 _writeSream.on( "finish",function(){
     console.log( "都写完了" );
 } )

console.log( "js执行完毕" );
