export const Config = {
  mobileBreakpoint: 768,
  labels: {
    name: 'timaramazanov'
  },
  media: {
    audio: {
      taps: '/audio/taps.mp3'
    },
    img: {
      home: '/img/turky.jpg',
      photos: {
        // turky
      }
    }
  },
  pages: {
    home: '/',
    photo: '/photo',
    music: '/music'
  }
}

export type ConfigType = typeof Config;
