

var stringTitleCaps = function() {
    let a = ["all","are","equal","before","law"]
    let b = [];
    for(let i=0 ; i<a.length ; i++){
        b.push(a[i].charAt(0).toUpperCase() + a[i].substr(1).toLowerCase());
    }
    console.log(b);

}
stringTitleCaps()