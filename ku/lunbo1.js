
(function () {
    var oBox = document.getElementById('three');
    var oBoxInner = oBox.getElementsByTagName('div')[0];
    var aDiv = oBoxInner.getElementsByTagName('div');
    var aImg = oBoxInner.getElementsByTagName('img');
    var oUl = oBox.getElementsByTagName('ul');
    var aLi = oBox.getElementsByTagName('li');
    var oBtnLeft = oBox.getElementsByTagName('a')[0];
    var oBtnRight = oBox.getElementsByTagName('a')[1];
    zhufengAnimate(aDiv[0], {opacity: 1}, 1000);
    var step = 0;
    var autoTimer = null;
    var interval = 2000;
    clearInterval(autoTimer);
    autoTimer = setInterval(autoMove, interval);
    function autoMove() {
        if (step >= aDiv.length - 1) {
            step = -1;
        }
        step++;
        setBanner();
    }
    function setBanner() {
        for (var i = 0; i < aDiv.length; i++) {
            var curEle = aDiv[i];
            if (i === step) {
                utils.css(curEle, 'zIndex', 1);
                zhufengAnimate(curEle, {opacity: 1}, 1000, function () {
                    var siblings = utils.siblings(this);
                    for (var k = 0; k < siblings.length; k++) {
                        utils.css(siblings[k], 'opacity', 0)
                    }
                });
                continue;
            }
            utils.css(curEle, 'zIndex', 0);
        }
        bannerTip();
    }
    function bannerTip() {
        for (var i = 0; i < aLi.length; i++) {
            var curEle = aLi[i];
            curEle.className = i === step ? 'bg' : '';
        }
    }
    oBox.onmouseover = function () {
        clearInterval(autoTimer);
        oBtnLeft.style.display = oBtnRight.style.display = 'block';
    };
    oBox.onmouseout = function () {
        autoTimer = setInterval(autoMove, interval);
        oBtnLeft.style.display = oBtnRight.style.display = 'none';
    };
    handleChange();
    function handleChange() {
        for (var i = 0; i < aLi.length; i++) {
            (function (index) {
                aLi[index].onclick = function () {
                    step = index;
                    setBanner();
                }
            })(i);
        }
    }
    oBtnLeft.onclick = function () {
        if (step <= 0) {
            step = aDiv.length;
        }
        step--;
        setBanner();
    };
    oBtnRight.onclick = autoMove;
})();











