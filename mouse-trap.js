export{createCircle, moveCircle,setBox};

function createCircle(){
    document.addEventListener("mousedown", event => {
        const newcircle = document.createElement("div");
        newcircle.setAttribute("class", "circle");
        newcircle.setAttribute("id","Tester")
        let x = event.clientX - 25;
        let y = event.clientY - 25;
        newcircle.setAttribute("style", "left: " + x.toString() + "px; top: " + y.toString() + "px; background: white;")
        document.body.appendChild(newcircle);
    });
}

function moveCircle(){
    document.addEventListener("mousemove", event => {
        const lastcircle = document.querySelector("div:last-child");
        lastcircle.style.left = `${event.clientX - 25}px`;
        lastcircle.style.top = `${event.clientY - 25}px`;
        document.body.append(lastcircle);
        let midbox = document.querySelector("div.box");
        let dims = midbox.getBoundingClientRect();

        if (lastcircle.getAttribute('class') !== 'box') {
            if ((+lastcircle.style.left.replace('px', '') > (dims.x)) && (+lastcircle.style.left.replace('px', '') < (dims.right - 50)) && (+lastcircle.style.top.replace('px', '') > (dims.top)) && (+lastcircle.style.top.replace('px', '') < (dims.bottom - 50))) {
                lastcircle.style.background = 'var(--purple)';
            }
        }

        if (event.clientX - 25 < (dims.x) && lastcircle.style.background === 'var(--purple)') {
            console.log(lastcircle.style.left);
            lastcircle.style.left = (dims.x).toString() + 'px';

            if (event.clientY - 25 < (dims.top)) {
                lastcircle.style.top = (dims.y).toString() + 'px';
            }
            console.log(event.clientY - 25);
            console.log(dims.bottom);

            if (event.clientY - 25 > (dims.bottom - 50)) {
                lastcircle.style.top = (dims.bottom - 50).toString() + 'px';
            }
        } else if (event.clientX - 25 > (dims.right - 50) && lastcircle.style.background === 'var(--purple)') {
            lastcircle.style.left = (dims.right - 50).toString() + 'px';

            if (event.clientY - 25 < (dims.top)) {
                lastcircle.style.top = (dims.y).toString() + 'px';
            }
            console.log(event.clientY - 25);
            console.log(dims.bottom);

            if (event.clientY - 25 > (dims.bottom - 50)) {
                lastcircle.style.top = (dims.bottom - 50).toString() + 'px';
            }
        } else if ((event.clientY - 25 > (dims.bottom - 50)) && lastcircle.style.background === 'var(--purple)') {
            lastcircle.style.top = (dims.bottom - 50).toString() + 'px';

        } else if ((event.clientY - 25 < (dims.top)) && lastcircle.style.background === 'var(--purple)') {
            lastcircle.style.top = (dims.top).toString() + 'px';

        }
    });
}

function setBox(){
    const centerbox = document.createElement("div");
    centerbox.setAttribute("class", "box");
    document.body.appendChild(centerbox);
}