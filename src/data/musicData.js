import sidebar_pic_1 from '../img/sidebar_pic_1.JPG';
import sidebar_pic_2 from '../img/sidebar_pic_2.jpg';
import sidebar_pic_3 from '../img/sidebar_pic_3.JPG';
import sidebar_pic_4 from '../img/sidebar_pic_4.PNG';
import jay from '../img/jay.jpg';

import first_love from '../music/first_love.mp3';
import merry_christmas from '../music/merry_christmas.mp3';
import wind from '../music/wind.mp3';

let temp = "https://firebasestorage.googleapis.com/v0/b/mp3player-4dc8c.appspot.com/o/Catch_Up.mp3?alt=media&token=822d8b1a-5870-45a0-8845-18bf7b65f04a";

let songListData = [
  {
    songListName: '各節慶',
    songDetail: [
      {
        songName: '雙十節',
        songPicture: sidebar_pic_1,
        songAudio: temp
      },{
        songName: '中秋節',
        songPicture: sidebar_pic_2,
        songAudio: first_love
      },{
        songName: '聖誕節',
        songPicture: sidebar_pic_3,
        songAudio: merry_christmas
      },{
        songName: '元旦',
        songPicture: sidebar_pic_4,
        songAudio: temp
      }
    ]
  },
  {
    songListName: '周杰倫',
    songDetail: [
      {
        songName: '龍捲風',
        songPicture: jay,
        songAudio: wind
      },{
        songName: '楓',
        songPicture: jay,
        songAudio: temp
      },{
        songName: '半島鐵盒',
        songPicture: jay,
        songAudio: temp
      },{
        songName: '稻香',
        songPicture: jay,
        songAudio: temp
      },{
        songName: '青花瓷',
        songPicture: jay,
        songAudio: temp
      },{
        songName: 'Mojito',
        songPicture: jay,
        songAudio: temp
      }
    ]
  }
]

export default songListData;