import React from 'react'

const Container = (props) => {
  return (
    <div style={{maxWidth: '1200px', margin: 'auto'}}>
      {props.children}
    </div>
  )
}

export default Container
