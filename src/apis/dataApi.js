const getDataAPI = (keyword) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      if (keyword.includes('err')) {
        reject(new Error('API went wrong!'))
      }
      resolve(
        [
          { value: 0, label: 'zero' },
          { value: 1, label: 'one' },
          { value: 2, label: 'two' },
          { value: 3, label: 'three' },
          { value: 4, label: 'four' },
          { value: 5, label: 'five' },
          { value: 6, label: 'six' },
          { value: 7, label: 'seven' },
          { value: 8, label: 'eight' },
          { value: 9, label: 'nine' },
          { value: 10, label: 'ten' },
          { value: 11, label: 'eleven' },
          { value: 12, label: 'twelve' },
        ].filter((item) => item.label.includes(keyword))
      )
    }, 800)
  })

export { getDataAPI }
