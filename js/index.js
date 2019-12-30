function getRandomNum(){
    return parseInt(Math.random()*255)
}
setInterval(() => {
    var r = getRandomNum();
    var g = getRandomNum();
    var b = getRandomNum();
    document.getElementById('getTxt').style.color=`rgb(${r},${g},${b})`    
}, 100);

