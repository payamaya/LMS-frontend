/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from 'react'
import { BASE_URL } from '../utils/constants'
import { ITokens } from '../utils/interfaces'

interface DeleteResourceProps {
  resourceId: string
  resourceType: string
  onSuccess: () => void // Callback after successful delete
}

const DeleteResource: React.FC<DeleteResourceProps> = ({
  resourceId,
  resourceType,
  onSuccess,
}) => {
  const [error, setError] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)

  const handleDelete = async () => {
    const token: any | null = localStorage.getItem('tokens') // Get JWT token from localStorage
    if (!token) {
      console.log('No authorization token found. Please log in.')
      setError('Authorization token not found. Please log in.')
      return
    }

    try {
      const parsedToken: ITokens = JSON.parse(token)
      setLoading(true)
      const response = await fetch(
        `${BASE_URL}/${resourceType}/${resourceId}`,
        {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${parsedToken.accessToken}`, // Pass JWT token in headers
          },
        }
      )

      if (!response.ok) {
        const errorMessage = await response.text()
        setError(`Failed to delete: ${errorMessage}`) // Customize error message by resourceType
        console.error(`Error deleting: ${response.status}`)
        return
      }

      console.log(`${resourceType} deleted successfully`)
      setError(null) // Clear any previous errors
      onSuccess() // Trigger success callback
    } catch (err) {
      console.error(`Error while deleting:`, err)
      setError(`An error occurred while deleting the ${resourceType}.`)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div>
      {loading && <p>Deleting {resourceType.slice(0, -1)}...</p>}
      {error && <p className='error-message'>{error}</p>}
      <button className='btn-delete' onClick={handleDelete} disabled={loading}>
        <span className='material-symbols-outlined'>delete</span>
      </button>
    </div>
  )
}

export default DeleteResource
