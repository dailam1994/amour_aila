import { useMutation } from "react-query"

const updateRecord = async (record) => {
   // Delaying function
   const delay = (ms = 4400) => new Promise((r) => setTimeout(r, ms))
   await delay()

   const id = record.recordID

   // Fetch API PUT for record by ID
   await fetch(`https://api.technolashes.com/api/record/${id}`, {
      method: "PUT",
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
         // If statment to handle success alert display and return of json data
         if (json) {
            document.getElementById("record-update-success").style.display = "flex"
            return json
         }
      })
      .catch((err) => {
         // Handling error display alert
         document.getElementById("record-update-error").style.display = "flex"
         document.getElementById("record-update-error-message").innerHTML = err
         console.log(err)
      })
}

export const useUpdateRecord = () => {
   return useMutation("record-update", updateRecord, {
      refetchOnWindowFocus: false,
   })
}
