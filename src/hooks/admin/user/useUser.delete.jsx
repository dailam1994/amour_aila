import { useMutation, useQueryClient } from "react-query"
import { useNavigate } from "react-router-dom"

const deleteUser = async (user) => {
    const id = user.userID

    await fetch(`http://0.0.0.0:3333/api/user/${id}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
    }).then(res => {
        alert('Deleted User Successfully!', res)
    }).catch(err => console.log(err))
}

export const useDeleteUser = () => {
    const queryClient = useQueryClient()
    const navigate = useNavigate()

    return useMutation(deleteUser, {
        onSuccess: () => {
            queryClient.invalidateQueries('user-all')
            navigate('/user-all')
        }
    })
}