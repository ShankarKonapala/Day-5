
let a = [1, 2, 3, 4, 5];
let n = a.length;
let k = 9;
let b = "";

Rotate = function (a, n, k){
  k = k % n;
  for (let i = 0; i < n; i++) {
    if (i < k) {
      b += (a[n + i - k] + " ")
    }
    else {
      b += ((a[i - k]) + " ");
    }
  }
  console.log(b)
}

Rotate(a,n,k)