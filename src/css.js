const string =`
   /*进行初始化*/
  *{margin: 0px;padding: 0px;}
  /*设置脸部基础信息*/
.face{
    background-color:rgb(255,219,0);
    position: relative;
    width: 100vw;
    height: 100vh;
}
/*设置鼻子的三角形部分*/
.san{
    border: 18px solid black;
    border-color: black transparent transparent transparent;
    width: 0px;
    height: 0px;
    position: relative;
    top: 260px;
    left: 50%;
    margin-left: -20px;
}
/*设置鼠标移上去鼻子会动的动画*/
@keyframes wave{
    0%{transform: rotate(0deg);}
    33%{transform: rotate(9deg);}
    66%{transform: rotate(-9deg);}
    100%{transform: rotate(0deg);}
}
.san:hover{
    animation: wave 250ms infinite linear;
}
/*设置鼻子的半圆形部分*/
.hu{
    position: absolute;
    background-color:black;
    top: -29px;
    left:-18px;
    border-radius: 40px 40px 0 0;
    width:36px;
    height: 12px;
}
/*设置两个眼睛共有的信息*/
.eye{
    width: 100px;
    height: 100px; 
    border: 2px solid black;
    background-color: rgb(45,46,45);
    position: absolute;
    border-radius: 50%;
    top: 200px;
    left: 50%;
    margin-left: -15px;
}
/*设置瞳孔*/
.eye::before{
    content: '';
    display: block;
    border-radius: 50%;
    width: 44px;
    height: 44px;
    border:3px solid black ;
    background-color: #FFF;
    position: relative;
    margin-left: 8px;
    margin-top: 5px;
}
/*设置左右眼*/
.eye.left{
    transform: translateX(-220px)
}
.eye.right{
    transform: translateX(150px)
}
/*设置上嘴唇的共有部分*/
.up{
    width: 100px;
    height: 100px;
    position: relative;
    left: 50%;
    top: 250px;
    margin-left: -50px;
} 
/*设置上嘴唇的左边*/
 #left_lip{
    border: 5px solid black;
    width: 130px;
    height: 30px;
    border-radius: 0 0 0 50px;
    border-top-color:transparent;
    transform: rotate(-17deg);
    position: relative;
    z-index: 5;
    background-color: rgb(255,219,0);
    margin-left: -90px;
    top:20px;
}
/*遮住那几条很丑的透明的虚线*/
#left_lip::before{
    content: "";
    display: block;
    position: relative;
    width: 20px;
    height: 37px;
    background-color: rgb(255,219,0);
    margin-left: 124px;
    margin-top: -8px;
}
#left_lip::after{
    content: "";
    display: block;
    position: absolute;
    width: 150px;
    height: 12px;
    background-color: rgb(255,219,0);
    margin-left: -10px;
    margin-top: -40px;
}
/*设置右嘴唇*/
#right_lip{
    border: 5px solid black;
    width: 130px;
    height: 30px;
    border-radius: 0 0 50px 0;
    border-top-color:transparent;
    transform: rotate(17deg);
    position: relative;
    margin-left: 50px;
    top:-22px;
    z-index: 5;
    background-color: rgb(255,219,0);
}
/*遮住那些很丑的虚线*/
 #right_lip::before{
    content: "";
    display: block;
    position: relative;
    width: 10px;
    height: 37px;
    background-color: rgb(255,219,0);
    margin-left: -8px;
    z-index: 3;
    margin-top: -7px;
}
#right_lip::after{
    content: "";
    display: block;
    position: relative;
    width: 150px;
    height: 12px;
    background-color: rgb(255,219,0);
    margin-right: -100px;
    z-index: 3;
    margin-top: -40px;
}
/*下嘴唇*/
.down{
    position: absolute;
    height: 250px;
    left: 50%;
    top: 320px;
    margin-left: -140px;
    width: 280px;
    overflow: hidden;
}
/*下嘴唇的阴影部分*/
.mouth .down .yuan1{
    position: absolute;
    height: 900px;
    border: 5px solid black;
    left: 50%;
    top: -680px;
    margin-left: -100px;
    width: 200px;
    border-radius: 150px/600px ;
    background-color: #9b000a;
    overflow: hidden;
    z-index: 0;

}

.mouth .down .yuan1 .yuan2{
    width: 300px;
    height: 300px;
    background-color: rgb(255, 72, 95);
    position: absolute;
    top: 720px;
    left: 50%;
    margin-left: -150px;
    border-radius: 150px;
}
/*设置两个酒窝*/
.dimple{
    position: absolute;
    border: 5px solid black;
    height: 100px;
    width: 100px;
    top: 120px;
    background-color: red;
    border-radius: 50%;
    left: 50%;
    z-index: 15;
}
.dimple.left{
    left: -100px;
}
.dimple.right{
    left: 450px;
}
/*媒体查询，进行移动端设配*/
@media (max-width: 500px) {
    #html {
      height: 50vh;
      overflow: auto;
    }
  
    #div1 {
      position: relative;
      top: 0;
      right: 0;
    }
  }
`
export default string;