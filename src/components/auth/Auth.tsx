import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

import { Button } from '../UI/button/Button';
import SignIn from './SignIn';
import Connect from './Connect';
import HexagonBoard3D from '../HexagonBoard3D';

import styles from './Auth.module.css';

export const Auth = () => {
    const [showAuth, setShowAuth] = useState<boolean>(false);
    const [skip, setSkip] = useState<boolean>(false);
    const [status, setStatus] = useState<boolean>(false);
    const [activeTab, setActiveTab] = useState<string>("sign_in");

    const handleDestroyHexagon = () => {
        setShowAuth(true);

        setTimeout(() => {
            setSkip(true);
        }, 7000);
    };

    useEffect(() => {
        if (showAuth && status) setSkip(true);
    }, [showAuth, status]);

    return (
        <>
            {!showAuth && <Button
                title="Change camera"
                customStyles={{
                    position: "fixed",
                    top: "30px",
                    left: "30px"
                }}
                onClick={() => setStatus(!status)}
                color="#92659b"
            />}
            {!skip && <HexagonBoard3D showAuth={showAuth} skip={skip} status={status} />}
            {skip && <div className={styles.authContainer}>
                <motion.svg
                    className={styles.logo}
                    viewBox="0 0 68 17"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    initial={{ opacity: 0, y: -40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                        duration: 1,
                        ease: "easeInOut"
                    }}
                >
                    <path
                        d="M26.4 17H3.99998L5.59998 13.8H29.6L26.4 17Z"
                        fill="#E94560"
                    />
                    <path
                        d="M61.8031 13.8H37.8031L36.2031 17H58.6031L61.8031 13.8Z"
                        fill="#E94560"
                    />
                    <path
                        d="M25.6 11.2V6.4H28.8V12.8L25.6 16H3.2L0 12.8H24L25.6 11.2ZM0 3.2L3.2 0H25.6L28.8 3.2H0Z"
                        fill="#E9E8E8"
                    />
                    <path
                        d="M35.2031 11.2L36.8031 12.8H60.8031L57.6031 16H35.2031L32.0031 12.8V6.4H35.2031V11.2ZM32.0031 3.2L35.2031 0H57.6031L60.8031 3.2H32.0031Z"
                        fill="#E9E8E8"
                    />
                    <circle cx="66" cy="14" r="2" fill="#E94560" />
                </motion.svg>
                <motion.div 
                    className={styles.authModal}
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                        duration: 1,
                        ease: "easeInOut"
                    }}
                >
                    <div className={styles.tabs}>
                        <div 
                            className={styles.tab} 
                            onClick={() => { setActiveTab('sign_up') }}    
                        >Connect Wallet</div>
                        <div 
                            className={styles.tab} 
                            onClick={() => { setActiveTab('sign_in') }}
                        >Login With Email</div>
                    </div>
                    <div className={styles.tabContent}>
                        {activeTab === 'sign_up' && <Connect />}
                        {activeTab === 'sign_in' && <SignIn />}
                    </div>
                </motion.div>
            </div>}
            {!showAuth && <Button
                title="Skip Intro"
                customStyles={{
                    position: "fixed",
                    bottom: "30px",
                    right: "30px"
                }}
                onClick={handleDestroyHexagon}
                color="#E94560"
            />}
        </>
    );
};


