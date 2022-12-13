import React, { Component } from "react";
import styles from "./Band.module.css";
import StaticExampleModal from "./StaticExampleModal";


class Band extends Component{
    state={
        upali:false
    }
    // upaliModal=()=>{
    //     this.setState({upali:true});
    // }
    render(){
    return(
        <div className="card mt-3">
            <div className="card-header">
                <h3>{this.props.band.name}</h3>
            </div>
            <div className="card-body">
                <div className="row">
                    <div className="col-6">
                        <img src={this.props.band.img_url} alt="" className={styles.mainThumb}/>
                    </div>
                    <div className="col-6">
                        <p>{this.props.band.info.substring(0,200)} ...</p>
                    </div>
                </div>
            </div>
            <div className="card-footer">
                <button className="btn btn-info float-right" onClick={()=>{this.props.pokazimodal(this.props.band)}}>read more</button> 
                {/* {console.log(this.state.upali)} */}
                
                {/* <Button variant="primary" onClick={handleShow}>
                 Launch demo modal
                </Button> */}
            </div>
            
        </div>
    )}
}

export default Band;

//KOD OVOG BUTTONA MORA DATA-TOGGLE modal i data-target odgovora ajdiju modala koji smo pljusnuli u modal.js