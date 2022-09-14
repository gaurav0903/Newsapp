
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import React, { Component } from 'react'
import News from './components/News';
import LoadingBar from 'react-top-loading-bar'
export default class App extends Component {
state={
  progress: 0
}
setProgress=(progress)=>{
  this.setState({progress:progress})
}

 
  render() {
    return (
      
      <div>
        <Router> 
       <Navbar />
       <LoadingBar
        color='#f11946'
        progress={this.state.progress}
        
      />
       <Routes>
    <Route path="/" element={<News setProgress={this.setProgress} pageSize={12} country="in" category="science"/>} />
    
<Route path="/business" element={<News setProgress={this.setProgress} key="business" pageSize={12} country="in" category="business"/>} />
<Route path="/entertainment" element={<News setProgress={this.setProgress} key="entertainment" pageSize={12} country="in" category="entertainment"/>} />
<Route path="/general" element={<News setProgress={this.setProgress} key="general" pageSize={12} country="in" category="general"/>} />
<Route path="/health" element={<News setProgress={this.setProgress} key="health" pageSize={12} country="in" category="health"/>} />
<Route path="/science" element={<News setProgress={this.setProgress} key="science" pageSize={12} country="in" category="science"/>} />
<Route path="/sports" element={<News setProgress={this.setProgress} key="sports" pageSize={12} country="in" category="sports"/>} />
<Route path="/technology" element={<News setProgress={this.setProgress} key="technology" pageSize={12} country="in" category="technology"/>} />
</Routes>
</Router>
      </div>
    )
  }


}

