import profiles from '../data/berlin.json';

export const FaceBook = () => {

    return (
        <>  
            <div>

            </div>
            {profiles.map(({firstName,lastName,country,img,isStudent},i) =>{
                return (
                    <div style={{display: 'flex',padding:'10px',margin:'10px',textAlign: 'left'}}>
                        <img src={img} width="100"/>
                        <div style={{padding:'10px'}}>
                            <p><b>First name:</b>{firstName}</p>
                            <p><b>Last name:</b>{lastName}</p>
                            <p><b>Country:</b>{country}</p>
                            <p><b>Type:</b>{isStudent ? "Student" : "Teacher"}</p>
                        </div>
                    </div>
                )
            })}
            
        </>
    )
}