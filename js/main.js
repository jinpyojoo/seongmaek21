const screen = document.getElementById("app")

function init() {
    // 로고 화면
    screen.innerHTML = "<div class=\"init logo\">\
    <span class=\"brand\">SEMTLE</span>\
    </div>"
}


document.addEventListener('click', ()=>{
    if (typeof(bg) == "undefined"){
        bg = new Audio("audio/background.mp3")
        bg.volume = 0.1
        bg.loop = true
        bg.play()
    }  
    document.documentElement.requestFullscreen()
})

touching = false
touch = {
    'first':{
        'x': 0,
        'y': 0
    },
    'move':{
        'x': 0,
        'y': 0
    },
    'touch': {
        'left': 0,
        'bottom': 0
    }
}
document.addEventListener('touchmove', (event)=>{
    if (touching) {
        touch['move']['x'] = event.touches[0].clientX
        touch['move']['y'] = event.touches[0].clientY
        xlength = touch['first']['x'] - touch['move']['x']
        ylength = touch['first']['y'] - touch['move']['y']
        if (Math.abs(touch['first']['x'] - touch['move']['x']) < 30){
            touch['touch']['left'] = 0
        } else if (touch['first']['x'] > touch['move']['x']){
            touch['touch']['left'] = -1
        } else if (touch['first']['x'] < touch['move']['x']){
            touch['touch']['left'] = 1
        }

        if (Math.abs(touch['first']['y'] - touch['move']['y']) < 30){
            touch['touch']['bottom'] = 0
        } else if (touch['first']['y'] > touch['move']['y']){
            touch['touch']['bottom'] = 1
        } else if (touch['first']['y'] < touch['move']['y']){
            touch['touch']['bottom'] = -1
        } else {
            touch['touch']['bottom'] = 0
        }
        console.log(touch['touch'])
    }
})

document.addEventListener('touchstart', (event)=>{
    touching = true
    touch['first']['x'] = event.touches[0].clientX
    touch['first']['y'] = event.touches[0].clientY
    console.log(touching)
})

document.addEventListener('touchend', (event)=>{
    touching = false
    console.log(touching)
})

function randomNum(min, max){
    var randNum = Math.floor(Math.random()*(max-min+1)) + min;
    return randNum;
}

var is_colliding = function( $div1, $div2 ) {
    try{
        var d1_offset             = $div1.offset();
        var d1_height             = $div1.outerHeight( true );
        var d1_width              = $div1.outerWidth( true );
        var d1_distance_from_top  = d1_offset.top + d1_height;
        var d1_distance_from_left = d1_offset.left + d1_width;

        // Div 2 data
        var d2_offset             = $div2.offset();
        var d2_height             = $div2.outerHeight( true );
        var d2_width              = $div2.outerWidth( true );
        var d2_distance_from_top  = d2_offset.top + d2_height;
        var d2_distance_from_left = d2_offset.left + d2_width;

        var not_colliding = ( d1_distance_from_top < d2_offset.top || d1_offset.top > d2_distance_from_top || d1_distance_from_left < d2_offset.left || d1_offset.left > d2_distance_from_left );

        // Return whether it IS colliding
        return ! not_colliding;
    } catch {
        return false
    }
	// Div 1 data
	
};
obing = false;
highest = 0;
reversal = false;

isPhone = false;

if (navigator.platform.toLowerCase() != "win32"){
    isPhone = true;
}

function ob(obtype){
    switch(obtype){
        case 1:
            $('.game-obstacle').append("<div class=\"game-ob1\"></div>")
            setTimeout(()=>{
                if (is_colliding($('div.game-ob1'), $('div.game-player'))){
                    gameover()
                }
            }, 2200)
            setTimeout(()=>{
                $(".game-obstacle").empty()
                obing = false
            }, 4000)
            break
        case 2:
            $('.game-obstacle').append("<div class=\"game-ob2\"></div>")
            setTimeout(()=>{
                if (is_colliding($('div.game-ob2'), $('div.game-player'))){
                    gameover()
                }
            }, 2200)
            setTimeout(()=>{
                $(".game-obstacle").empty()
                obing = false
            }, 4000)
            break
        case 3:
            $('.game-obstacle').append("<div class=\"game-ob3\"></div>")
            setTimeout(()=>{
                if (is_colliding($('div.game-ob3'), $('div.game-player'))){
                    gameover()
                }
            }, 2200)
            setTimeout(()=>{
                $(".game-obstacle").empty()
                obing = false
            }, 4000)
            break
        case 4:
            $('.game-obstacle').append("<div class=\"game-ob4\"></div>")
            setTimeout(()=>{
                if (is_colliding($('div.game-ob4'), $('div.game-player'))){
                    gameover()
                }
            }, 2200)
            setTimeout(()=>{
                $(".game-obstacle").empty()
                obing = false
            }, 4000)
            break
        case 5:
            $('.game-obstacle').append("<div class=\"game-ob5\"></div>")
            setTimeout(()=>{
                if (is_colliding($('div.game-ob5'), $('div.game-player'))){
                    gameover()
                }
            }, 2200)
            setTimeout(()=>{
                $(".game-obstacle").empty()
                obing = false
            }, 4000)
            break
        case 6:
            $('.game-obstacle').append("<div class=\"game-ob6\"></div>")
            setTimeout(()=>{
                if (is_colliding($('div.game-ob6'), $('div.game-player'))){
                    gameover()
                }
            }, 2200)
            setTimeout(()=>{
                $(".game-obstacle").empty()
                obing = false
            }, 4000)
            break
        case 7:
            $('.game-obstacle').append("<div class=\"game-ob7\"></div>")
            setTimeout(()=>{
                if (is_colliding($('div.game-ob7'), $('div.game-player'))){
                    gameover()
                }
            }, 2200)
            setTimeout(()=>{
                $(".game-obstacle").empty()
                obing = false
            }, 4000)
            break
    }
}


