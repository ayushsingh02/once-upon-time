import React from 'react'

const BlueCard = ({ title, description }) => {
  return (
    <div className='pink-card blue'>
      {title && <h3>{title}</h3>}
      {description && <p>{description}</p>}
    </div>
  )
}

export default BlueCard