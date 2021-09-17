import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom'
import css from 'styled-jsx/css'
import { global } from '../../css/index'

import Waterfall from '../../components/waterfall'
import { getGoodsData } from '../../api/mock'
import { debounce } from '../../utils/tools'
import bg from '../../assets/bg.jpeg'

const List = () => {
  const [dataList, setDataList] = useState([[], []])
  const leftWaterfallRef = React.createRef()
  const rightWaterfallRef = React.createRef()
  const [tempDataSource, setTempDataSource] = useState([])

  const loadData = debounce(() => {
    setTempDataSource(getGoodsData({ pageSize: 20 }))
  }, 1500)

  useEffect(() => {
    loadData()
  }, [])

  useEffect(() => {
    const target = tempDataSource.shift()
    if (target) {
      const [list1, list2] = dataList
      const leftWaterfallHeight = leftWaterfallRef.current.offsetHeight
      const rightWaterfallHeight = rightWaterfallRef.current.offsetHeight
      leftWaterfallHeight < rightWaterfallHeight ? list1.push(target) : list2.push(target)
      console.log('==> useEffect ref', tempDataSource, leftWaterfallHeight, rightWaterfallHeight)
      setDataList([list1, list2])
      setTempDataSource(tempDataSource.slice(0))
    }
  }, [tempDataSource])

  window.onscroll = function () {
    //scrollTop是滚动条滚动时，距离顶部的距离
    var scrollTop = document.documentElement.scrollTop || document.body.scrollTop
    //windowHeight是可视区的高度
    var windowHeight = document.documentElement.clientHeight || document.body.clientHeight
    //scrollHeight是滚动条的总高度
    var scrollHeight = document.documentElement.scrollHeight || document.body.scrollHeight
    //滚动条到底部的条件
    if (scrollTop + windowHeight == scrollHeight) {
      loadData()
    }
  }

  return (
    <div className="list-container">
      <div className="waterfall-container">
        <Waterfall list={dataList[0]} ref={leftWaterfallRef}></Waterfall>
      </div>
      <div className="waterfall-container">
        <Waterfall list={dataList[1]} ref={rightWaterfallRef}></Waterfall>
      </div>
      <style jsx>{styles}</style>
      <style jsx global>
        {global}
      </style>
    </div>
  )
}

const styles = css`
  .list-container {
    background: url(${bg}) top/cover;
    display: flex;
  }
  .waterfall-container {
    flex: 1;
  }
`

ReactDOM.render(<List></List>, document.getElementById('root'))
