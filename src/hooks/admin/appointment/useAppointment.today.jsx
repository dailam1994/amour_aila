import { useQuery } from "react-query"

const fetchAppointmentToday = async () => {
   // Delaying function
   const delay = (ms = 2020) => new Promise((r) => setTimeout(r, ms))
   await delay()

   // Fetch API GET for today appointments
   const results = await fetch(`http://localhost:3333/api/appointment/today`, {
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

export const useAppointmentToday = () => {
   return useQuery("appointment-today", fetchAppointmentToday, {
      refetchOnWindowFocus: false,
   })
}
