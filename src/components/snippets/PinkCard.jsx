import React from 'react'

const PinkCard = ({ title, description }) => {
  return (
    <div className='pink-card'>
      {title && <h3>{title}</h3>}
      {description && <p>{description}</p>}
    </div>
  )
}

export default PinkCard