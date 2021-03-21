import { useState, useEffect, useRef } from 'react'
import styles from './data.module.scss'

import { useData } from 'redux/hooks/data'

import CircularLoading from 'components/CircularLoading'

const Data = () => {
  const { actions, data, loading, error } = useData()

  const [searchKw, setSearchKw] = useState('')

  const initRender = useRef(true)
  useEffect(() => {
    let timeout

    if (initRender.current) {
      initRender.current = false
      actions.fetchData('')
    } else {
      timeout = setTimeout(() => {
        actions.fetchData(searchKw)
      }, 200)
    }

    return () => clearTimeout(timeout)
  }, [searchKw, actions])

  const handleChange = (e) => {
    setSearchKw(e.target.value)
  }

  return (
    <div className={styles.container}>
      <h4>Data</h4>

      <div className={styles.interactArea}>
        <input
          type="text"
          value={searchKw}
          onChange={handleChange}
          placeholder="Search"
        />
        <CircularLoading loading={loading} />
      </div>

      <code>{error ? error.message : `Total: ${data.length}`}</code>
      <table>
        <thead>
          <tr>
            <th>Value</th>
            <th>Label</th>
          </tr>
        </thead>
        <tbody>
          {data.map((d, i) => (
            <tr key={i}>
              <td>{d.value}</td>
              <td>{d.label}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Data
