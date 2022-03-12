 console.log("welcome to beatz");

//  initialize the variable
 let songIndex = 0;
 let audioElement = new Audio('assets/audio/1.mp3');
 let masterPlay = document.getElementById('masterPlay');
 let MyProgressBar = document.getElementById('MyProgressBar');
 let songItems = Array.from(document.getElementsByClassName('songitem'));


let songs = [
    
        {songName :"TheFatRat - The Storm" , filePath: "assets/audio/1.mp3" , coverPath:"assets/image/cover1.jpg"},
        {songName :"Darkside" , filePath: "assets/audio/2.mp3" , coverPath:"assets/image/cover2.jpg"},
        {songName :"PLEVNE MARŞI" , filepath: "assets/audio/3.mp3" , coverPath:"assets/image/cover3.jpg"},
        {songName :"Yalan" , filePath: "assets/audio/4.mp3" , coverPath:"assets/image/cover4.jpg"},
        {songName :"Legends Are Made" , filePath: "assets/audio/5.mp3" , coverPath:"assets/image/cover5.jpg"},
        {songName :"Legends Never Die" , filePath: "assets/audio/6.mp3" , coverPath:"assets/image/cover6.jpg"},
        {songName :"Closer (Launchpad Cover)" , filePath: "assets/audio/7.mp3" , coverPath:"assets/image/cover7.jpg"},
        {songName :"TheFatRat - Stronger" , filePath: "assets/audio/8.mp3" , coverPath:"assets/image/cover8.jpg"},

    
]

// Handle play/pause click
masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        masterPlay.style.color = "#C3003F";
        masterPlay.style.transition = "all .5s";

    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        masterPlay.style.color = "#000";

    }
})

// listen to Events
audioElement.addEventListener('timeupdate', ()=>{
    // Update Seekbar
    progress = parseInt((audioElement.currentTime/audioElement.duration)* 100); 
        MyProgressBar.value = progress; })

 MyProgressBar.addEventListener('change', ()=>{
     audioElement.currentTime = MyProgressBar.value * audioElement.duration/100;

 })


 songItems.forEach((element, i)=>{ 
     element.getElementsByTagName("img")[0].src = songs[i].coverPath; 
     element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
 })
 



 const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songitemplay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })
}

 Array.from(document.getElementsByClassName('songitemplay')).forEach((element)=>{
    element.addEventListener('click', (e)=>{ 
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src = `assets/audio/${songIndex+1}.mp3`;
        audioElement.currentTime = 0;
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');


    })
})

document.getElementById('next').addEventListener('click', ()=>{
    if(songIndex>=9){
        songIndex = 0
    
    }
    else{
        songIndex += 1;
        
    }
    audioElement.src = `assets/audio/${songIndex+1}.mp3`;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');

})

document.getElementById('previous').addEventListener('click', ()=>{
    if(songIndex<=0){
        songIndex = 0
    }
    else{
        songIndex -= 1;
    }
    audioElement.src = `assets/audio/${songIndex+1}.mp3`;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})