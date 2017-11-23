import React, {Component} from 'react';
class RenderPlaces extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            arr_restaurant: [],
            arr_hotel: [],
        }
    }
    
    render(){
       
        
        if(this.props.data.length !== 0 ){  
            console.log("data to render",this.props.data);
            this.props.data.forEach((elem) => {
                if(elem.type === 'restaurant'){
                    this.state.arr_restaurant.push(
                        <div>
                            <img src={elem.p}/>
                            <span>{elem.n}</span>
                            <div>{elem.r}</div>
                            {elem.maps_ref}
                        </div> 
                        )  
                }else if(elem.type === 'lodging'){
                    this.state.arr_hotel.push(
                        <div>
                            <img src={elem.p}/>
                            <span>{elem.n}</span>
                            <div>{elem.r}</div>
                            {elem.maps_ref}
                        </div> 
                        )  
                }
            })
            return(
                <div>
                    <div>Restaurants</div><br/>
                    <div>{this.state.arr_restaurant}</div><br/>
                    <div>Hotels</div><br/>
                    <div>{this.state.arr_hotel}</div><br/>
                </div>
            );
        }else{
            return(            
                <div>
                    Category
                </div> 
            )
        }
    }   
}

export default RenderPlaces;