function OnlyLetters(a) {
    let arr = a.split('');
  
    for (i = arr.length - 1; i >= 0; i--) {
        if (isNaN(arr[i]) == false) {
            arr.splice(i,1);
        }
        continue;
    }
    return arr.join(' ');
  }

  console.log(OnlyLetters('anri anri 123 anri anri'));