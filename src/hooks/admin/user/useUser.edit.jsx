import { useMutation, useQueryClient } from "react-query"
import { useNavigate } from "react-router-dom"

const editUser = async (user) => {
    const id = user.userID

    await fetch(`http://0.0.0.0:3333/api/user/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)

    }).then(res => {
        res.json()
        alert('Edited User successfully!')
    }).catch(err => console.log(err))
}

export const useEditUser = () => {
    const queryClient = useQueryClient()
    const navigate = useNavigate()

    return useMutation(editUser, {
        onSuccess: () => {
            queryClient.invalidateQueries('user-all')
            navigate('/user-all')
        }
    })
}