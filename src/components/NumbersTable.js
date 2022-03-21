export const NumbersTable = ({limit}) => {
    return(
        <div style={{display: 'grid',gridTemplateColumns: '1fr 1fr 1fr 1fr 1fr'}}>
            {[...Array(limit)].map((n,i) => <div key={i} style={{display:'flex',alignItems: 'center',justifyContent: 'center',height: '200px',border:'solid 1px black',backgroundColor: ((i+1) % 2) ?'red':'white'}}>{i+1}</div>)}
        </div>
    )
}