import IMAGE_1 from '../assets/1.png'
import IMAGE_2 from '../assets/2.png'
import IMAGE_3 from '../assets/3.png'
import IMAGE_4 from '../assets/4.png'
import IMAGE_5 from '../assets/5.png'
import IMAGE_6 from '../assets/6.png'
import IMAGE_7 from '../assets/7.png'
import IMAGE_8 from '../assets/8.png'
import IMAGE_9 from '../assets/9.png'
import IMAGE_10 from '../assets/10.png'
import IMAGE_11 from '../assets/11.png'
import IMAGE_12 from '../assets/12.png'
import IMAGE_13 from '../assets/13.png'
import IMAGE_14 from '../assets/14.png'
import IMAGE_15 from '../assets/15.png'
import IMAGE_16 from '../assets/16.png'
import IMAGE_17 from '../assets/17.png'
import IMAGE_18 from '../assets/18.png'

const ASSRTS = {
  IMAGE_1,
  IMAGE_2,
  IMAGE_3,
  IMAGE_4,
  IMAGE_5,
  IMAGE_6,
  IMAGE_7,
  IMAGE_8,
  IMAGE_9,
  IMAGE_10,
  IMAGE_11,
  IMAGE_12,
  IMAGE_13,
  IMAGE_14,
  IMAGE_15,
  IMAGE_16,
  IMAGE_17,
  IMAGE_18,
}

const getRndInteger = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) ) + min
}

// 
function decodeUnicode(str) {
   //Unicode显示方式是\u4e00
   str = "\\u"+str
   str = str.replace(/\\/g, "%");
    //转换中文
   str = unescape(str);
    //将其他受影响的转换回原来
   str = str.replace(/%/g, "\\");
   return str;
}

const getRandomStr = (length = 8, str = '') => {
  const char = getRndInteger(0x4e00, 0x9fa5).toString(16)
  str = str + decodeUnicode(char)
  if (str.length > length) {
    return str.slice(0, length)
  }
  return getRandomStr(length, str)
}

export const getGoodsData = ({pageSize = 10, pageNum = 1} = {}) => {
  return new Array(pageSize).fill('').map(val => {
    return {
      image: ASSRTS[`IMAGE_${getRndInteger(1, 18)}`],
      height: getRndInteger(150, 500), // 虚拟高度 测试图片渲染高度需大于 130
      title: getRandomStr(getRndInteger(10, 30)),
    }
  })
}