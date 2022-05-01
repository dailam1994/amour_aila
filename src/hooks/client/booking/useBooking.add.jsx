import { useMutation } from "react-query"
import { useNavigate } from "react-router-dom"

const addBooking = async (booking) => {
   // Delaying function
   const delay = (ms = 3300) => new Promise((r) => setTimeout(r, ms))
   await delay()

   // Fetch API POST booking data
   await fetch("https://server-lashes19940827.herokuapp.com/api/booking", {
      method: "POST",
      headers: {
         "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify(booking),
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
         // If statement to handle alert display & return of json data
         if (json) {
            document.getElementById("booking-add-success").style.display = "flex"
            return json
         }
      })
      .catch((err) => {
         // Handle alert displays for errors
         document.getElementById("booking-add-error").style.display = "flex"
         document.getElementById("booking-add-error-message").innerHTML = err
         console.log(err)
      })
}

export const useAddBooking = () => {
   const navigate = useNavigate()

   return useMutation("booking-add", addBooking, {
      refetchOnWindowFocus: false,
      retry: false,
      onSuccess: () => {
         setTimeout(() => navigate("/booking/availability"), 2500) // Delay on successful booking
      },
   })
}
