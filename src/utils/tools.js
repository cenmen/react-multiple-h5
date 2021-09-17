export const debounce = (fn, delay) => {
  let timer = null
  return function (...params) {
    if (!timer) {
      timer = setTimeout(function () {
        fn.call(this, ...params)
        timer = null
      }, delay)
    }
  }
}
