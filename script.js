const startButton = document.getElementById("startButton");
const music = document.getElementById("music");
const gallery = document.getElementById("gallery");
const letter = document.getElementById("letter");

startButton.addEventListener("click", () => {

    music.play();

    startButton.style.display = "none";

    gallery.classList.remove("hidden");

    gallery.scrollIntoView({
        behavior: "smooth"
    });

    createHearts();

    setTimeout(() => {
        letter.classList.remove("hidden");

        letter.scrollIntoView({
            behavior: "smooth"
        });

    }, 12000);

});

function createHearts(){

    setInterval(()=>{

        const heart=document.createElement("div");

        heart.innerHTML="❤️";

        heart.style.position="fixed";
        heart.style.left=Math.random()*100+"vw";
        heart.style.top="100vh";
        heart.style.fontSize=(20+Math.random()*25)+"px";
        heart.style.pointerEvents="none";
        heart.style.transition="all 6s linear";
        heart.style.zIndex="999";

        document.body.appendChild(heart);

        setTimeout(()=>{
            heart.style.transform=`translateY(-120vh) rotate(${Math.random()*360}deg)`;
            heart.style.opacity="0";
        },100);

        setTimeout(()=>{
            heart.remove();
        },6500);

    },350);

}