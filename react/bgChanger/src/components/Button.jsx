const Button = ({color, textColor, title, setColor}) => {
    const classes = `rounded-2xl font-bold w-25 p-3 ${color} ${textColor}`

    

    return (
        <>
            <button onClick={() => setColor((prevColor) => prevColor = title)} className={classes}>{title}</button>
        </>
    )
}

export default Button