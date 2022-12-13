import React from "react";
import BandsList from "./components/BandsList";
import Navbar from "./components/Navbar";
import StaticExampleModal from "./components/StaticExampleModal";

class App extends React.Component{
    state={
        bands:[],
        pokazi:false,
        band:{},
        
    }
    componentDidMount(){
        fetch('https://raw.githubusercontent.com/Danilovesovic/bands/master/bands_with_id.json')
        .then(res=>{
            return res.json();
        })
        .then(data=>{
            // console.log(data);
            this.setState({bands:data});
        })
    }
    pokazimodal=(band)=>{
        // console.log(band);
        this.setState({band:band});
        this.setState({pokazi:true});
    }
    ugasimodal=()=>{
        // console.log(band);
        this.setState({band:{}});
        this.setState({pokazi:false});
    }
    render(){
        return(
            <>
            <Navbar/>
            <BandsList bands={this.state.bands} pokazimodal={this.pokazimodal}/>
            {/* <StaticExampleModal pokazi={this.state.pokazi}/> */}
            <StaticExampleModal show={this.state.pokazi} band={this.state.band} ugasimodal={this.ugasimodal}/>
            </>
            
        )
    }
}


export default App;