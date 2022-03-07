const readlinesync= require('readline-sync');
const response= readlinesync.question('Enter 1 for Encoding or Decoding Url \nEnter 2 for Base 64 Encoding or Decoding \nEnter 3 for String hashing \nEnter 4 for Epoch Converter \nEnter 5 for Binary, hex, decimal,Octal Converters \nEnter 6 for Rgb<-> Hex Converters \nEnter 7 for Unit Converters\nEnter Your Choice.');
const r = parseInt(response, 10);
switch (r) {
  case 1: encode_decode();
    break;
  case 2: base64();
    break;
  case 3: hashing();
    break;
  case 4: epoch_converter();
    break;
  case 5: Binary_Hex_decimal_octal_converter();
    break;
  case 6: Rgb_Hex_Converter();
    break;
  case 7: unit_Converter();
    break;
  default: console.log("Wrong Choice")
    break
}
function encode_decode(){
  let res=readlinesync.question("Enter 1 for Encoding \nEnter 2 for decoding");
  switch(res){
    case '1': 
      let encode= readlinesync.question("enter url to be encoded \n")
      let encoded= encodeURIComponent(encode);
      console.log(encoded);
      break;
    case '2':
      let decode= readlinesync.question("enter url to be decoded \n")
      let decoded= decodeURIComponent(decode);
      console.log(decoded);
      break;
    default: console.log("Wrong Choice!!!!!")
  }
}
function base64(){
    let res=readlinesync.question("Enter 1 for base 64 encoding \nEnter 2 for base 64 decoding\n");
  switch(res){
    case '1': 
     const base64encode= readlinesync.question('Enter value that needs to be base 64 encoded\n');
     const encode64= Buffer.from("workat.tech").toString('base64');
     console.log(`Base 64 Encoded String is ${encode64}`);
     break;
    case '2':
     const base64decode= readlinesync.question('Enter value that needs to be decoded\n')
     const decode64= Buffer.from(base64decode, 'base64').toString('ascii');
     console.log(`Base 64 Decoded String is ${decode64}`);
     break;
    default: console.log("Wrong Choice");
  }
}
function hashing(){
  let res= readlinesync.question('Enter 1 for String hashing with md5 algo \nEnter 2 for String hashing with sha-1 algo \nEnter 3 for String hashing with sha-256 algo \nEnter 4 for String hashing with sha-512 algo \n')
  let algo;
  switch(res){
    case '1': 
     algo= 'md5'
     break;
    case '2':
     algo= 'sha-1'
     break;
    case '3':
     algo= 'sha-256'
    case '4':
     algo= 'sha-512'
    default:
     algo= -1
  }
  if (algo===-1){
    console.log("Wrong Choice!!!!")
  }
  else{
    const crypto = require('crypto');
    const stringhashing= readlinesync.question('Enter value\n');
    const hash= crypto.createHash(algo).update(stringhashing).digest('hex');
    console.log(hash);
  }
}
function epoch_converter(){
  let res= readlinesync.question('Enter 1 for converting epoch to humandate\n Enter 2 for converting humandate to epoch \n')
  switch (res){
    case '1':
      const mydate= new Date(epochvalue*1000);
      console.log(`year: ${mydate.getFullYear()} month: ${mydate.getMonth()+1} Date: ${mydate.getDate()} Hours : ${mydate.getHours()} minutes: ${mydate.getMinutes()} seconds:${mydate.getSeconds()}\n`);
      break;
    case '2':
      let year= readLineSync.question("\nEnter the value of year:\n");
      let month= readLineSync.question("\nEnter the value of month:\n");
      let day= readLineSync.question("\nEnter the value of day:\n");
      let hours= readLineSync.question("\nEnter the value of hours:\n");
      let min= readLineSync.question("\nEnter the value of min:\n");
      let seconds= readLineSync.question("\nEnter the value of seconds:\n");
      let millisec= readLineSync.question("\nEnter the value of milliseconds:\n");
      year=parseInt(year);
      month=parseInt(month);
      day=parseInt(day);
      hours=parseInt(hours);
      min=parseInt(min);
      seconds=parseInt(seconds);
      millisec=parseInt(millisec);

      var myDate=new 
      Date(year,month,day,hours,min,seconds,millisec);

      var myEpoch=myDate.getTime()/1000.0;
      console.log(myEpoch);
    default: console.log('Wrong Choice');
  }
}
function Binary_Hex_decimal_octal_converter(){
  let res= readlinesync.question('enter 1 for converting value to binary\nEnter 2 for converting value to Hexadecimal \nEnter 3 for converting value to octal \nEnter 4 for converting value to decimal\n')
  switch (res){
    case '1': 
      tobinaryconverter();
      break;
    case '2':
      to_hex_converter();
      break;
    case '3':
      to_octal_converter();
      break;
    case '4':
      to_decimal_converter();
      break;
    default:
      console.log("Wrong Choice");
      break;
      
  }
}

