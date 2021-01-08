import { useState, useEffect, useRef } from 'react';
import { Config } from '../../config';
import styles from './logo.module.scss';

const targetTitle = 'timaramazanov';

export const Logo = () => {
  const [title, setTitle] = useState('');
  const [cursorVisible, setCursorVisible] = useState(true);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    const nextChar = targetTitle[title.length];
    if (title.length === 0 && audioRef.current) {
      audioRef.current.currentTime = 0;
      audioRef.current.play();
    }
    if (nextChar) {
      const updTitle = title + nextChar;
      setTimeout(() => {
        setTitle(updTitle);
      }, 50);
    }
  }, [title]);



  useEffect(() => {
    setTimeout(() => {
      setCursorVisible(!cursorVisible);
    }, 500);
  }, [cursorVisible]);

  const onHover = () => {
    if (title === targetTitle) {
      setTitle('');
    }
  }

  return  <div className={styles.root}>
    <h1
      className={styles.title}
      onMouseEnter={onHover}
    >
      {title}
      {cursorVisible && <span className={styles.cursor}/>}
    </h1>
    <audio ref={audioRef} src={Config.media.audio.taps} autoPlay={true}/>
  </div>
}
