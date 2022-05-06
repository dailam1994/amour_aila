import { useMutation, useQueryClient } from "react-query"
import { useNavigate } from "react-router-dom"

const deleteSchedule = async (availability) => {
   // Delaying function
   const delay = (ms = 1100) => new Promise((r) => setTimeout(r, ms))
   await delay()

   const id = availability.availabilityID

   // Fetch API DELETE availability by ID
   await fetch(`https://user.technolashes.com/api/availability/${id}`, {
      method: "DELETE",
      headers: {
         "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify(availability),
   })
      .then((res) => {
         switch (res.status) {
            case 200:
               // Display successful alert message
               document.getElementById("schedule-delete-success").style.display = "flex"
               return
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
      .catch((err) => {
         // Handling error display alert
         document.getElementById("schedule-delete-error").style.display = "flex"
         document.getElementById("schedule-delete-error-message").innerHTML = err
         console.log(err)
      })
}

export const useDeleteSchedule = () => {
   const queryClient = useQueryClient()
   const navigate = useNavigate()

   return useMutation("schedule-delete", deleteSchedule, {
      refetchOnWindowFocus: false,
      onSuccess: () => {
         queryClient.invalidateQueries("schedule-all")
         setTimeout(() => navigate("/schedule/view"), 2500) // Delay response on successful implementation
      },
   })
}