function tobinaryconverter(){
  let option= readlinesync.question('Enter 1 for converting Hexadecimal to binary\nEnter 2 for converting decimal to binary \nEnter 3 for converting Octal to Binary\n');
  let value, ans;
  switch(option)
    {
    case '1': 
        value= readlinesync.question("enter value");
        ans = parseInt(value, 16).toString(2);
        console.log(`value is ${ans}`)
        break;
    case '2':
        value= readlinesync.question("enter value");
        ans = parseInt(value, 10).toString(2);
        console.log(`value is ${ans}`)
    case '3':
        value= readlinesync.question("enter value");
        ans = parseInt(value,8).toString(2);
        console.log(`value is ${ans}`)
    default: console.log("Wrong Answer");
    }
}
function  to_hex_converter(){
  let option= readlinesync.question('Enter 1 for converting from binary\nEnter 2 for converting from decimal \nEnter 3 for converting from octal\n');
  let value,ans;
  switch(option)
    {
    case '1': 
        value= readlinesync.question("enter value");
        ans = parseInt(value,2).toString(16).toUpperCase();
        console.log(`value is ${ans}`)
        break;
    case '2':
        value= readlinesync.question("enter value");
        ans = parseInt(value,10).toString(16).toUpperCase();
        console.log(`value is ${ans}`)
    case '3':
        value= readlinesync.question("enter value");
        ans = parseInt(value,8).toString(16).toUpperCase();
        console.log(`value is ${ans}`)
    default: console.log("Wrong Answer");
    }
}
function to_octal_converter()
{
  let option= readlinesync.question('Enter 1 for converting from binary\nEnter 2 for converting from decimal \nEnter 3 for converting from Hexadecimal\n');
  let value, ans;
  switch(option)
    {
    case '1': 
        value= readlinesync.question("enter value");
        ans = parseInt(value,2).toString(8);
        console.log(`value is ${ans}`)
        break;
    case '2':
        value= readlinesync.question("enter value");
        ans = parseInt(value,10).toString(8);
        console.log(`value is ${ans}`)
    case '3':
        value= readlinesync.question("enter value");
        ans = parseInt(value,16).toString(8);
        console.log(`value is ${ans}`)
    default: console.log("Wrong Answer");
    }
}
function to_decimal_converter(){
  let option= readlinesync.question('Enter 1 for converting from binary\nEnter 2 for converting from decimal \nEnter 3 for converting from Hexadecimal\n');
  let value, ans;
  switch(option)
    {
    case '1': 
        value= readlinesync.question("enter value");
        ans = parseInt(value,2).toString(10);
        console.log(`value is ${ans}`)
        break;
    case '2':
        value= readlinesync.question("enter value");
        ans = parseInt(value,10).toString(10);
        console.log(`value is ${ans}`)
    case '3':
        value= readlinesync.question("enter value");
        ans = parseInt(value,16).toString(10);
        console.log(`value is ${ans}`)
    default: console.log("Wrong Answer");
    }
  
}
function Rgb_Hex_Converter(){
  let res= readlinesync.question('Enter 1 to convert rgb to Hex\nEnter 2 to convert Hex to rgb\n')
  switch(res){
    case '1': rgb_to_hex();
      break;
    case '2': hex_to_rgb();
      break;
    default: console.log("Wrong Choice");
      
  }
}
function ColorToHex(color) {
  var hexadecimal = parseInt(color,10).toString(16);
  return hexadecimal.length === 1 ? "0" + hexadecimal : hexadecimal;
}
function rgb_to_hex(){
  const red=readlinesync.question("enter red component\n");
  const blue=readlinesync.question("enter blue component\n");
  const green=readlinesync.question("enter green component\n");
  const hex= "#"+ ColorToHex(red)+ ColorToHex(blue)+ColorToHex(green);
  console.log(hex)
  }
function hex_to_rgb(){
  let hex= readlinesync.question("enter value\n")
  var red = parseInt(hex[1]+hex[2],16);
  var green = parseInt(hex[3]+hex[4],16);
  var blue = parseInt(hex[5]+hex[6],16);
console.log(red,green,blue);
}
function unit_Converter()
{
  let res=readlinesync.question('Enter 1 to convert metre to kilometre\n Enter 2 to convert kilometre to metre\n');
  let value;
  switch (res){
    case '1':  value= readlinesync.question("Enter Value");
               console.log(value/1000);
               break;
    case '2': value= readlinesync.question("Enter Value");
              console.log(value*1000);
              break;
    default: console.log("Wrong Choice")
  }
}


