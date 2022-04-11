import { useQuery } from 'react-query'

const fetchSchedule = async ({ queryKey }) => {
    const id = queryKey[1]
    const results = await fetch(`http://0.0.0.0:3333/api/availability/${id}`).then(res => res.json())
    return results
}

export const useScheduleData = (id) => {
    return useQuery(['availability-single', id], fetchSchedule)
}