import { useEffect, useState } from "react"
import Card from "./components/Card"
import Navbar  from "./components/Navbar"
import { Route, Routes } from "react-router-dom"
import Home from './components/Home'
import Layout from './components/Layout'
import About from './components/About'

function App() {
const [news,setNews]=useState([])
const getData = async () => {
  const response = await fetch("https://newsapi.org/v2/everything?q=keyword&apiKey=aeb3a8116b764f2d9c38582452473b46")
  const data = await response.json()
  setNews(data.articles)
}
useEffect(()=>{
  getData() ;
},[])
const getSearch=async(keyword)=>{
  try {
    const data=await fetch(`https://newsapi.org/v2/everything?q=${keyword}&apiKey=aeb3a8116b764f2d9c38582452473b46`)
    if(!data.ok){
      console.log("Error couldnt get news")
    }
    const response=await data.json()
    setNews(response.articles)
  } catch (error) {
    console.log(error)
  }
}

const getCategoryNews=async (category)=>{
  try {
    const data=await fetch(`https://newsapi.org/v2/top-headlines?category=${category}&apiKey=aeb3a8116b764f2d9c38582452473b46`)
    if(!data.ok){
      console.log("error 404")
    }
    const response=await data.json()
    setNews(response.articles)
  } catch (error) {
    console.log(error)
  }
  }

  return (    
    <>
    <Routes>
      <Route path="/home" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/layout" element={<Layout/>}/>
    </Routes>
      <Navbar search={getSearch} everything={getData} categoryNews={getCategoryNews}/>
      {
        news.map((article,idx)=>          
          <Card key={idx} author={article.author} title={article.title} description={article.description} url={article.url} image={article.urlToImage} publishedAt={article.publishedAt}/>             
        )
      }  
    </>
  )
}

export default App
