import { useEffect, useState } from 'react'


export default function Lifts() {
    const [lifts, setLifts] = useState(null);

    useEffect(() => {
        const fetchLift = async() =>{
            try{
                const response = await fetch('/server/lifts');
                const json = await response.json();
                if(response.ok){
                    setLifts(json);
                }
            }
            catch(error){
              console.log("Error", error);
            }
        }

        fetchLift();
    }, []);

  return (
    <div className="lifts">
        <div className="home">
            {lifts && lifts.map((lift) => {
                <p key={lift._id}>{lift.title}</p>
            })}
        </div>
        
    </div>
  )
}