//JS tek satırlık yorumlama

/* multi line comment*/

//pop-up alert
//alert("Deneme")
//window.alert("deneme window");

//window ==> Hepsi 
// document ==> o sayfa ile calısmak anlamına gelir

//alert("pop-up")
// window.alert("window pop-up")
// console.log("asd")
// document.write("Deneme")

//Kullanıcıdan veri almak (javadaki scanner)
// var name = prompt("Lutfen adinizi giriniz")
// console.log(name)



// VARIABLE ==> JS de değişken isimleri $ ve _ haric özel bir karakterle veya sayı ile baslamaz
// var isim = "Beytullah"
// isim = "beytullah"
// isim = false
// isim = 55
// console.log(isim)

// var name = "beytullah"
// name55 = "b"
//55name = "b"  >>> Burası hata verir degisken isimleri harf ile baslayamaz
//-name = "b" >>> Burası hata verir degisken isimleri harf ile baslayamaz
// $name = "a" >>> Hata vermez degisken isimleri dolar işareti ile baslayabilir
// _name = "a" >>> Hata vermez degisken isimleri underscore ile baslayabilir

//Yaygın olarak camelCase isimlendirme tercih edilir
// console.log("_Asd")

//VARIABLE INITIALIZATION
// var x1; //UNDEFINIED
// console.log(x1)

//NON = Not A Number
// var x2 = 9/"abc"
// console.log(x2)

//INFINITY
// var x3 = 8/0
// console.log(x3)

//Operator
//logic operators       : &&=VE  ||=VEYA
//mathematics operators : + - / * %
//comparison operators: > >= < <= ! ==  ===
//postfix ==>  x++ == post increment , ++x == preincrement

//POSTFIX
//  var num = 5
// console.log(++num) ==> 6
// console.log(num++) == >5
// console.log(--num) ==> 4
// console.log(num--) ==> 5

// 1 byte = 8 bit
// bit < byte < GB < TB
// 1 bit =0
// Binary codes (2) ==> (0 1)
// octal (8)        ==> (01234567)
// decimal (10)     ==> (0123456789)
// hexadecimal (16) ==> (0123456789abcdef)

//new = Hafızada yer acmak
//null = hafızayı bosaltmak

// =   atama
// ==  eşit mi (ancak türüne bakma)  "5" 5 TRUE
// === eşit mi (türüne bak)          "5" 5 FALSE
// console.log(5=="5") --> TRUE
// console.log(5==="5") --> FALSE

// var result = "Samsun"
// console.log(typeof result) -->String

// var result = 55.38
// console.log(typeof result) -->Number

// var result = true
// console.log(typeof result) -->boolean

// var x1=9, x2=2, x3
// x3 = x1+x2
// console.log(x3)

// x3 = x1*x2
// console.log(x3)

// x3 = x1%x2
// console.log(x3)

//CAST = Dönüstürmektir. DB islemlerinde veriler stringtir. Bu yüzden yapmak istedigimiz işlemleri casting ile gerceklestiririz

//Bir seyi sayıya cevirmek --> Number()
//Bir seyi stringe cevirmek --> String()

// var x1 = Number(prompt("Lufen bir sayi giriniz"))
// console.log(x1**2)

//Math --> Static bir yapıdır
// document.write(Math.random())
// document.write(Math.min(5, 2, 13, -4))
// document.write(Math.max(3, 15, 99, -5, -7))
// document.write(Math.sqrt(16))
// document.write(Math.pow(6))
// document.write(Math.abs(-5))

//Yuvarlama
// document.write(Math.floor(5.9)) --> 5
// document.write(Math.ceil(5.1)) --> 6
// document.write(Math.round(5.4)) --> 5
// document.write(Math.round(5.5)) -- 6

//Kullanıcı tarafından aldıgımız 2 sayı üzerine islemler
// s1-) Bu sayılardan en kücügü nedir
// s2-) Bu sayılardan en büyügü nedir
// s3-) Bu sayılardan en kücügünün karekökö
// s4-) Bu sayılardan en kücügünün karekökünün üste yuvarlanması
// s5-) Bu sayılardan en büyügünün mutlagı
// s6-) Bu sayılardan en büyügü alt taban en kücügü üst taban seklinde üstünü alalım

// var num1 = Number(prompt("Lutfen 1. sayiyi giriniz"))
// var num2 = Number(prompt("Lutfen 2. sayiyi giriniz"))

// console.log(Math.min(num1,num2))
// console.log(Math.max(num1,num2))
// console.log(Math.sqrt(Math.min(num1,num2)))
// console.log(Math.ceil(Math.sqrt(Math.min(num1,num2))))
// console.log(Math.abs(Math.max(num1,num2)))
// console.log(Math.pow(Math.max(num1,num2), Math.min(num1,num2)))

// //Number
// var number=44;
// number=44.33;
// document.write(number+"<br>")

