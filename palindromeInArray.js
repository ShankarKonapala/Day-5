

var checkPalindrome = function(){  
  let a = ["car","redivider","civic","level","transform","thought"]
  for(j=0;j<a.length;j++){
    let b = a[j]
    const len = b.length;
    for (let i = 0; i < len / 2; i++) {
        if (b[i] !== b[len - 1 - i]) {  
          a.splice(j,1)
        }  
    }
  }
  console.log(a)
}
checkPalindrome()