import React from "react"
import Heading from "../../common/Heading"
import "./recent.css"
import RecentCard from "./RecentCard"

const Recent = () => {
  return (
    <>
      <section className='recent padding'>
        <div className='container'>
          <Heading title='Propiedades recientes' subtitle='compra o vende la propiedad que desees.' />
          <RecentCard />
        </div>
      </section>
    </>
  )
}

export default Recent
