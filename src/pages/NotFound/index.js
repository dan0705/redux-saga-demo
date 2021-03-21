import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div>
      <h4>Not Found</h4>
      <Link to="/data">Go to data page</Link>
      <Link to="/count">Go to count page</Link>
    </div>
  )
}

export default NotFound
