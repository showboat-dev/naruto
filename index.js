window.addEventListener('load', function() {
    //一：顶部动画
    var h1 = document.querySelector('h1');
    setInterval(function() {
            if (h1.offsetLeft < -544) {
                h1.style.left = 200 + 'px';
            } else { h1.style.left = h1.offsetLeft - 1 + 'px'; }
        }, 10)
        //二：搜索框
    var search = document.querySelector('.search');
    var input = document.querySelector('input');
    var flag = 0;
    search.addEventListener('click', function() {
            flag++;
            if (flag % 2 != 0) {
                input.style.display = 'block';
                var timer = setInterval(function() {
                    if (input.offsetLeft < 927) {
                        clearInterval(timer);
                    } else { input.style.left = input.offsetLeft - 5 + 'px'; }
                }, 1);
            } else if (flag % 2 == 0) {
                input.style.display = 'block';
                var timer2 = setInterval(function() {
                    if (input.offsetLeft > 1100) {
                        clearInterval(timer2);
                    } else { input.style.left = input.offsetLeft + 5 + 'px'; }
                }, 1);
            }
        })
        //三：轮播图
        //第一模块：鼠标经过和离开
    var turn = document.querySelector('.turn');
    var a1 = turn.children[0];
    var a2 = turn.children[1];
    turn.addEventListener('mouseenter', function() {
        a1.style.display = 'block';
        a2.style.display = 'block';
        clearInterval(timer);
        timer = null;
    })
    turn.addEventListener('mouseleave', function() {
            a1.style.display = 'none';
            a2.style.display = 'none';
            timer = setInterval(function() {
                a2.click();
            }, 2000)
        })
        //第二模块：小圆圈个数随图片张数变化
    var inner = document.querySelector('.inner');
    var len = inner.children.length;
    var ol = document.querySelector('ol');
    var img = inner.children[0];
    var wid = img.offsetWidth;
    var num = 0;
    var circle = 0;
    for (var i = 0; i < len; i++) {
        var li = document.createElement('li');
        ol.appendChild(li);
        li.setAttribute('index', i);
        ol.children[0].className = 'current';
        //第三模块：小圆圈底色变化
        li.addEventListener('click', function() {
            for (var i = 0; i < len; i++) {
                ol.children[i].className = '';
            }
            this.className = 'current';
            // 第四模块：点击小圆圈图片滚动
            var x = this.getAttribute('index');
            num = x;
            circle = x;
            animate(inner, -x * wid);
        })
    }
    //第五模块：点击右侧按钮，图片滚动一张
    var first = inner.children[0].cloneNode(true);
    inner.appendChild(first);
    a2.addEventListener('click', function() {
            num++;
            if (num >= inner.children.length - 1) {
                inner.style.left = 0 + 'px';
                num = 0;
            }
            animate(inner, -num * wid);
            circle++;
            if (circle >= 5) {
                circle = 0;
            }
            for (var i = 0; i < ol.children.length; i++) {
                ol.children[i].className = '';
            }
            ol.children[circle].className = 'current';
        })
        //第六模块：点击左侧按钮，图片回滚
    a1.addEventListener('click', function() {
            if (num <= 0) {
                num = inner.children.length - 1;
            }
            num--;
            animate(inner, -num * wid);
            circle--;
            if (circle < 0) {
                circle = 4;
            }
            for (var i = 0; i < ol.children.length; i++) {
                ol.children[i].className = '';
            }
            ol.children[circle].className = 'current';
        })
        //第七模块：自动播放功能
    var timer = setInterval(function() {
            a2.click();
        }, 2000)
        //四：放大效果
        //1：获取元素
    var zixun = document.querySelector('.zixun');
    var enlarge = document.querySelector('.enlarge');
    var big = document.querySelector('.big');
    var bigimg = big.firstElementChild;
    //2.鼠标经过
    zixun.addEventListener('mouseenter', function() {
            enlarge.style.display = 'block';
            big.style.display = 'block';
        })
        //3.鼠标离开
    zixun.addEventListener('mouseleave', function() {
            enlarge.style.display = 'none';
            big.style.display = 'none';
        })
        //4.鼠标移动
    zixun.addEventListener('mousemove', function(e) {
            var enlargeX = e.pageX - this.offsetLeft - 189.6 - enlarge.offsetWidth / 2;
            var enlargeY = e.pageY - this.offsetTop - 80 - enlarge.offsetWidth / 2;
            var zixunmax = zixun.offsetWidth - enlarge.offsetWidth;
            var bigmax = big.offsetWidth - 1.5 * enlarge.offsetWidth;
            var rate = bigmax / zixunmax;
            if (enlargeX < 0) {
                enlargeX = 0;
            } else if (enlargeX > 253) {
                enlargeX = 253;
            } else {
                enlarge.style.left = enlargeX + 'px';
                bigimg.style.left = -enlargeX + 'px';
            }
            if (enlargeY < 0) {
                enlargeY = 0;
            } else if (enlargeY > 102) {
                enlargeX = 102;
            } else {
                enlarge.style.top = enlargeY + 'px';
                bigimg.style.top = -enlargeY + 'px';
            }
        })
        //5： 微信二维码消失
    var last = document.querySelector('.last');
    last.addEventListener('click', function() {
            last.style.display = 'none';
        })
        //五：下拉菜单栏制作
    var bottom = document.querySelector('.bottom');
    var push = document.querySelectorAll('.push');
    var over = document.querySelectorAll('.over');
    var uls = bottom.querySelectorAll('ul');

    over[0].addEventListener('mouseover', function() {
        push[0].style.animation = "move2 0.2s linear forwards";
    })
    over[1].addEventListener('mouseover', function() {
        push[1].style.animation = "move2 0.2s linear forwards";
    })
    over[2].addEventListener('mouseover', function() {
        push[2].style.animation = "move2 0.2s linear forwards";
    })
    uls[0].addEventListener('mouseleave', function() {
        push[0].style.animation = "move3 0.2s linear forwards";
    })
    uls[1].addEventListener('mouseleave', function() {
        push[1].style.animation = "move3 0.2s linear forwards";
    })
    uls[2].addEventListener('mouseleave', function() {
        push[2].style.animation = "move3 0.2s linear forwards";
    })
})