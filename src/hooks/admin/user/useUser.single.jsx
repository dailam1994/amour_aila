import { useQuery } from 'react-query'

const fetchUser = async ({ queryKey }) => {
    const id = queryKey[1]
    const results = await fetch(`http://0.0.0.0:3333/api/user/${id}`).then(res => res.json())
    return results
}

export const useUserData = (id) => {
    return useQuery(['user-single', id], fetchUser)
}