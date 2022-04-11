import { useMutation, useQueryClient } from "react-query"
import { useNavigate } from "react-router-dom"

const editSchedule = async (availability) => {
    const id = availability.availabilityID

    await fetch(`http://0.0.0.0:3333/api/availability/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(availability)

    }).then(res => {
        res.json()
        alert('Edited Schedule successfully!')
    }).catch(err => console.log(err))
}

export const useEditSchedule = () => {
    const queryClient = useQueryClient()
    const navigate = useNavigate()

    return useMutation(editSchedule, {
        onSuccess: () => {
            queryClient.invalidateQueries('schedule-all')
            navigate('/schedule-view')
        }
    })
}