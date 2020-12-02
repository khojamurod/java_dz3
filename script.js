var a = +prompt('1-chi sonni kriting');
var b = +prompt('2-chi sonni kriting');
var c = +prompt('3-chi sonni kriting');

if(a>=b && a>=c){
    var big = a;
}else if(b>a && b>=c){
    var big = b;
}else if(c>b && c>a){
    var big = c;
}else{
    alert('nmadr hato ketti')
}

if(a<=b && a<=c){
    var smal = a;
}else if(b<a && b<=c){
    var smal = b;
}else if(c<b && c<a){
    var smal = c;
}else{
    alert('nmadr hato ketti')
}


var orta = ( big+smal ) /2;


alert (' Siz kritgan sonlarning eng katta va eng kichkinasi '+ big +' va '+ smal + ' edi')
alert('Ularning orta qiymati esa '+ orta +' hisoblanadi')

