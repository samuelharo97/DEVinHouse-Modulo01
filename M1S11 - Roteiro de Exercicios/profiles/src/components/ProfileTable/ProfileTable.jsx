import { TableContainer } from './styles'
import PropTypes from 'prop-types'
import axios from 'axios'
import { useEffect } from 'react'
export const ProfileTable = ({ children }) => {
  const getData = async () => {
    const res = await axios
      .get('https://api.github.com/users/samuelharo97')
      .then(res => console.log(res.data))
    return res
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <TableContainer>
      <div>
        <table>
          <thead>
            <tr>
              <th>#</th>
              <th>User</th>
              <th>Repos</th>
              <th>Followers</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Mark</td>
              <td>Otto</td>
              <td>Mando</td>
              <td>
                <button>Delete</button>
              </td>
            </tr>
            <tr>
              <td>1</td>
              <td>Mark</td>
              <td>Otto</td>
              <td>Mando</td>
              <td>
                <button>Delete</button>
              </td>
            </tr>
            <tr>
              <td>1</td>
              <td>Mark</td>
              <td>Otto</td>
              <td>Mando</td>
              <td>
                <button>Delete</button>
              </td>
            </tr>
            <tr>
              <td>1</td>
              <td>Mark</td>
              <td>Otto</td>
              <td>Mando</td>
              <td>
                <button>Delete</button>
              </td>
            </tr>
            <tr>
              <td>1</td>
              <td>Mark</td>
              <td>Otto</td>
              <td>Mando</td>
              <td>
                <button>Delete</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </TableContainer>
  )
}

ProfileTable.propTypes = {
  children: PropTypes.node
}
