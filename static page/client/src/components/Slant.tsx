export const Slant = () => {
    return (
        <>
            <div 
                className={`w-full bg-dark-grey`}
                style={{ 
                    marginTop: `-230px`,
                    height: '230px',
                    transform: `skewY(-5.16deg)`,
                    transformOrigin: 'top right',
                }}
            />
            <div 
                className={`w-full bg-light-grey`}
                style={{ 
                    marginTop: `0px`,
                    height: '100px',
                    transform: `skewY(-5.16deg)`,
                    transformOrigin: 'top right',
                }}
            />
        </>
    );
}
