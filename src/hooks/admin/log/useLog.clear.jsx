import { useMutation } from "react-query"
import { useNavigate } from "react-router-dom"

const clearLog = async () => {
   // Delaying function
   const delay = (ms = 2200) => new Promise((r) => setTimeout(r, ms))
   await delay()

   // Fetch API DELETE ALL Logs
   await fetch(`https://api.technolashes.com/api/loggings`, {
      method: "DELETE",
      credentials: "include",
   })
      .then((res) => {
         switch (res.status) {
            case 200:
               // Handle success alert display
               document.getElementById("log-clear-success").style.display = "flex"
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
         document.getElementById("log-clear-error").style.display = "flex"
         document.getElementById("log-clear-error-message").innerHTML = err
         console.log(err)
      })
}

export const useClearLog = () => {
   const navigate = useNavigate()

   return useMutation(clearLog, {
      refetchOnWindowFocus: false,
      onSuccess: () => {
         setTimeout(() => navigate("/log/all"), 2500) // Delay on success implementation
      },
   })
}
