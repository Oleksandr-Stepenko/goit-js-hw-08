import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const STORAGE_KEY = 'videoplayer-current-time';

player.on(
  'timeupdate',
  throttle(function (data) {
    localStorage.setItem(STORAGE_KEY, data.seconds);
  }, 1000)
);

window.addEventListener('load', function () {
  const currentTime = localStorage.getItem(STORAGE_KEY);
  if (currentTime) {
    player.setCurrentTime(currentTime);
  } else {
    player.setCurrentTime(0);
  }
});
