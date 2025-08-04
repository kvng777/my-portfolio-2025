import styles from './ShinyText.module.scss';
import cn from 'classnames';

interface ShinyTextProps {
    text: string;
    disabled?: boolean;
    speed?: number;
    className?: string;
}

const ShinyText: React.FC<ShinyTextProps> = ({ text, disabled = false, speed = 5, className = '' }) => {
    const animationDuration = `${speed}s`;

    return (
        <div
            className={cn(styles.shinyText, disabled  ? 'disabled' : '', className)}
            style={{ animationDuration, backgroundColor: "darkgrey" }}
        >
            {text}
        </div>
    );
};

export default ShinyText;