import React from 'react'
import { iconData } from './IconData'

const IconText = () => {
  return (
   <section className="iconSection">

       <div className="Container iconContainer">
                {
                    iconData.map(eachItem => {
                        const { id, icon, iconTitle, iconText } = eachItem;
                        return (
                            <article key={id} className="icons">
                                <img src= {icon} alt="#" />
                                <h5> {iconTitle} </h5>
                                <p> {iconText} </p>
                            </article>
                        )
                    })
                }
       </div>
   </section>
  )
}


export default IconText