import { useMutation, useQueryClient } from "react-query"
import { useNavigate } from "react-router-dom"

const addSchedule = async (schedule) => {
    await fetch('http://0.0.0.0:3333/api/availability', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(schedule)
    }).then(res => {
        res.json()
        alert('New Date created successfully!')
    }).catch(err => console.log(err))
}

export const useAddSchedule = () => {
    const queryClient = useQueryClient();
    const navigate = useNavigate()

    return useMutation(addSchedule, {
        onSuccess: () => {
            queryClient.invalidateQueries('schedule-all')
            navigate('/schedule-all')
        }
    })
}
