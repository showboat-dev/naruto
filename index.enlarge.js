//获取元素
var zixun = document.querySelector('.zixun');
var enlarge = document.querySelector('.enlarge');
var big = document.querySelector('.big');
var littleimg = zixun.firstElementChild;
var bigimg = big.firstElementChild;

//1.鼠标经过
zixun.addEventListener('mouseenter', function() {
        enlarge.style.display = 'block';
        big.style.display = 'block';
    })
    //2.鼠标离开
zixun.addEventListener('mouseleave', function() {
        enlarge.style.display = 'none';
        big.style.display = 'none';
    })
    //3.鼠标移动
zixun.addEventListener('mousemove', function(e) {
    console.log(e.pageX);;
})