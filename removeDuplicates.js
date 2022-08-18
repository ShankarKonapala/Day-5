var elements = ['1','3','5','2','1','5','10','18','2']
    var removeDuplicates = function(...a){
        for(let i=0 ; i<a.length ; i++){
            for(let j=i+1 ; j<a.length ; j++){
                if(a[i]===a[j]){
                    a.splice(j,1)
                }
            }
        }
        console.log(a);
    };
 
 removeDuplicates(...elements);