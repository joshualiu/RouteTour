
import React, {Component} from 'react';

class RenderPlaces extends React.Component{
    
    render(){
        var arr = [];
        if(this.props.data.length !== 0 ){
            
           
            // return(<div>
            // <span>{this.props.data}</span>
            // </div> )
            
            this.props.data.forEach((elem) => {
               
                arr.push(   
                <div>
                <img src={elem.p}/>
                 <span>{elem.n}</span>
                </div> )
               
            })
           
            return(arr);
        }
       
            return(            
                <div>
                    Nothing
                </div> 
            )
        
    }   
}

export default RenderPlaces;