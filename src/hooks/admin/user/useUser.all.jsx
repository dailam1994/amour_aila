import { useQuery } from 'react-query'

const fetchUsers = async () => {
    return await fetch('http://0.0.0.0:3333/api/users', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        },
        credentials: 'include',
    }).then(res => res.json())
}

export const useUserAllData = () => {
    return useQuery('user-all', fetchUsers)
}