import React from 'react'
import css from 'styled-jsx/css'
import Card from './card'

export default React.forwardRef((props, ref) => {
  return (
    <div className="waterfall-container" ref={ref}>
      {props.list.map((item, index) => 
        <Card image={item.image} title={item.title} height={item.height} key={index}></Card>
      )}
      <style jsx>{styles}</style>
    </div>
  )
})

const styles = css`
  .waterfall-container {
    display: flex;
    flex-direction: column;
  }
`