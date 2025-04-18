import styles from "./Container.module.css";

interface ContainerProps {
    children?: any;
    color?: string;
}

export const Container = ({ children, color }: ContainerProps) => {
    return (
        <div className={styles.container}>
            <svg
                className={styles.svg}
                viewBox="0 0 252 70"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M98.2606 15.4389L98.3725 15.5H98.5H139.5H139.693L139.836 15.37L145.193 10.5H251.5V49.7929L231.793 69.5H10.5V12.5H92.8725L98.2606 15.4389Z"
                    stroke={color}
                />
                <path 
                    d="M0 2H33L38.5 5H89.5L95 0H242V40L222 60H0V2Z" 
                    fill={color} 
                />
            </svg>
            {children}
        </div>
    )
};