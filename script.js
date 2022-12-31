let songIndex=0;
let audioElement=new Audio('songs/1.mp3');
let masterPlay=document.getElementById('masterPlay');
let myProgressBar=document.getElementById('myProgressBar');
let gif=document.getElementById('gif');
let songItems=Array.from(document.getElementsByClassName('songItem'));
let songs=[
    {songName: 'Let Me Love You', filepath:'songs/1.mp3', coverpath:'covers/1.jpg',duration:'3:26'},
    {songName: 'Rockabye', filepath:'songs/2.mp3', coverpath:'covers/2.jpg',duration:'4:13'},
    {songName: 'Same Old Love', filepath:'songs/3.mp3', coverpath:'covers/3.jpg',duration:'3:48'},
    {songName: 'We Dont Talk Anymore', filepath:'songs/4.mp3', coverpath:'covers/4.jpg',duration:'3:50'},
    {songName: 'Once Upon A Time', filepath:'songs/5.mp3', coverpath:'covers/5.jpg',duration:'2:23'},
    {songName: 'How Long', filepath:'songs/6.mp3', coverpath:'covers/6.jpg',duration:'3:30'},
    {songName: 'Wolves', filepath:'songs/7.mp3', coverpath:'covers/7.jpg',duration:'3:17'},
    {songName: 'New Rules', filepath:'songs/8.mp3', coverpath:'covers/8.jpg',duration:'3:29'},
    {songName: 'Friends', filepath:'songs/9.mp3', coverpath:'covers/9.jpg',duration:'3:25'},
    {songName: 'Blank Space', filepath:'songs/10.mp3', coverpath:'covers/10.jpg',duration:'4:35'}
]
// songItems.forEach((element,i)=>{
//     element.getElementsByTagName('img')[0].src=songs[i].coverpath;
//     element.getElementsByClassName('songName')[0].innerText=songs[i].songName;
// })
masterPlay.addEventListener('click',()=>{
    if(audioElement.paused||audioElement.currentTime<=0)
    {
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity=1;

    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity=0;  
    }
})
audioElement.addEventListener('timeupdate',()=>{
    progress=parseInt((audioElement.currentTime/audioElement.duration)*100);
    myProgressBar.value=progress;
})
myProgressBar.addEventListener('click',()=>{
    audioElement.currentTime=myProgressBar.value * audioElement.duration/100;
})

const makeAllPlays=()=>{
Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
        element.classList.remove('fa-pause-circle'); 
        element.classList.add('fa-play-circle');

   })
}
Array.from(document.getElementsByClassName('songItemPlay')).forEach(element => {
    element.addEventListener('click',(e)=>{
        makeAllPlays();
        songIndex=parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src=`songs/${songIndex+1}.mp3`;
        mastersongName.innerText=songs[songIndex].songName;
        audioElement.currentTime=0;
          audioElement.play();
          masterPlay.classList.remove('fa-play-circle');
          masterPlay.classList.add('fa-pause-circle');
          
    })
});
document.getElementById('next').addEventListener('click' ,()=>{
    if(songIndex>10)
    {
        songIndex=0;
    }
    else{
        songIndex+=1;
    }
    audioElement.src=`songs/${songIndex+1}.mp3`;
    mastersongName.innerText=songs[songIndex].songName;
    audioElement.currentTime=0;
    audioElement.play();
    gif.style.opacity=1;
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');


} )
document.getElementById('previous').addEventListener('click', ()=>{
    if(songIndex<=0)
    {
       songIndex=10;
    }
    else{
        songIndex-=1;
    }
    audioElement.src=`songs/${songIndex+1}.mp3`;
    mastersongName.innerText=songs[songIndex].songName;
    audioElement.currentTime=0;
    audioElement.play();
    gif.style.opacity=1;
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})
