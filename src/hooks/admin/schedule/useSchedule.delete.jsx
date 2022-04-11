import { useMutation, useQueryClient } from "react-query"
import { useNavigate } from "react-router-dom"

const deleteSchedule = async (availability) => {
    const id = availability.availabilityID

    await fetch(`http://0.0.0.0:3333/api/availability/${id}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(availability)
    }).then(res => {
        alert('Deleted Schedule Successfully!', res)
    }).catch(err => console.log(err))
}

export const useDeleteSchedule = () => {
    const queryClient = useQueryClient()
    const navigate = useNavigate()

    return useMutation(deleteSchedule, {
        onSuccess: () => {
            queryClient.invalidateQueries('schedule-all')
            navigate('/schedule-view')
        }
    })
}