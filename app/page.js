import React from 'react'
import Hedear from './Component/Hedear'
import Home from './Component/Home'
import Post from './Component/Post'
import Contact from './Component/Contact'
import Trend from './Component/Trend'


const page = () => {
  return (
    <div>
      <Hedear/>
      <Home/>
      <Trend/>
      <Post/>
      <Contact/>
    </div>
  )
}

export default page