function display(text){
    $('div#notice').text(text)
    $('div#notice').css('opacity', '1')
    setTimeout(()=>{
        $('div#notice').css('opacity', '0')
    }, 2000)
}


function ptob(ptob){
    switch(ptob){
        case 1:
            $('.game-obstacle').append("<div class=\"game-ptob1\"></div>")
            $('.game-ptob1').css('left', randomNum(0,window.innerWidth-50)+"px").css('top', randomNum(0,window.innerHeight-50)+"px")
            setTimeout(()=>{
                a = setInterval(()=>{
                    if (is_colliding($('div.game-ptob1'), $('div.game-player'))){
                        gameover()
                    }
                },10)
            }, 500)
            setTimeout(()=>{
                clearInterval(a)
                $(".game-obstacle").empty()
            }, 4000)
            break
        case 2:
            $('.game-obstacle').append("<div class=\"game-ptob2\"></div>")
            setTimeout(()=>{
                pt2 = setInterval(()=>{
                    if (is_colliding($('div.game-ptob2'), $('div.game-player'))){
                        gameover()
                    }
                },10)
            }, 500)
            setTimeout(()=>{
                clearInterval(pt2)
                $(".game-obstacle").empty()
            }, 4000)
            break
        case 3:
            $('.game-obstacle').append("<div class=\"game-ptob3\"></div>")
            $('.game-ptob3').css('top', randomNum(0,window.innerHeight-50)+"px")
            setTimeout(()=>{
                pt3 = setInterval(()=>{
                    if (is_colliding($('div.game-ptob3'), $('div.game-player'))){
                        gameover()
                    }
                },10)
            }, 500)
            setTimeout(()=>{
                clearInterval(pt3)
                $(".game-obstacle").empty()
            }, 4000)
            break
        case 4:
            display('이동속도가 느려지는 효과 발동!')
            new Audio('audio/stop.mp3').play()
            speed = 0.6
            setTimeout(()=>{
                if (isPhone){
                    speed = 2.5;
                } else {
                    speed = 4;
                }
                $(".game-obstacle").empty()
            }, 4000)
            break
        // case 5:
        //     $('.game-obstacle').append("<div class=\"game-ptobheos\"></div>")
        //     vk = setInterval(()=>{
        //         playerX -= 5
        //     }, 10)
        //     setTimeout(()=>{
        //         speed = 4
        //         clearInterval(vk)
        //         $(".game-obstacle").empty()
        //         obing = false
        //     }, 4000)
        //     break
        case 5:
            display('키보드 반전 효과 발동!')
            reversal = true
            setTimeout(()=>{
                reversal = false
                $(".game-obstacle").empty()
            }, 4000)
            break
        
        case 6:
            $('.game-obstacle').append("<div class=\"game-ptob4\"></div>")
            $('.game-ptob4').css('left', randomNum(0,window.innerWidth-50)+"px")
            setTimeout(()=>{
                pt6 = setInterval(()=>{
                    if (is_colliding($('div.game-ptob4'), $('div.game-player'))){
                        gameover()
                    }
                },10)
            }, 500)
            setTimeout(()=>{
                clearInterval(pt6)
                $(".game-obstacle").empty()
            }, 4000)
            break
    }
}


