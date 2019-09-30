import invoice from "./data/invoices"
import plays from "./data/plays"
import statement from "./code/statement"

let result = statement(invoice, plays);


/*创建一个完整的div并添加id属性*/
var divE = document.createElement('div'); //创建div
/*创建一个完整p标签并添加class属性*/
var pE = document.createElement('p');
/*创建一个文本*/
var pText = document.createTextNode("我是文本");
/*将文本添加p标签中*/
pE.appendChild(pText);
/*将p标签添加到div中*/
divE.appendChild(pE);

console.log(result);
