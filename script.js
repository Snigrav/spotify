console.log("Welcome to Spotify");
let songindex=0;
let audioelement=new Audio('1.mp3');
 let mastersongname=document.getElementById('mastersongname');


//audioelement.play();
let masterplay=document.getElementById('masterplay');
let myprogressbar=document.getElementById('progressbar');

let songitem=Array.from(document.getElementsByClassName('songitem'));

let songs=[
    { songname:"Dil ibadat", filePath: "songs/1.mp3", coverpath: "covers/1.jpg" },
    { songname:"Kahani Suno", filePath: "songs/2.mp3", coverpath: "covers/2.jpg" },
    { songname:"Kaho Na Kaho", filePath: "songs/3.mp3", coverpath: "covers/3.jpg" },
    { songname:"Duniya", filePath: "songs/4.mp3", coverpath: "covers/4.jpg" },
    { songname:"Baby", filePath: "songs/5.mp3", coverpath: "covers/bg2.jpg" },
    { songname:"Closer", filePath: "songs/6.mp3", coverpath: "covers/bg3.jpg" },
    { songname:"Hawayein", filePath: "songs/7.mp3", coverpath: "covers/bg4.jpg" },
]



masterplay.addEventListener('click',()=>{
    if(audioelement.paused || audioelement.currentTime<=0){
        audioelement.play();
        masterplay.classList.remove('fa-play');
        masterplay.classList.add('fa-pause-circle');
       
    }
    else{
        audioelement.pause();
        masterplay.classList.remove('fa-pause-circle');
        masterplay.classList.add('fa-play');
    }
})
audioelement.addEventListener('timeupdate',()=>{
progress= parseInt((audioelement.currentTime/audioelement.duration)*100);
myprogressbar.value=progress;
})

myprogressbar.addEventListener('change',()=>{
    audioelement.currentTime=(myprogressbar.value*audioelement.duration)/100;
})

const makeallplay=()=> {
    Array.from(document.getElementsByClassName('songitemplay')).forEach((element) => {
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play');
    })
}

Array.from(document.getElementsByClassName('songitemplay')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
        makeallplay();
        index=parseInt(e.target.id);
        mastersongname.innerText= songs[songindex].songname;
        e.target.classList.remove('fa-play');
        e.target.classList.add('fa-pause-circle');
        audioelement.src=`${index+1}.mp3`;
       //audioelement.src='2.mp3';
        audioelement.currentTime=0;
        audioelement.play();
        masterplay.classList.remove('fa-play');
        masterplay.classList.add('fa-pause-circle');
    })
})
document.getElementById('next').addEventListener('click',()=>{
    if(songindex >=6){
        songindex=0;
    }
    else{
        songindex += 1;
    }
    audioelement.src=`${songindex+1}.mp3`;
    mastersongname.innerText= songs[songindex].songname;
     audioelement.currentTime=0;
     audioelement.play();
     masterplay.classList.remove('fa-play');
     masterplay.classList.add('fa-pause-circle');
})
document.getElementById('previous').addEventListener('click',()=>{
    if(songindex <= 0){
        songindex=6;
    }
    else{
        songindex -= 1;
    }
    audioelement.src=`${songindex+1}.mp3`;
    //audioelement.src='2.mp3';
    mastersongname.innerText= songs[songindex].songname;
     audioelement.currentTime=0;
     audioelement.play();
     masterplay.classList.remove('fa-play');
     masterplay.classList.add('fa-pause-circle');
})



