import React from 'react'

const Template = (props) => {
  return (
    <main>
        <div className="bgbanner">
            <h1 className="textbg">{props.title}</h1>   
        </div>
        <div>
        <h3 className="text-center m-2">{props.subtitle}</h3> 
            {props.children}
        </div>
    </main>
  )
}

export default Template