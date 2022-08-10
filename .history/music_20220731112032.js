// Chuyển tiếp giữa các page
const discover = document.querySelector('.directions__discover');
const Homeicon = document.querySelector('.directions__home');
const Personalicon = document.querySelector('.directions__personal');   
const TotalHome = document.querySelector('.Total__home');
const TurnListSong = document.querySelector('.list__Song');
const HomePersonal = document.querySelector('.Home__Personal')
Personalicon.addEventListener('click',function(){
    HomePersonal.classList.add('showPersonal');
    TotalHome.classList.add('hideHome');
    TurnListSong.classList.remove('ShowDiscover');
    Homeicon.classList.remove('showDirec');
    discover.classList.remove('showDirec');
    Personalicon.classList.add('showDirec');
})


document.querySelector('.list__song-icon-back').addEventListener('click',function(){
    TurnListSong.classList.remove('ShowDiscover');
    TotalHome.classList.remove('hideHome');
   discover.classList.remove('showDirec');
    Homeicon.classList.add('showDirec');
});
document.querySelector('.history-icon-back').addEventListener('click',function(){
    TotalHome.classList.remove('hideHome');
    Personalicon.classList.remove('showDirec');
    HomePersonal.classList.remove('showPersonal')
    Homeicon.classList.add('showDirec');
})
Homeicon.addEventListener('click',function(){
    TurnListSong.classList.remove('ShowDiscover');
    HomePersonal.classList.remove('showPersonal');
    TotalHome.classList.remove('hideHome');
    discover.classList.remove('showDirec');
    Personalicon.classList.remove('showDirec');
    Homeicon.classList.add('showDirec');
})
//
const playBtn = document.querySelector('.circle-play');
const Btnmini = document.querySelector('.playing-btn');
const song = document.querySelector('.song');
const nextSongBtn = document.querySelector('.circle-next');
const PrevSongBtn = document.querySelector('.circle-previous');
const Cd = document.querySelector('.img-child');
const range = document.querySelector('.range')
const namesong = document.querySelector('.name-song')
const nameauthor = document.querySelector('.name-author')
const imghuge = document.querySelector('.img-child')
const namesongTiny = document.querySelector('.playing-header')
const namesigerTiny = document.querySelector('.playing-singer')
const imgTiny = document.querySelector('.img-playing')
const remainingTime = document.querySelector('.remaining');
const durationTime = document.querySelector('.duration');
const MiniBtnPlayUnder = document.querySelector('.total-playing');
const ListSongAlbum = document.querySelector('.list__song--album');
const PlayNow = document.querySelector('.play-now');
const OutPlayNow = document.querySelector('.Play__now-icon-back');
const HomeDirec = document.querySelector('.Home__Music');
const FieldSongs = document.querySelectorAll('.item__song--field');
const ShowReferNext = document.querySelector('.refer__header');
const RepeatBtn = document.querySelector('.repeatBtn');
const RandomBtn = document.querySelector('.randomBtn');
const PlayingBtnminifixed = document.querySelector('.playing-btn__mini');
const imgPlayingMini = document.querySelector('.img-playing__mini');
const NamePlayingMini = document.querySelector('.playing-header__mini');
const SingerPlayingMini = document.querySelector('.playing-singer__mini');
const PlayingMiniFixed = document.querySelector('.total__AllplayingMini');
const SearchSongs = document.querySelector('.list__song--search-icon');
const FieldSongsVn = document.querySelector('.container__field-vn');
const FieldSongsUSUK = document.querySelector('.container__field-usuk');
const FieldSongsKR = document.querySelector('.container__field-kr');
const recentSongsList = document.querySelector('.recent__songs-list');
let timer;
var ismusic = 'VN';
isrepeat = true;
israndom = true;
let recentList = [];
discover.addEventListener('click',function(){
    TurnListSong.classList.add('ShowDiscover');
    HomePersonal.classList.remove('showPersonal');
    TotalHome.classList.add('hideHome');
    Homeicon.classList.remove('showDirec');
    Personalicon.classList.remove('showDirec');
   discover.classList.add('showDirec');
   FieldSongs.forEach((fields)=>{
    // document.querySelector('.item__song--field.showField').classList.remove('showField');
    // fields.classList.add('showField');
    const ValueField = fields.value;
    
        console.log(ValueField)
    // if(ValueField == ismusic){
    //     console.log(ValueField)
    // }
    //  RenderListSong(Songs[ismusic]);
    //  scrollFunctionMusic();
    //  RenderTotalSongs();
   
})
});
if (!localStorage.getItem('recentListSongs')) {
    localStorage.setItem('recentListSongs', JSON.stringify(recentList));
} else {
    recentList = JSON.parse(localStorage.getItem('recentListSongs'));
}
const SevenColor = document.querySelector('.contain-img');// add 7 màu vào
// recent songs
function RenderIndexRecent (CurrentIndex){
    recentList.unshift(CurrentIndex);
    GetLocalstrorage();
}
function GetLocalstrorage(){
    const independentsong = recentList.filter((value, index) => {
        const _value = JSON.stringify(value);
        return index === recentList.findIndex(obj => {
          return JSON.stringify(obj) === _value;
        });
      });
    if(recentList.length > 20){
        recentList.pop();
    }
    if(recentList !== []){
        document.querySelector('.isrecent-song').style.display = 'none';
    }
    localStorage.setItem('recentListSongs',JSON.stringify(independentsong));
    RenderListSongRecent(independentsong);
}
GetLocalstrorage();
function RenderListSongRecent (recentSong){
    const htmls = recentSong.map((song,index )=> {
        return ` <li class="song__recent--item" data-field = "${song.field}" data-index = "${song.id-1}"">
        <div class="song__album-right">
           <div class="album__item--img">
               <img src="${song.image}" alt="" class="album_item--img-child">
           </div>
           <div class="song__album--detail">
               <h3 class="song__album--title">${song.titleSong}</h3>
               <p class="song__album-author">${song.author}</p>
           </div>
        </div>
        <div class="song__album-left">
            <span class="song__album-icon">
               <i class='bx bx-dots-horizontal-rounded'></i>
            </span>
        </div>
         </li>`
    });
    recentSongsList.innerHTML = htmls.join('');
}
// nhấn vào mấy bài trong nghe gan day no sẽ phát
recentSongsList.onclick = function(e){
    const SongNode = e.target.closest('.song__recent--item');
    const OptionNode = e.target.closest('.song__album-icon')
    if(SongNode || OptionNode){
        // xử lí khi ấn vô bài hát trong list
       if(SongNode && !OptionNode){
            HomePersonal.classList.remove('showPersonal');
                HomeDirec.classList.add('hide');
                PlayNow.classList.remove('hide');
                PlayingMiniFixed.classList.add('hide');
                ismusic = SongNode.getAttribute('data-field');
                indexSongs = SongNode.dataset.index;
                RenderSongPlaying([indexSongs]);
                RenderMiniSongUnder(indexSongs);
               RenderIndexRecent(Songs[ismusic][indexSongs]);
               isplaySong = true;
               playPause();
               console.log(ismusic);
            //   console.log(RecentSongvalue);
 }
       // xử lí khi nhấn vô dấu ba chấm list
    if(OptionNode){
     alert('Tính năng Chưa được làm');
    }
    }
}
//Render thể loại vn 
function RenderPosterVN(PosterSongsVn){
    const ListPostervn = PosterSongsVn.map((song,index )=> {
        if(song.id <= 10){
            return` <div class="contaner-field-img" data-index = "${song.id-1}">
            <img src="${song.image}" alt="" class="field__img-item">
          </div>`
        }
    });
    FieldSongsVn.innerHTML = ListPostervn.join('');
}
//click vô bài nào nó ra bài đó trong poster
FieldSongsVn.onclick = function(e){
    const SongNode = e.target.closest('.contaner-field-img');
    if(SongNode){ 
        indexSongs = SongNode.dataset.index;
        // xử lí khi ấn vô bài hát trong poster
        HomeDirec.classList.add('hide');
        PlayNow.classList.remove('hide');
        TotalHome.classList.add('hideHome');
         PlayingMiniFixed.classList.add('hide');
         ismusic = 'VN';
         RenderSongPlaying(indexSongs);
         isplaySong = true;
         playPause();
         RenderIndexRecent(Songs[ismusic][indexSongs]);
    }
}
//    Render thể loại usuk
function RenderPosterUSUK(PosterSongsUSUK){
    const ListPosterUSUK = PosterSongsUSUK.map((song,index )=> {
        if(song.id <= 30){
            return` <div class="contaner-field-img" data-index = "${song.id-1}">
            <img src="${song.image}" alt="" class="field__img-item">
          </div>`
        }
    });
    FieldSongsUSUK.innerHTML = ListPosterUSUK.join('');
}
// click vô bài nào nó ra bài đó trong poster
FieldSongsUSUK.onclick = function(e){
    const SongNode = e.target.closest('.contaner-field-img');
    if(SongNode){ 
        indexSongs = SongNode.dataset.index;
        // xử lí khi ấn vô bài hát trong poster
        HomeDirec.classList.add('hide');
        PlayNow.classList.remove('hide');
        TotalHome.classList.add('hideHome');
         PlayingMiniFixed.classList.add('hide');
         ismusic = 'USUK';
         RenderSongPlaying(indexSongs);
         isplaySong = true;
         playPause();
         RenderIndexRecent(Songs[ismusic][indexSongs]);
    }
}
//Remder thể loại vn
function RenderPosterKR(PosterSongsKR){
    const ListPosterKR = PosterSongsKR.map((song,index )=> {
        if(song.id %3 == 0 && song.id < 30){
            return` <div class="contaner-field-img" data-index = "${song.id-1}">
            <img data-lazy="${song.image}" alt="" class="field__img-item">
          </div>`
        }
    });
    FieldSongsKR.innerHTML = ListPosterKR.join('');
}
FieldSongsKR.onclick = function(e){
    const SongNode = e.target.closest('.contaner-field-img');
    if(SongNode){ 
        indexSongs = SongNode.dataset.index;
        // xử lí khi ấn vô bài hát trong poster
        HomeDirec.classList.add('hide');
        PlayNow.classList.remove('hide');
        TotalHome.classList.add('hideHome');
         PlayingMiniFixed.classList.add('hide');
         ismusic = 'KR';
         RenderSongPlaying(indexSongs);
         isplaySong = true;
         playPause();
         RenderIndexRecent(Songs[ismusic][indexSongs]);
    }
}
RenderPosterKR(Songs.KR);
RenderPosterVN(Songs.VN);
RenderPosterUSUK(Songs.USUK);
// RenderPosterUSUK(Songs.USUK);
// tính năng search
SearchSongs.oninput = function(){
    let  SearchValue = SearchSongs.value.trim();
     const SearchListSong = Songs[ismusic].filter(NameSongValue =>{
        return NameSongValue.titleSong.toUpperCase().includes(SearchValue.toUpperCase()) || NameSongValue.author.toUpperCase().includes(SearchValue.toUpperCase());
     })
     RenderListSong(SearchListSong);
}
// Render ra tính số lượng Tổng số bài hát
function RenderTotalSongs(){
  var TotalSongs =  Songs[ismusic].length;
  document.querySelector('.total__songs').innerText = `(${TotalSongs})`;
}
// show cái đang phát ra
PlayingMiniFixed.onclick = function(e){
    const SongNodeMini = e.target.closest('.contain-playing__mini');
    const playPauseMini = e.target.closest('.playing-btn__mini')
    if(SongNodeMini || playPauseMini){
        // xử lí khi ấn vô bài hát đang phát sẽ có bảng điều khiển xuất hiện
       if(SongNodeMini && !playPauseMini){
        TurnListSong.classList.remove('ShowDiscover');
        HomePersonal.classList.remove('showPersonal');
        TotalHome.classList.add('hideHome');
        HomeDirec.classList.add('hide');
        PlayNow.classList.remove('hide');
        PlayingMiniFixed.classList.add('hide');
        isplaySong = true;
        playPause();
 }
       // xử lí khi pause ở cái nhỏ
    if(playPauseMini){
        playPause();
    }
    }
}
// RenderTotalSongs();
// chọn thể loại nhạc 
window.onscroll = function() {scrollFunctionMusic()};// hien scroll khi ng dung cuon chuot
function scrollFunctionMusic(){
    ListSongAlbum.scrollTop = 0;
}
FieldSongs.forEach((fields,index)=>{
   fields.onclick = function(){
    document.querySelector('.item__song--field.showField').classList.remove('showField');
    fields.classList.add('showField');
    const ValueField = fields.value;
    if(ValueField == 'VN'){
        ismusic = 'VN'
    }else if(ValueField == 'USUK'){
        ismusic = 'USUK'
    }else if(ValueField == 'KR'){
        ismusic = 'KR'
    }
     RenderListSong(Songs[ismusic]);
     scrollFunctionMusic();
     RenderTotalSongs();
   }
})
//RenderListSong
function RenderListSong (arrSong){
    const htmls = arrSong.map((song,index )=> {
        return ` <li class="song__album--item" data-field = "${song.field}" data-index = "${song.id-1}">
        <div class="song__album-right">
           <div class="album__item--img">
               <img src="${song.image}" alt="" class="album_item--img-child">
           </div>
           <div class="song__album--detail">
               <h3 class="song__album--title">${song.titleSong}</h3>
               <p class="song__album-author">${song.author}</p>
           </div>
        </div>
        <div class="song__album-left">
            <span class="song__album-icon">
               <i class='bx bx-dots-horizontal-rounded'></i>
            </span>
        </div>
         </li>`
    });
    ListSongAlbum.innerHTML = htmls.join('');
}
RenderListSong(Songs[ismusic]);
RenderTotalSongs();
//khi click bài nào nó render ra bài đó
ListSongAlbum.onclick = function(e){
    const SongNode = e.target.closest('.song__album--item');
    const OptionNode = e.target.closest('.song__album-icon')
    if(SongNode || OptionNode){
        // xử lí khi ấn vô bài hát trong list
       if(SongNode && !OptionNode){
        TurnListSong.classList.remove('ShowDiscover');
        HomeDirec.classList.add('hide');
        ismusic = SongNode.getAttribute('data-field')
        indexSongs = SongNode.dataset.index;
        PlayNow.classList.remove('hide');
         PlayingMiniFixed.classList.add('hide')
         RenderSongPlaying(indexSongs);
         RenderMiniSongUnder(indexSongs);
       isplaySong = true;
        playPause();
      RenderIndexRecent(Songs[ismusic][indexSongs]);
 }
       // xử lí khi nhấn vô dấu ba chấm list
    if(OptionNode){
     alert('Tính năng Chưa được làm');
    }
    }
}
// RandomSongs bật tắt
RandomBtn.addEventListener('click',RandomSongs)
function RandomSongs(){
    if(israndom){
        RandomBtn.style.color = 'orangered';
        israndom = false;
    }else{
        RandomBtn.removeAttribute('style');
        israndom = true;
    }
}
// hàm chơi random
function PlayRandomSongs(){
    var NewIndex ;
    do{
        NewIndex = Math.floor(Math.random()*Songs[ismusic].length);
    }while(NewIndex == indexSongs );
    indexSongs = NewIndex ;
    playPause();
}
// RepeatSongs  
RepeatBtn.addEventListener('click',RepeatSongs)
function RepeatSongs(){
    if(isrepeat){
        RepeatBtn.style.color = 'orangered';
        isrepeat = false;
    }else{
        RepeatBtn.removeAttribute('style');
        isrepeat = true;
    }
}
// thoát khỏi play Now 
OutPlayNow.addEventListener('click',function(){
    PlayNow.classList.add('hide');
    HomeDirec.classList.remove('hide');
    if(document.querySelector('.directions__home.showDirec')){
        TotalHome.classList.remove('hideHome');
    }
    if(document.querySelector('.directions__discover.showDirec')){
        TurnListSong.classList.add('ShowDiscover');
    }
    if(document.querySelector('.directions__personal.showDirec')){
        HomePersonal.classList.add('showPersonal');
    }
    PlayingMiniFixed.classList.remove('hide');
    ListSongAlbum.style.height = '350px'
    // // isplaySong = false;
    // playPause();
})
// khi thoát ra khỏi playnow sẽ có 1 màn hình nhỏ

