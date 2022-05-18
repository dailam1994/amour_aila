import { useMutation, useQueryClient } from "react-query"
import { useNavigate } from "react-router-dom"

const deleteBlockip = async (data) => {
   // Delaying function
   const delay = (ms = 2200) => new Promise((r) => setTimeout(r, ms))
   await delay()

   const ip = data

   // Fetch API DELETE Blockip by IP
   await fetch("http://localhost:3333/api/blockip", {
      method: "DELETE",
      headers: {
         "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify(ip),
   })
      .then((res) => {
         switch (res.status) {
            case 200:
               // Handle success alert display
               document.getElementById("ip-delete-success").style.display = "flex"
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
         // Handle error alert display
         document.getElementById("ip-delete-error").style.display = "flex"
         document.getElementById("ip-delete-error-message").innerHTML = err
         console.log(err)
      })
}

export const useDeleteBlockip = () => {
   const queryClient = useQueryClient()
   const navigate = useNavigate()

   return useMutation(deleteBlockip, {
      refetchOnWindowFocus: false,
      onSuccess: () => {
         queryClient.invalidateQueries("blockip-all")
         setTimeout(() => navigate("/log/all"), 2500) // Delay on success implementation
      },
   })
}
