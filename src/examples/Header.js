import React from 'react'
import { useStaticQuery, graphql } from 'gatsby';
const getData = graphql`
{
  site{
    info:siteMetadata{
      title
      description
      author
      data
      person {
        name 
        age
      }
    }
  }
}
`
const Header = () => {
  const data = useStaticQuery(getData);
  console.log(data)
  return (
    <div>
      <h1>this is our heading</h1>  
      <div>title: {data.site.info.title}</div>
      <div>name: {data.site.info.person.name}</div>
      
    
    </div>
  )
}

export default Header
