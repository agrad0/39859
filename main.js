function myfunc(n){
    let num = ("Liczba znajduje się w przedziale");
    let notnum = ("Liczba nie znajduje się w przedziale");
    if ((99 < n) && (n < 201)){
    return num;
    } else {return notnum;
    }
}
myfunc(110);
console.log(myfunc(80));