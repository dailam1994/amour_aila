import { useMutation } from "react-query"
import { useNavigate } from "react-router-dom"

const deleteAppointment = async (booking) => {
   // Delaying function
   const delay = (ms = 2020) => new Promise((r) => setTimeout(r, ms))
   await delay()

   const id = booking.bookingID

   // Fetch API DELETE for bookings by ID
   await fetch(`https://server-lashes19940827.herokuapp.com/api/booking/${id}`, {
      method: "DELETE",
      headers: {
         "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify(booking),
   })
      .then((res) => {
         switch (res.status) {
            case 200:
               // Display successful alert message
               document.getElementById("booking-delete-success").style.display = "flex"
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
         document.getElementById("booking-delete-error").style.display = "flex"
         document.getElementById("booking-delete-error-message").innerHTML = err
         console.log(err)
      })
}

export const useDeleteAppointment = () => {
   const navigate = useNavigate()

   return useMutation(deleteAppointment, {
      refetchOnWindowFocus: false,
      onSuccess: () => {
         setTimeout(() => navigate("/appointment"), 2500) // Delay response on successful implementation
      },
   })
}
