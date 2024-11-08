interface SlantProps {
    color: string;
    height: string;
    style?: React.CSSProperties;
}

export const Slant = ({ color, height, style }: SlantProps) => {
    return (
        <div 
            className={`w-full bg-${color}`}
            style={{ 
                marginTop: `-${height}`,
                height: height,
                transform: `skewY(-5.16deg)`,
                transformOrigin: 'top right',
                ...style
            }}
        />
    )
}
