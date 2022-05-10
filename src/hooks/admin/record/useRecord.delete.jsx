import { useMutation, useQueryClient } from "react-query"
import { useNavigate } from "react-router-dom"

const deleteRecord = async (record) => {
   // Delaying function
   const delay = (ms = 2200) => new Promise((r) => setTimeout(r, ms))
   await delay()

   const id = record.recordID

   // Fetch API DELETE for records by ID
   await fetch(`https://api1.technolashes.com/api/record/${id}`, {
      method: "DELETE",
      headers: {
         "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify(record),
   })
      .then((res) => {
         switch (res.status) {
            case 200:
               // Display successful alert message
               document.getElementById("record-delete-success").style.display = "flex"
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
         document.getElementById("record-delete-error").style.display = "flex"
         document.getElementById("record-delete-error-message").innerHTML = err
         console.log(err)
      })
}

export const useDeleteRecord = () => {
   const queryClient = useQueryClient()
   const navigate = useNavigate()

   return useMutation(deleteRecord, {
      refetchOnWindowFocus: false,
      onSuccess: () => {
         queryClient.invalidateQueries("record-all")
         setTimeout(() => navigate("/record"), 2500) // Delay response on successful implementation
      },
   })
}
