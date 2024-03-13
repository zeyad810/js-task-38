let currentDate =new Date()
let h = currentDate.getHours();
let m =currentDate.getMinutes()
let s = currentDate.getSeconds(); 
function getTime(h,m,s) {
    let time ="Am"
    if (h >=12  ) {
        time ="pm"
        h=h-12;
    }
    console.log( `${h}:${m}:${s} ${time}`)
}

getTime(h,m,s);