// var bilimsel=14E+5;
// bilimsel=14E-5;
// document.write(bilimsel+"<br>")

// 10 tabandan diger tabanlara cevirme
// var decimal = 10
// document.write(decimal.toString(2)+ "<br>")
// document.write(decimal.toString(8)+ "<br>")
// document.write(decimal.toString(16)+ "<br>")

// var castNumber = "14"
// document.write(castNumber+castNumber+"<br>") --> 1414
// document.write(Number(castNumber) + Number(castNumber)) --> 28

//NaN = Not a Number
// document.write("result: " + (16/"asd") + "<br>")

//isNan
// var number = 200/5
// document.write("result2: " + isNaN(number))
//isNaN = false -> bu bir sayıdır
//isNaN = true -> bu bir sayı degildir

//String
//Dikakt: length aç kapa parentez yoktur.
var kelime = "html5 css3 responsive Bootstrap JAVASCRIPT css3 ";
// document.write(kelime+"<br>")
// document.write("harf sayısı: "+kelime.length+"<br>")
// document.write("trimlenmiş harf sayısı: "+kelime.trim().length+"<br>") -->Trim = Bastaki ve sondaki boslukları siler

// document.write("hepsi küçük harf: "+kelime.toLowerCase()+"<br>")
// document.write("hepsi büyük harf: "+kelime.toUpperCase()+"<br>")

// document.write("startsWith: "+kelime.startsWith('h')+"<br>")
// document.write("endsWith: "+kelime.endsWith(' ')+"<br>")

// document.write("concat: " + kelime.concat("-sona eklendi")+"<br>")

// var degistirilmis = "Merhabalar"
// document.write("replace: "+kelime.replace(kelime, degistirilmis)+"<br>")

// document.write("substring: "+kelime.substring(6)+"<br>") --> 6.indexten itibaren sona kadar al
// document.write("substring: "+kelime.substring(0,5)+"<br>") --> 0-5 aralıgındaki karakterleri al

// document.write("charAt: " + kelime.charAt(1) + "<br>")

// document.write("indexOf: " + kelime.indexOf("css3") + "<br>")
// document.write("indexOf: " + kelime.lastIndexOf("css3") + "<br>")


// ############################################################################################################################
//ODEV

//CAST
//String()

//Kullanıcıdan alınan bir kelimenin
//s1) Kac karakterlidir
//s2) Bosluklar alınarak kac karakterlidir
//s3) Bütün kelimeyi kücük harflerle göstermek
//s4) Bütün kelimeyi büyük harflerle göstermek
//s5) Ilk harfiniz nedir
//s6) Girdiginiz kelime java ile baslıyor mu
//s7) Girdiginiz kelimenin sonuna "-ben js ogreniyorum"
//s8) Girdiginiz 0 ile 4 arasındaki indexi ekrana gösterin
//s9) Kullanıcıdan alınan başka bir kelimeyle birinci olan kelimeyle yer değiştirmek ?

var word = String(prompt("Please input a word"))

document.write("Kelime Sayisi " + word.length + "<br>")
document.write("Trim " + word.trim().length + "<br>")
document.write("Lowercase " + word.toLowerCase() + "<br>")
document.write("Uppercase " + word.toUpperCase() + "<br>")
document.write("Ilk harf " + word.charAt(0) + "<br>")
document.write("CheckJava " + word.startsWith("java") + "<br>")
document.write("Concat " + word.concat("-ben js ogreniyorum") + "<br>")
document.write("Substring " + word.substring(0, 4) + "<br>")

var secondWord = String(prompt("Please input the second word"))
document.write("Replace " + word.replace(word, secondWord))

// ############################################################################################################################


//Adınızı ve soyadınızı json objesine ekleyip daha sonra bu json objesini
//stringe cevirip daha sonra adınızı ve soyadınızı document.write ile ekranda gösterin
// var nameSurname = {
//     "adi": "Beytullah",
//     "soyadi": "Zor"
// };

// var jsonName = JSON.stringify(nameSurname) //JsonToString
// var stringName = jsonName.substring(8, 17)
// var stringSurname = jsonName.substring(29, 32)
// document.write(stringName + "&nbsp" + stringSurname + "<br>")

// var nameAndSurname = {
//     "name" : "Beytullah",
//     "surname" : "Zor",
//     "number" : "0543"
// };

// var js_string = JSON.stringify(nameAndSurname);
// var obj = JSON.parse(js_string)

// document.write(obj.name + "&nbsp" + obj.surname + "&nbsp" + obj.number);

var nameandSurname = {
    "name": "Beytullah",
    "surname": "Zor",
    "number": "543"
}

var jsonToString = JSON.stringify(nameandSurname)
var parseJson = JSON.parse(jsonToString)
document.write("Name: " + parseJson.name + "\t" + "Surname: " + parseJson.surname + "\t" + "Number: " + parseJson.number)






















