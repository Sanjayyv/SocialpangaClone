
let pageTitle = "Social Panga: Best Digital Marketing";
let originalTitle = document.title;
let hiddenIcon = "./Images/sad.png";
let visibleIcon = "./Images/happy.png";


function handleVisibilityChange() {
    if (document.hidden) {
        document.title = "Come back! We miss you!";
        changeFavicon(hiddenIcon);
    } else {
        document.title = pageTitle;
        changeFavicon(visibleIcon);
    }
}


function changeFavicon(icon) {
    let favicon = document.querySelector('link[rel="icon"]');
    favicon.href = icon;
}


document.addEventListener("visibilitychange", handleVisibilityChange);

document.addEventListener('DOMContentLoaded', function () {
    const divElement = document.querySelector('.bodyimg');
    const spanElement1 = document.getElementById('s1');
    const spanElement2 = document.getElementById('s2');
    const spanElement3 = document.getElementById('s3');
    const pElement1 = document.getElementById('p1');
    const pElement2 = document.getElementById('p2');
    const pElement3 = document.getElementById('p3');

    spanElement1.addEventListener('mouseover', function () {

        divElement.src = "./Images/Mafia.png";
        pElement1.style.visibility = 'hidden'; 
        pElement2.style.visibility = 'hidden'; 
        pElement3.style.visibility = 'hidden'; 
        spanElement1.style.visibility = 'visible';
        spanElement2.style.visibility = 'hidden';
        spanElement3.style.visibility = 'hidden';
    });
    spanElement1.addEventListener('mouseout', function () {
        divElement.src = "./Images/bodyimg.png"; 
        pElement1.style.visibility = 'visible'; 
        pElement2.style.visibility = 'visible'; 
        pElement3.style.visibility = 'visible'; 
        spanElement1.style.visibility = 'visible'; 
        spanElement2.style.visibility = 'visible'; 
        spanElement3.style.visibility = 'visible'; 
        
    });

    spanElement2.addEventListener('mouseover', function () {
        pElement1.style.visibility = 'hidden'; 
        pElement2.style.visibility = 'hidden'; 
        pElement3.style.visibility = 'hidden'; 
        spanElement1.style.visibility = 'hidden';
        spanElement2.style.visibility = 'visible';
        spanElement3.style.visibility = 'hidden';
        divElement.src = "./Images/Better.png";
    });
    spanElement2.addEventListener('mouseout', function () {
        pElement1.style.visibility = 'visible'; 
        pElement2.style.visibility = 'visible'; 
        pElement3.style.visibility = 'visible'; 
        spanElement1.style.visibility = 'visible'; 
        spanElement2.style.visibility = 'visible'; 
        spanElement3.style.visibility = 'visible'; 
        divElement.src = "./Images/bodyimg.png";
    });

    spanElement3.addEventListener('mouseover', function () {
        pElement1.style.visibility = 'hidden'; 
        pElement2.style.visibility = 'hidden'; 
        pElement3.style.visibility = 'hidden'; 
        spanElement1.style.visibility = 'hidden';
        spanElement2.style.visibility = 'hidden';
        spanElement3.style.visibility = 'visible';
        divElement.src = "./Images/Bigger.png";
    });
    spanElement3.addEventListener('mouseout', function () {
        pElement1.style.visibility = 'visible'; 
        pElement2.style.visibility = 'visible'; 
        pElement3.style.visibility = 'visible'; 
        spanElement1.style.visibility = 'visible'; 
        spanElement2.style.visibility = 'visible'; 
        spanElement3.style.visibility = 'visible'; 
        divElement.src = "./Images/bodyimg.png";
    });

    const listItems = document.querySelectorAll('li');
    const myImage = document.getElementById('myImage');

    listItems.forEach(item => {
        item.addEventListener('mouseover', function () {
            const imageSrc = item.getAttribute('data-image');
            myImage.src = imageSrc;
            myImage.style.display = 'block';
            myImage.style.left = `${item.getBoundingClientRect().left+10}px`;
            myImage.style.top = `${item.getBoundingClientRect().top-60}px`;
    
        });

        item.addEventListener('mouseout', function () {
            myImage.style.display = 'none';
        });
    });
});