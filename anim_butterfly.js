


function butterfly(){
    const bf = document.getElementById('image');

    let positionX = 0;
    let stepX = 95;
    let posLeft = 0;
    let posTop = 850;

    let stepY = 92;
    let id = setInterval(() =>{
        bf.style.backgroundPosition = `${positionX}px ${-92}px`;
        bf.style.left = posLeft + 'px';
        bf.style.top = posTop + 'px';
        posTop -= 2;
        posLeft += 10;
        positionX -= stepX;
        

        posLeft == 1500 ? posLeft = 0: 'ok';
        posTop == 0 ? posTop = 850: 'ok';
        if(positionX < -963){
            positionX = 0;

        }
    },100);
}


butterfly();