export const Rating = ({children}) => {
    const rating = Math.round(children);
    const stars = `${'★'.repeat(rating)}${'☆'.repeat((5-rating))}`
    return (
        <h2>{stars}</h2>
    )
}