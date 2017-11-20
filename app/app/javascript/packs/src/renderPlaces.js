import React, {Component} from 'react';
class RenderPlaces extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            arr: []
        }
    }
    
    render(){
       // debugger;
        
        if(this.props.data.length !== 0 ){  
            this.props.data.forEach((elem) => {
                this.state.arr.push(
                <div>
                    <img src={elem.p}/>
                    <span>{elem.n}</span>
                    <div>{elem.r}</div>
                </div> 
                )
                
            })
            return(this.state.arr);
        }else{
            return(            
                <div>
                    Nothing
                </div> 
            )
        }
    }   
}

export default RenderPlaces;