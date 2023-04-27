import { useState } from "react"
import Tur from "./Tur"

function TurListe({turlar}) {

    console.log(turlar)


    const[turlistesi,turlistesiGuncelle]=useState(turlar)

    const deleteById = id =>{turlistesiGuncelle(prev=>{
        return prev.filter(tur=>tur.id!==id)
    })}

    return (
         <div className="cevre">
            <h1 className="h5-etiketi"> Our Tours</h1>
            <div className="container">
                <div className="row">
                    {
                        turlistesi.map((tur) => {
                            return (
                                
                                <Tur id={tur.id} name={tur.name} image={tur.image} info={tur.info} deleteById={deleteById} /> 
                            )
                        })
                    }
                </div>
            </div>
        </div>
        

    )
}

export default TurListe