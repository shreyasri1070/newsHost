import React,{useEffect,useState} from "react";
import NewsItem from "./NewsItem";
import Spinner from "./spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

const News =(props)=> {
  const[articles,setArticles]=useState([])
  const[loading,setLoading]=useState(true)
  const[page,setPage]=useState(1);
  const[totalResult,settotalResult]=useState(0);



  News.defaultProps = {
    country: "in",
    pagesize: 6,
    totalResults: 0,
  };
News.propTypes = {
    country: PropTypes.string,
    pagesize: PropTypes.number,
  };
  const capital = (element) => {
    return element.charAt(0).toUpperCase() + element.slice(1);
  };
 
 const clickfunc = async () => {
    props.setProgress(10);
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apikey}&page=${page}&pageSize=${props.pagesize}`;
   
    
    setLoading(true)
    fetch(url)
      .then((res) => res.json())

      .then((json) => {

        setArticles(json.articles);
        setLoading(false);
        settotalResult(json.totalResults)
      
      });
      props.setProgress(100);
  };
  useEffect(()=>{
    document.title = `NewsHost-${capital(props.category)}`;
    clickfunc();
 

  },[])
 

  const fetchMoreData = async()=>{
   
    setPage(page+1);
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apikey}&page=${page+1}&pageSize=${props.pagesize}`;
   
     
     setLoading(true)
     fetch(url)
       .then((res) => res.json())
 
       .then((json) => {
        setArticles(articles.concat(json.articles))
        settotalResult(json.totalResults)
        setLoading(false)
         
       });


  }

 
    return (
     <>
        <h2 className="text-center " style={{marginTop:"90px" }}>
          {props.category === "general"
            ? "NewsHost---Trending Headlines"
            : "NewsHost---Trending " +
              capital(props.category) +
              " Headlines"}
        </h2>
        <div className="container  my-3 ">
       { articles &&
        <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
         hasMore={articles.length<totalResult}
          loader={<Spinner/>}
          

        >
        <div className="container">
          <div className="row">
          
            {articles&&articles.map((element) => {
              return <div className="col-md-4 mb-2" key={element.url}>
                  <NewsItem
                    title={element.title}
                    description={
                      element.description != null
                        ? element.description.length > 70
                          ? element.description.slice(0, 70) + "..."
                          : element.description
                        : null
                    } 
                     imgurl={element.urlToImage}
                    newsUrl={element.url}
                    date={element.publishedAt}
                    author={element.author == null ? "Unknown" : element.author}
                  /> 
                </div>
              
            })}
            </div>
          </div>
        </InfiniteScroll>}
        </div>

      
      
      </>
    );
  
}

export default News;
