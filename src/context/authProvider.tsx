import {
  createContext,
  ReactElement,
  ReactNode,
  useEffect,
  useState,
} from 'react'
import { useLocalStorage } from 'usehooks-ts'
import { IAuthContext, ITokens } from '../utils/interfaces'
import { TOKENS } from '../utils/constants'
import { loginReq } from '../utils/requests'
import { CustomError } from '../utils/classes'
import { jwtDecode } from 'jwt-decode'

interface IAuthProviderProps {
  children: ReactNode
}

// Define the structure of the decoded token for better type safety
interface IDecodedToken {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any // Adjust based on your actual token structure
}

export const AuthContext = createContext<IAuthContext>({
  isLoggedIn: false,
  userRole: null,
  login: async () => {},
  logout: () => {},
})

export function AuthProvider({ children }: IAuthProviderProps): ReactElement {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false)
  const [userRole, setUserRole] = useState<string | null>(null)
  const [tokens, setTokens, clearTokens] = useLocalStorage<ITokens | null>(
    TOKENS,
    null
  )

  const values: IAuthContext = { isLoggedIn, userRole, login, logout }

  async function login(username: string, password: string) {
    try {
      const tokens = await loginReq(username, password) // Ensure this returns the correct shape
      setTokens(tokens)
      const decodedToken: IDecodedToken = jwtDecode(tokens.accessToken) // Use accessToken
      const role =
        decodedToken[
          'http://schemas.microsoft.com/ws/2008/06/identity/claims/role'
        ] // Adjust as necessary
      setUserRole(role)
      setIsLoggedIn(true)
    } catch (error) {
      if (error instanceof CustomError) {
        console.log(error)
      }
    }
  }

  function logout() {
    clearTokens()
    setUserRole(null)
    setIsLoggedIn(false) // Set isLoggedIn to false on logout
  }

  useEffect(() => {
    if (tokens === null) {
      setIsLoggedIn(false)
      setUserRole(null) // Clear user role if no tokens
    } else {
      const decodedToken: IDecodedToken = jwtDecode(tokens.accessToken) // Use accessToken
      const role =
        decodedToken[
          'http://schemas.microsoft.com/ws/2008/06/identity/claims/role'
        ]
      setUserRole(role)
      setIsLoggedIn(true)
    }
  }, [tokens])

  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>
}