// console.log(Songs[ismusic][1])
var isplaySong = true;
var indexSongs = 0;
// khi bài hát hết
song.addEventListener('ended',handleChangeSong);
function handleChangeSong(){
    if(!isrepeat){
        isplaySong = true;
        playPause();
    }else{
         directionSong(1);
    }
}
// btn bật tắt bài hát
Btnmini.addEventListener('click',playPause);
playBtn.addEventListener('click',playPause);
function playPause(){
   if(isplaySong){
       song.play();
       playBtn.classList.add('hide');
       Btnmini.classList.add('hide');
       PlayingBtnminifixed.classList.add('hide');
       SevenColor.classList.add('colorSeven');
       CdThumbAnimate.play();
       timer = setInterval(handlePlayTimer,500);
       isplaySong = false;
   }else{
       song.pause();
       playBtn.classList.remove('hide');
       Btnmini.classList.remove('hide');
       PlayingBtnminifixed.classList.remove('hide');
       SevenColor.classList.remove('colorSeven');
       CdThumbAnimate.pause();
       clearInterval(timer);
       isplaySong = true;
   }
   if(!isrepeat){
    Btnmini.classList.remove('hide');
    Btnmini.removeEventListener('click',playPause);
  }
}
// btn NEXT AND PRIVIOUS
nextSongBtn.addEventListener('click',function(){
    directionSong(1);
})
document.querySelector('.forward__Mini-btn').addEventListener('click',function(){
    directionSong(1);
})
PrevSongBtn.addEventListener('click',function(){
    directionSong(-1)
})
function directionSong(dir){
    if(dir === 1){
        if(!israndom){
            PlayRandomSongs();
        } 
        isplaySong =  true;
        indexSongs ++;
        if(indexSongs > Songs[ismusic].length -1){
            indexSongs = 0; 
        }
        ShowReferNext.classList.remove('ShowNext');
    }else if(dir === -1){
        if(!israndom){
            PlayRandomSongs();
        } 
        indexSongs --;
        isplaySong =  true;
        if(indexSongs < 0){
            indexSongs = Songs[ismusic].length -1;
        }
        ShowReferNext.classList.remove('ShowNext');
    }
    RenderIndexRecent(Songs[ismusic][indexSongs]);
    RenderSongPlaying(indexSongs);
  playPause();
  isplaySong =  true;
}
// cd quay vòng vòng
const CdThumbAnimate = Cd.animate([
    {transform : 'rotate(360deg)'}
],{
    duration : 10000,
    iterations : Infinity
});
CdThumbAnimate.pause()
// setInterval(handleRange,100);
// playTimer
// tạo 1 hàm xư li duration voi currenttime de lay tg 
// tạo 1 hàm format đe in time tu durattion voi currenttime ra
function handlePlayTimer(){
    const {duration , currentTime } = song ;
    range.max = duration;
    range.value = currentTime;
    remainingTime.innerText =  FormatTimer(currentTime);
    if(!duration){
        durationTime.innerText = '00:00';
    }else{
        durationTime.innerText = FormatTimer(duration);
    }
    handleColorRange(duration,range);
    // console.log(range.value);
}
// xữ lí thanh màu chạy theo
function handleColorRange(TotalTime,RangeTime){
    var divisionDuration = TotalTime/100; // lay 174/100 = 1.74 là 1% = 1.74
    var CacularRangePercent = RangeTime.value/divisionDuration;// lấy giá trị chia cho 1.74 là ra số %;
    var sliderValue = CacularRangePercent;
    var colorfulRange = `${sliderValue}%`
        document.querySelector('.range_progress').style.width = colorfulRange;
        document.querySelector('.slider-thumb').style.left = colorfulRange ;
        document.querySelector('.background__range-mini').style.width = colorfulRange ;
        if(sliderValue < 20){
            Btnmini.addEventListener('click',playPause);
        }
        if(sliderValue >= 20){
            // đoán trc random
            if(!israndom){
             return 
            }
            if(indexSongs > Songs[ismusic].length -1){
                NewIndex = Math.floor(Math.random()*Songs[ismusic].length);
                indexSongs = NewIndex ;
            }else if(indexSongs == Songs[ismusic].length -1){
                indexSongs = -1;
            }
        Btnmini.removeEventListener('click',playPause);
        ShowReferNext.classList.add('ShowNext');
        RenderNextSongMini(indexSongs);
        }
        else{
            ShowReferNext.classList.remove('ShowNext');
            }
        // console.log(indexSongs)
        // console.log(sliderValue);
}
range.oninput = function(){
    song.currentTime = range.value;
    handlePlayTimer();
  isplaySong =  true;
}
// su kien ccho thanh range
// range.addEventListener('change',handleRange);
// function handleRange(){
//     song.currentTime = range.value;
//     handlePlayTimer();
// //   isplaySong =  true;
// }
handlePlayTimer();
function FormatTimer (number){
    var munites = Math.floor(number/60);
    var second = Math.floor(number - munites*60);
    return `${munites < 10 ? `0${munites}`: munites}:${second < 10 ? `0${second}`: second}`
}
// hàm render các bài trong list hiện lên trang chủ
function RenderSongPlaying(indexSongs){
    song.setAttribute('src',Songs[ismusic][indexSongs].audio);
    imghuge.setAttribute('src',Songs[ismusic][indexSongs].image);
    namesong.innerText = Songs[ismusic][indexSongs].titleSong;
    nameauthor.innerText = Songs[ismusic][indexSongs].author;
    RenderMiniSongUnder(indexSongs);
    RenderMiniSongPlaying(indexSongs);
    console.log(indexSongs);
} 
// render đang phát ở dưới 
function RenderMiniSongUnder(indexSongs){
    imgTiny.setAttribute('src',Songs[ismusic][indexSongs].image);
    namesongTiny.innerText = Songs[ismusic][indexSongs].titleSong;
    namesigerTiny.innerText = Songs[ismusic][indexSongs].author;
}
// Renderplayingsong 
function RenderMiniSongPlaying(indexSongs){
    imgPlayingMini.setAttribute('src',Songs[ismusic][indexSongs].image);
    NamePlayingMini.innerText = Songs[ismusic][indexSongs].titleSong;
    SingerPlayingMini.innerText = Songs[ismusic][indexSongs].author;
}
RenderSongPlaying(indexSongs);
// Render Next Song Mini
function RenderNextSongMini(indexSongs){
   indexSongs ++ ;
   RenderMiniSongUnder(indexSongs);
    Btnmini.classList.remove('hide');
    // MiniBtnPlayUnder.classList.add('showminiSong'); tạm thời đóng translateY
//   console.log(indexSongs);
}