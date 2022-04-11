import { useQuery } from 'react-query'

const fetchSchedules = async () => {
    return await fetch('http://0.0.0.0:3333/api/availabilities').then(res => res.json())
}

export const useScheduleViewData = () => {
    return useQuery('schedule-all', fetchSchedules)
}