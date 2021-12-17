import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Image} from 'react-bootstrap';
import character16 from '../character16.png'
import character13 from '../character13.png'
import character3 from '../character3.png'
import character5 from '../character5.png'
import character8 from '../character8.png'
import character6 from '../character6.png'
import {data} from '../Dynamic/Array'

function Xtersidebar() {
    const canvasContents = [
        {
            id: 1,
            image: character16,
            characterName:"Darlen Robertson",
            friends: "23 friends"
    
        },
    
        {
            id: 2,
            image: character13,
            characterName:"Katling Murphy",
            friends: "23 friends"
    
        },
    
        {
            id: 3,
            image: character3,
            characterName:"Jenny Wilson",
            friends: "23 friends"
    
        },
    
        {
            id: 4,
            image: character5,
            characterName:"Arlene Meloy",
            friends: "23 friends"
    
        },
        {
            id: 5,
            image: character8,
            characterName:"Darrel Steward",
            friends: "23 friends"
    
        },
        {
            id: 6,
            image: character6,
            characterName:"Bessie Cooper",
            friends: "23 friends"
    
        }
        
    ]
function Xtersidebar() {
        return (
            <div>
                {
                    canvasContents.map(canvasContent => (
                        <Row className="d-flex mb-3" key={canvasContent.id}>
                            <div className="col-3 ">
                                <div className=' OffCanvasStyle' >
                                    <Image src={canvasContent.image} className='img-fluid h-100 rounded ' />
                                </div>
    
                            </div>
                            <div className="col-9 py-auto">
                                <p className=" small mt-2 mb-2 pb-2">{canvasContent.characterName}</p>
                                <p className=" extra mt-2 mb-2 pb-2">{canvasContent.friends}</p>
    
                            </div>
    
                        </Row>
    
                    ))
                    
                }
                
            </div>
     )
}
    

}
export default Xtersidebar
