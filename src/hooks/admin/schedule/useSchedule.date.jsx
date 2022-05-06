import { useQuery } from "react-query"

const fetchScheduleDate = async ({ queryKey }) => {
   // Delaying function
   const delay = (ms = 4400) => new Promise((r) => setTimeout(r, ms))
   await delay()

   const date = queryKey[1]

   // Fetch API GET availability date by date
   if (date) {
      const results = await fetch(`https://proj19940827.herokuapp.com/api/availability/date/${date}`, {
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
            // if statement to handle return json data
            if (json) {
               return json
            }
         })
         .catch((err) => console.log(err))

      return results
   }
}

export const useScheduleDateData = (date) => {
   return useQuery(["availability-date", date], fetchScheduleDate, {
      refetchOnWindowFocus: false,
   })
}
