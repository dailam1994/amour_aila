import { useMutation, useQueryClient } from "react-query"

const addSchedule = async (schedule) => {
   // Delaying function
   const delay = (ms = 2200) => new Promise((r) => setTimeout(r, ms))
   await delay()

   // Fetch API POST availability
   await fetch("https://proj19940827.herokuapp.com/api/availability", {
      method: "POST",
      headers: {
         "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify(schedule),
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
         // If statment to handle success alert display and return of json data
         if (json) {
            document.getElementById("schedule-add-success").style.display = "flex"
            return json
         }
      })
      .catch((err) => {
         // Handling error display alert
         document.getElementById("schedule-add-error").style.display = "flex"
         document.getElementById("schedule-add-error-message").innerHTML = err
         console.log(err)
      })
}

export const useAddSchedule = () => {
   const queryClient = useQueryClient()

   return useMutation("schedule-add", addSchedule, {
      refetchOnWindowFocus: false,
      onSuccess: () => {
         queryClient.invalidateQueries("schedule-all")
      },
   })
}
