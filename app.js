
function handler(event) {
    let imgWidth = event.offsetX;
    let screenWidth = event.target.clientWidth;
    let screenPercent = Math.floor((imgWidth*100)/screenWidth);
    // console.log('screenPercent',screenPercent + "%");
    let currentSrc = document.getElementById('slider').src;
    currentSrc = currentSrc.split("/img/")[1];
    // console.log(currentSrc);
    
    if (event.offsetY > 1) {
        
        if (screenPercent>30) {

       let img = ["pic1.jpg","pic2.jpg","pic3.jpg","pic4.jpg","pic5.jpg","pic6.jpg"]
       let nextImgSrc = img.indexOf(currentSrc) + 1
       document.getElementById('imgBox').innerHTML = "";
       //   console.log(nextImgSrc);
       if (nextImgSrc > img.length - 1) {
           nextImgSrc = 0
       }
       document.getElementById('imgBox').innerHTML = `<img src="./img/${img[nextImgSrc]}" id="slider" class="animate__animated animate__fadeInRight" onclick="handler(event)" onmouseover="over()" onmouseout="out()">`


    }

    else{
        let img = ["pic1.jpg","pic2.jpg","pic3.jpg","pic4.jpg","pic5.jpg","pic6.jpg"]
       let nextImgSrc = img.indexOf(currentSrc) - 1;
    //    console.log(nextImgSrc);
       if (nextImgSrc < 0) {
           nextImgSrc = img.length - 1
       }
       document.getElementById('imgBox').innerHTML = `<img src="./img/${img[nextImgSrc]}" id="slider" class="animate__animated animate__fadeInLeft" onclick="handler(event)" onmouseover="over()" onmouseout="out()">`

    }
}

}

    let isMouseOn = true

setInterval(()=>{

        if (isMouseOn) {
            let currentSrc = document.getElementById('slider').src;
            currentSrc = currentSrc.split("/img/")[1]
            let img = ["pic1.jpg","pic2.jpg","pic3.jpg","pic4.jpg","pic5.jpg","pic6.jpg"]
            let nextImgSrc = img.indexOf(currentSrc) + 1
         //    console.log(nextImgSrc);
            if (nextImgSrc > img.length - 1) {
                nextImgSrc = 0
            }
            document.getElementById('imgBox').innerHTML = `<img src="./img/${img[nextImgSrc]}" id="slider" class="animate__animated animate__fadeInRight" onclick="handler(event)" onmouseover="over()" onmouseout="out()">`
        }
},3000)

function over() {
    isMouseOn = false
}

function out() {
    isMouseOn = true
}
