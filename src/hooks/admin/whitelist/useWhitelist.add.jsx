import { useMutation, useQueryClient } from "react-query"

const addWhitelist = async (ip) => {
   // Delaying function
   const delay = (ms = 2200) => new Promise((r) => setTimeout(r, ms))
   await delay()

   // Fetch API POST White List
   await fetch("http://localhost:3333/api/whitelist", {
      method: "POST",
      headers: {
         "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify(ip),
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
         // If statement to handle alert on success && return json data
         if (json) {
            document.getElementById("whitelist-add-success").style.display = "flex"
            return json
         }
      })
      .catch((err) => {
         // Handling error display alerts
         document.getElementById("whitelist-add-error").style.display = "flex"
         document.getElementById("whitelist-add-error-message").innerHTML = err
         console.log(err)
      })
}

export const useAddWhitelist = () => {
   const queryClient = useQueryClient()
   return useMutation("whitelist-add", addWhitelist, {
      refetchOnWindowFocus: false,
      onSuccess: () => {
         queryClient.invalidateQueries("whitelist-all")
      },
   })
}
