//Text aus dem tag 'article' der Variable 'text' hinzufuegen
var text = document.querySelector('article').innerHTML;

// die Variable 'text' in einzelne Teile aufsplitten
// imer nach einem Leerzeichen wird abgeschnitten
var words = text.split(/[.:,;!?><"'\s-]+/);

//das laengste word 
var longestWord = '';
	
//ein Array anlegen
var einArray = [
	"eins",
	"zwei",
	"drei"
];
//i = index
var i = 0;

//while-schleiffe
while(i <= 2){
	console.log(i);
	i = i + 1;
};

//for-schleiffe
for(i = 0; i < 5; i++){
	console.log(i)
};

//das laengste wort ermitteln
for(var i = 0; i < words.length; i++){
	if(words[i].length >= longestWord.length){
		longestWord = words[i];
		
		//verlauf der "Suche"
		console.log(i + ': ' + words[i] + ' (' + words[i].length + ')'); 
	}
}

//in die html seite schreiben
document.write('Das mit ' +
				longestWord.length +
				' Zeichen laengste Word lautet: ' +
				longestWord);

/*	
//text laenge messen 
if(text.length > 99999) {
	//mehr als 100000 Zeichen
	alert("Echt viel Text");
}else if{
	// weniger als 100000
	alert("normaler text");
}else if(text.length == 0){
	alert("nichs drinn");
}
*/
//in die konsole schreiben
console.log(words);
	
