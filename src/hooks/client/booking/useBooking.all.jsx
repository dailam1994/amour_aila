import { useQuery } from "react-query"

const fetchBookings = async () => {
   // Delaying function
   const delay = (ms = 3300) => new Promise((r) => setTimeout(r, ms))
   await delay()

   // Fetch API GET bookings
   const results = await fetch("https://server-lashes19940827.herokuapp.com/api/bookings", {
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
         // If statement to handle return of json data
         if (json) {
            return json
         }
      })
      .catch((err) => console.log(err))

   return results
}

export const useBookingsData = () => {
   return useQuery("booking-all", fetchBookings, {
      refetchOnWindowFocus: false,
   })
}
