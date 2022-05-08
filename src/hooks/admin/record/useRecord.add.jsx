import { useMutation, useQueryClient } from "react-query"

const addRecord = async (record) => {
   // Delaying function
   const delay = (ms = 2200) => new Promise((r) => setTimeout(r, ms))
   await delay()

   // Fetch API POST record
   await fetch("http://localhost:3333/api/record", {
      method: "POST",
      headers: {
         "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify(record),
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
            document.getElementById("record-add-success").style.display = "flex"
            return json
         }
      })
      .catch((err) => {
         // Handling error display alerts
         document.getElementById("record-add-error").style.display = "flex"
         document.getElementById("record-add-error-message").innerHTML = err
         console.log(err)
      })
}

export const useAddRecord = () => {
   const queryClient = useQueryClient()

   return useMutation("record-add", addRecord, {
      refetchOnWindowFocus: false,
      onSuccess: () => {
         queryClient.invalidateQueries("record-all")
      },
   })
}
