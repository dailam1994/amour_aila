import { useMutation, useQueryClient } from "react-query"

const editSchedule = async (availability) => {
   // Delaying function
   const delay = (ms = 2200) => new Promise((r) => setTimeout(r, ms))
   await delay()

   const id = availability.availabilityID

   // Fetch API PUT availability by ID
   await fetch(`https://user.technolashes.com/api/availability/${id}`, {
      method: "PUT",
      headers: {
         "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify(availability),
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
            document.getElementById("schedule-edit-success").style.display = "flex"
            return json
         }
      })
      .catch((err) => {
         // Handling error display alert
         document.getElementById("schedule-edit-error").style.display = "flex"
         document.getElementById("schedule-edit-error-message").innerHTML = err
         console.log(err)
      })
}

export const useEditSchedule = () => {
   const queryClient = useQueryClient()

   return useMutation("schedule-edit", editSchedule, {
      refetchOnWindowFocus: false,
      onSuccess: () => {
         queryClient.invalidateQueries("schedule-all")
      },
   })
}
