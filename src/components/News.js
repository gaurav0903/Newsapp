import React, { Component } from 'react'
 import NewsItems from './NewsItems'
import Spiner from './Spiner';
import InfiniteScroll from "react-infinite-scroll-component";
export default class News extends Component {
      constructor(){
        super();
        this.state={
          
            articles: [],
            loading: false,
            page: 1,
            totalResults: 0
        }}

      // async componentDidMount()
      // {
      //   // 
      //   let url = "https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=5afa4786919746dcbf76c4038ac14a04";
      //   let data = await fetch(url)
      //   let parsedData = await data.json();
      //   // console.log(parsedData)
      //    this.setState({article: parsedData})
      //   console.log(this.state.article)
      // }
    //   componentDidMount() {
    //     fetch(
    //       "https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=5afa4786919746dcbf76c4038ac14a04")
    //         .then((res) => res.json())
    //         .then((json) => {
    //             this.setState({
    //                 article: json,
    
    //                 loading: true
    //             });
    //         })

    //         console.log(this.state.article)
    // }

    async componentDidMount(){
      try{  this.update();
        }
      catch(e) {
          console.log("something is not working");
      }
  }
  update=async()=>{
    this.props.setProgress(0);
   const url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=5afa4786919746dcbf76c4038ac14a04&page=${this.state.page}&pageSize=${this.props.pageSize}`
    this.setState({loading: true});
    this.props.setProgress(30);
        const res = await fetch(url);
        const data = await res.json();
        this.props.setProgress(70);
        this.setState({
            articles: data.articles,
            totalResults: data.totalResults,
            loading: false
        });
       
        this.props.setProgress(100);
  }
   
     capitalizeFirstLetter(string) {
      return string.charAt(0).toUpperCase() + string.slice(1);
    }
    fetchMoreData = async() => {
      this.setState({
          
          page: this.state.page+1
      });
      const url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=5afa4786919746dcbf76c4038ac14a04&page=${this.state.page}&pageSize=${this.props.pageSize}`
    this.setState({loading: true});
        const res = await fetch(url);
        const data = await res.json();
        this.setState({
            articles: this.state.articles.concat(data.articles),
            totalResults: data.totalResults,
            loading: false
        });
        };

        render() {        
    return (
    <div className="container my-3">
        <h2 style={{margin: '35px 0px 35px 0px'}} className='text-center'>News Point- Top {this.capitalizeFirstLetter(this.props.category)} Headlines</h2>
{this.state.loading&&<Spiner />}

<InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length<this.state.totalResults}
          loader={<Spiner />}
            
              >
        <div className="row">
           { 
              this.state.articles.map((element)=>{
                return  <div className="col-md-4" key={element.url}>
                <NewsItems title={element.title?element.title:""} description={element.description?element.description:""} imageUrl={element.urlToImage?element.urlToImage:"https://conversationagent.typepad.com/.a/6a00d8341c03bb53ef0147e02d8fa5970b-pi"} newsUrl={element.url} time={element.publishedAt} author={element.author} source={element.source.name}/>
                </div> 
              })
        }
        
       </div>
        </InfiniteScroll>
        
        {/* <div className="container d-flex justify-content-between">
        <button disabled={this.state.page<=1} className="btn btn-dark " onClick={this.handlePrev}>&larr; Previous</button>
        <button disabled={this.state.page+1 >Math.ceil(this.state.totalResults/this.props.pageSize)} className="btn btn-dark" onClick={this.handleNext}>Next &rarr; </button>
        </div> */}
        
      </div>
    )
  }
}
