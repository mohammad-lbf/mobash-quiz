import React, { useRef } from 'react';
import Image from 'next/image';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import styles from './ProfileCard.module.css';

const ProfileCard = () => {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.5,
    });

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <i className="bi bi-three-dots"></i>
                <span className={styles.username}>english_with_mobash</span>
                <i className="bi bi-bell"></i>
            </div>
            <div className={styles.profile}>
                <div className={styles.avatar}>
                    <Image alt='instagram-profile-image' src={"/images/instagram-profile.jpg"} width={250} height={250} />
                </div>
                <div className={`${styles.info} flex-end`}>
                    <div className={styles.stat}>
                        <span ref={ref}>
                            {inView ? (
                                <CountUp end={85} duration={5} start={0} separator="," />
                            ) : (
                                <span>0</span>
                            )}
                        </span>
                        <span className={`${styles.label} ${styles.bold}`}>Following</span>
                    </div>
                    <div className={`${styles.stat} mx-4`}>
                        <span ref={ref}>
                            {inView ? (
                                <CountUp end={1820} duration={5} start={0} separator="," />
                            ) : (
                                <span>0</span>
                            )}
                        </span>
                        <span className={`${styles.label} ${styles.bold}`}>Followers</span>
                    </div>
                    <div className={styles.stat}>
                        <span ref={ref}>
                            {inView ? (
                                <CountUp end={52} duration={5} start={0} separator="," />
                            ) : (
                                <span>0</span>
                            )}
                        </span>
                        <span className={`${styles.label}`}>Posts</span>
                    </div>
                </div>
            </div>
            {/* <div className={`${styles.details} align-items-start`}>
                <span>امیرحسین مبشری | زبان انگلیسی</span>
                <span>معلم خصوصی/معلم</span>
                <span>آموزش گرامر، لغات و اصطلاحات انگلیسی</span>
                <span style={{direction:"ltr"}}>Just an English learner!</span>
                <span>Here to share the journey</span>
                <span>👇راه ارتباطی با من👇</span>
                <a className='text-primary fw-bold' rel="noreferrer" href="https://linktr.ee/Mobash">linktr.ee/Mobash</a>
            </div> */}
        </div>
    );
};

export default ProfileCard;
