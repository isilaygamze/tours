import "./Tur.css"
import { useState } from "react"

function Tur({ name, image, info, deleteById, id }) {

    const [yazi, yaziGuncelle] = useState(info.substring(0, 200))
    const [azgoster, azgosterGuncelle] = useState("Read More")

    function readMore() {
        console.log("READMORE")
        yaziGuncelle(info)
        azgosterGuncelle("Show Less")
    }

    function readLess() {
        console.log("SHOWless")
        yaziGuncelle(info.substring(0, 200))
        azgosterGuncelle("Read More")
    }

    return (
        <>

            <div className=" col-md-4 mb-5" >
                <div className="card">
                    <img src={image} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{name}</h5>
                        <p className="card-text"> {yazi}</p>
                        {azgoster === "Read More" && <button href="#" className="btn btn-primary mb-2" onClick={readMore}>{azgoster}</button>}
                        {azgoster === "Show Less" && <button href="#" className="btn btn-primary mb-2" onClick={readLess}>{azgoster}</button>}
                        <p><button onClick={() => (deleteById)(id)} href="#" className="btn btn-primary">Not Interested</button></p>
                    </div>
                </div>
            </div>

        </>

    )
}

export default Tur