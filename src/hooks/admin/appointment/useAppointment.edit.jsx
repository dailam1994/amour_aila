import { useMutation } from "react-query"

const editAppointment = async (booking) => {
   // Delaying function
   const delay = (ms = 4040) => new Promise((r) => setTimeout(r, ms))
   await delay()

   const id = booking.bookingID

   // Fetch API PUT for bookings by ID
   await fetch(`https://server-lashes19940827.herokuapp.com/api/booking/${id}`, {
      method: "PUT",
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
         // If statment to handle success alert display and return of json data
         if (json) {
            document.getElementById("booking-edit-success").style.display = "flex"
            return json
         }
      })
      .catch((err) => {
         // Handling error display alert
         document.getElementById("booking-edit-error").style.display = "flex"
         document.getElementById("booking-edit-error-message").innerHTML = err
         console.log(err)
      })
}

export const useEditAppointment = () => {
   return useMutation("appointment-edit", editAppointment, {
      refetchOnWindowFocus: false,
   })
}
