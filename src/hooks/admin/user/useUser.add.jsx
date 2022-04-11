import { useMutation, useQueryClient } from "react-query"
import { useNavigate } from "react-router-dom"

const addUser = async (user) => {
    console.log(user)
    await fetch('http://0.0.0.0:3333/api/user', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)

    }).then(res => {
        res.json()
        alert('New User created successfully!')
    }).catch(err => console.log(err))
}

export const useAddUser = () => {
    const queryClient = useQueryClient();
    const navigate = useNavigate()

    return useMutation(addUser, {
        onSuccess: () => {
            queryClient.invalidateQueries('user-all')
            navigate('/user-all')
        }
    })
}
