import React, { Component } from 'react'
import { Link } from 'react-router-dom'
export default class Navbar extends Component {
  constructor(){
    super()
    this.state={
      show: false}

  }
 
 componentDidMount()
 {
//   window.onscroll = scrollShowNav;
// let navEle = document.getElementsByTagName("nav")[0];
// let stickyTop = navEle.offsetTop;
// function scrollShowNav() {
//    if (window.pageYOffset > stickyTop){
//       navEle.classList.add("fixed");
//    } else {
//       console.log('WOW');
//       navEle.classList.remove("fixed");
//    }
// }
  window.addEventListener("scroll",()=>{
    let navEle = document.getElementsByTagName("nav")[0];
    if(window.scrollY > 60)
    {
      navEle.classList.add("fixed");
    }
    else {
            
            navEle.classList.remove("fixed");
         }
    
  });
 
  
 }

  render() {

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark navI">
        <Link className="navbar-brand" to="/">News Point</Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
      
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <Link className="nav-link" to="/">Home </Link>
           </li>
           <li className="nav-item">
             <Link className="nav-link" to="/business">Business</Link>          
           </li>
              <li>
               <Link className="nav-link" to="/entertainment">Entertainment</Link>
             </li>
             <li><Link className="nav-link" to="/health">Health</Link>
            </li>
             <li> <Link className="nav-link" to="/science">Science</Link>
             </li>
             <li><Link className="nav-link" to="/sports">Sports</Link>
             </li>
             <li><Link className="nav-link" to="/technology">Technology</Link></li>         

           
          
           </ul>
          
          </div>
       </nav>
      
    //   <nav className="nav">
    //  <ul className="list">
    //   <li className='item'>
    //  <Link className='news' to="/"><b>News Point</b></Link>
    //  </li>
    //       <li className="item">
    //         <Link className="link"to="/"><b>Home</b> </Link>
    //       </li>
    //       <li className='item'>
    //         <Link  className="link"  to="/business">Business</Link>
    //       </li>
    //          <li className="item">
    //           <Link  className="link" to="/entertainment">Entertainment</Link>
    //         </li >
    //         <li className="item"><Link className="link" to="/health">Health</Link>
    //        </li>
    //         <li className="item"> <Link className="link" to="/science">Science</Link>
    //         </li>
    //         <li className="item"><Link className="link" to="/sports">Sports</Link>
    //         </li>
    //         <li className="item"><Link className="link" to="/technology">Technology</Link></li>
    //     </ul>
      
      
    //  </nav>
   
              
    )
  }
}
