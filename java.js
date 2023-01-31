document.write("<br>Hello World"+"<br>");

let array=[];
document.write("Array na walang laman: "+array+"<br>");
box = array.push("a");
document.write("Unang laman ng array: "+array+"<br>");
box = array.push("b");
document.write("Pangalawang laman ng array: "+array+"<br>");
box = array.push("c");
document.write("Pangatlong laman ng array: "+array.join(" ")+"<br>");
box = array.push("d");
document.write("Pang-apat na laman ng array: "+array.join(" ")+"<br>");
box = array.push("e");
document.write("Pang-limang laman ng array: "+array.join(" ")+"<br>");
box = array.pop();
document.write("Remove Letter (E): "+array.join(" ")+"<br>");
box = array.unshift("E");
document.write("Add letter (E) first place: "+array.join(" ")+"<br>");
box = array.shift();
document.write("Remove letter (E) first place: "+array.join(" ")+"<br><br>");

for(let i=0; i<array.length; i++){
    document.write("Index "+[i]+": "+array[i]+"<br>");
}

console.log("Hello World");