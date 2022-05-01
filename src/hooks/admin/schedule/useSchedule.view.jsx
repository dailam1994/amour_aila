import { useQuery } from "react-query"

const fetchSchedules = async () => {
   // Delaying function
   const delay = (ms = 1100) => new Promise((r) => setTimeout(r, ms))
   await delay()

   // Fetch API GET availabilities
   const results = await fetch("https://server-lashes19940827.herokuapp.com/api/availabilities", {
      method: "GET",
      headers: {
         "Content-Type": "application/json",
      },
      credentials: "include",
   })
      .then((res) => {
         switch (res.status) {
            case 200:
               return res.json()
            case 400:
               throw new Error("400 Status Code")
            case 401:
               throw new Error("401 Status Code")
            case 429:
               throw new Error("429 Status Code")
            case 500:
               throw new Error("500 Status Code")
         }
      })
      .then((json) => {
         // If statement to handle return json data
         if (json) {
            return json
         }
      })
      .catch((err) => console.log(err))

   return results
}

export const useScheduleViewData = () => {
   return useQuery("schedule-all", fetchSchedules, {
      refetchOnWindowFocus: false,
   })
}
