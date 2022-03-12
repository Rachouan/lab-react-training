export const Random = ({min,max}) => {
    return (
        <h2>Random value between {min} and {max} => { Math.round(Math.random() * (max - min))}</h2>
    )
}