function gameover() {
    clearInterval(intv)
    setScreen("gameover")
}
var wave;
var intv;
function gameStart() {
    document.getElementById('copy').style['opacity'] = '0';
    screen.innerHTML = "\
    <div class=\"init game\">\
        <div class=\"game-top\">\
            <div class=\"game-point\">0</div>\
        </div>\
        <div class=\"game-screen\">\
            <div class=\"game-player\"></div>\
        </div>\
        <div class=\"game-obstacle\">\
        </div>\
    </div>"
    $(
        function() {
            var keypress = {};
            playerX= 0;
            playerY= 0;
            if (isPhone){
                speed = 2.5;
            } else {
                speed = 4;
            }
            ballspeed = 1;
            ballx = (window.innerWidth/2);
            bally = (window.innerHeight/2);
            barStart = 0;
            barLength = 30;
            countBounce = 0;
            wave = 0;
            barEnd = barStart+barLength;
            bounced = 0
            
            intv = setInterval(()=>{
                if (playerX > window.innerWidth - barLength){
                    playerX=window.innerWidth - barLength;
                } else if (playerX < 0){
                    playerX=0;
                } // 벽뚫기 방지
                if (playerY > window.innerHeight - barLength){
                    playerY=window.innerHeight - barLength;
                } else if (playerY < 0){
                    playerY =0;
                }
                if (!reversal){
                    if(keypress['37']) playerX -= speed; // left
                    if(keypress['39']) playerX += speed; // right
                    if(keypress['38']) playerY += speed; // top
                    if(keypress['40']) playerY -= speed;
                } else {
                    if(keypress['39']) playerX -= speed; // left
                    if(keypress['37']) playerX += speed; // right
                    if(keypress['40']) playerY += speed; // top
                    if(keypress['38']) playerY -= speed;
                }
                if (touching) {
                    if (!reversal){
                        if(touch['touch']['left'] < 0){
                            playerX -= speed;
                        } else if (touch['touch']['left'] > 0) {
                            playerX += speed;
                        }
    
                        if(touch['touch']['bottom'] < 0){
                            playerY -= speed;
                        } else if (touch['touch']['bottom'] > 0) {
                            playerY += speed;
                        }
                    } else {
                        if(touch['touch']['left'] < 0){
                            playerX += speed;
                        } else if (touch['touch']['left'] > 0) {
                            playerX -= speed;
                        }
    
                        if(touch['touch']['bottom'] < 0){
                            playerY += speed;
                        } else if (touch['touch']['bottom'] > 0) {
                            playerY -= speed;
                        }
                    }
                }
                
                barStart = playerY;
                barEnd = playerY+barLength;
                if (!obing){
                    obing = true
                    ob(randomNum(1,7))
                    if (wave > 5){
                        if (randomNum(1,5) > 2){
                            ob(randomNum(1,7))
                        }
                        if (randomNum(1,3) >= 2){
                            ptob(randomNum(1,6))
                        }
                    }
                    if (wave > 15){
                        ob(randomNum(1,7))
                    }
                    wave += 1
                }
                $("div.game-point").text("wave "+wave.toString())
                $("div.game-player").css('left', playerX+"px").css('bottom', playerY+"px")
                
            }, 5)
            $(document).keydown(function(e){ // 어떤 키가 눌렸는지 저장 
                keypress[e.which.toString()] = true;
            });

            $(document).keyup(function(e){ // 눌렸던 키를 해제
                keypress[e.which.toString()] = false;
            });
        }
    )
}

function setScreen(type) {
    switch (type) {
        case "title":
            screen.innerHTML = "<div class=\"init title\">\
            <span class=\"gameName\">프로젝트</span>\
            <div class=\"btn1\">게임시작</div>\
            <div class=\"btn2\">도움말</div>\
            <div class=\"btn3\">크레딧</div>\
            </div>"

            // 게임 시작버튼 클릭 이벤트 정의
            document.getElementsByClassName("btn1")[0].addEventListener("click", () => {
                setScreen("gamescreen")
            })
            // 게임 방법 클릭 이벤트 정의
            document.getElementsByClassName("btn2")[0].addEventListener("click", () => {
                setScreen("howtoplay")
            })
            // 만든놈들
            document.getElementsByClassName("btn3")[0].addEventListener("click", () => {
                setScreen("credit")
            })

            break

        case "gamescreen":
            gameStart()

            break
        case "gameover":
            screen.innerHTML = "<div class=\"init gameover\">\
            <div class=\"gameover\">GAMEOVER</div>\
            <div class=\"gameover-point\">wave "+wave+"</div>\
            <div class=\"description\">3초 후 메인화면으로 이동합니다.</div>\
            </div>"
            setTimeout(()=>{
                setScreen("title")
                clearInterval(intv)
            }, 3000)
            break
        case "howtoplay":
            screen.innerHTML = "<div class=\"init howtoplay\">\
            <span class=\"close\" onclick=\"setScreen('title')\">x</span>\
            <div class=\"title\">도움말</div><br>\
            <div class=\"description\">이 개임은 공으로 벽에서 갑자기 등장하는 장애물들을 피한느 그런개임임미다.<br>\
            위와 아래 대각선 방향으로 이동이 가능함미다.아주 잼있는 게임이죠.<br>\
            청록색 테두리으로 표시되는 부분은 피하고, 파랑색 테두리로 표시되는 부분은 그쪽으로 가야하비단.</div>\
            </div>"
            break
        case "credit":
            screen.innerHTML = "<div class=\"init credit\">\
            <span class=\"close\" onclick=\"setScreen('title')\">x</span>\
            <div class=\"title\">크레딧</div><br>\
            <div class=\"description\"><b>만든 사람들</b><br><br>주진표(3)<br>조재원(2)<br>김병진(2)<br>김민준(2)<br><br><br><b>사용한 자료</b><br><br>BGM : Ehrling - Dance With Me<br>걸린시간 : 3일</div>\
            </div>"
        default:
            throw Error("Unknown screen type.")
    }
}

init()
setTimeout(() => {
    setScreen("title")
}, 9000)