import React from 'react'
import css from 'styled-jsx/css'

export default (props) => {
  return (
    <div className="card-container">
      <div className="image-container" style={{height: props.height}}>
        <img className="image" src={props.image}></img>
      </div>
      <div className="title">{props.title}</div>
      <style jsx>{styles}</style>
    </div>
  )
}

const styles = css`
  .card-container {
    margin: 5px;
    padding: 10px;
    backdrop-filter: blur(6px);
    background: rgba(255, 255, 255, .7);
    border-radius: 10px;
  }
  .image-container {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .title {
    font-size: 14px;
    font-weight: bold;
  }
  .image {
    width: 100%;
  }
`