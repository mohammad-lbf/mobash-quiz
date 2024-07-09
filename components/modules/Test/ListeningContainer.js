import styles from './AudioPlayer.module.css';
import React, { useState, useRef, useEffect } from 'react';
// import testData from '../../../assets/Tests/Public/A1HighLevel'
// src={`/audios/tests/${category}/${testLevel}/sound.mp3`



const AudioPlayer = ({listening}) => {
    const [isPlaying, setIsPlaying] = useState(false);
    const [duration, setDuration] = useState(0);
    const [currentTime, setCurrentTime] = useState(0);
    const audioRef = useRef(null);
    const progressRef = useRef(null);


    useEffect(() => {
        const audio = audioRef.current;
        const setAudioData = () => {
            setDuration(audio.duration);
            setCurrentTime(audio.currentTime);
        };

        const setAudioTime = () => setCurrentTime(audio.currentTime);

        audio.addEventListener('loadeddata', setAudioData);
        audio.addEventListener('timeupdate', setAudioTime);

        return () => {
            audio.removeEventListener('loadeddata', setAudioData);
            audio.removeEventListener('timeupdate', setAudioTime);
        };
    }, []);

    const togglePlay = () => {
        const audio = audioRef.current;
        if (isPlaying) {
            audio.pause();
        } else {
            audio.play();
        }
        setIsPlaying(!isPlaying);
    };

    const handleProgressClick = (event) => {
        const progress = progressRef.current;
        const width = progress.clientWidth;
        const clickX = event.nativeEvent.offsetX;
        const duration = audioRef.current.duration;
        audioRef.current.currentTime = (clickX / width) * duration;
    };

    const formatTime = (time) => {
        const minutes = Math.floor(time / 60);
        const seconds = Math.floor(time % 60);
        return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    };

    return (
        <div className={`${styles.audioPlayer} my-3`}>
            <audio ref={audioRef} src={listening}></audio>
            <div className={styles.controls}>
                <button onClick={togglePlay} className={styles.playButton}>
                    {isPlaying ? (
                        <i className="bi bi-pause-fill"></i>
                    ) : (
                        <i className="bi bi-play-fill"></i>
                    )}
                </button>
                <div className={styles.progressContainer} onClick={handleProgressClick} ref={progressRef}>
                    <div className={styles.progressBar} style={{ width: `${(currentTime / duration) * 100}%` }}></div>
                </div>
                <div className={styles.time}>
                    {formatTime(currentTime)} / {formatTime(duration)}
                </div>
            </div>
        </div>
    );
};

export default AudioPlayer;