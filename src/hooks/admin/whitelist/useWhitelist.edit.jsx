import { useMutation, useQueryClient } from "react-query"

const editWhitelist = async (user) => {
   // Delaying function
   const delay = (ms = 3300) => new Promise((r) => setTimeout(r, ms))
   await delay()

   const id = user.userID

   // Fetch API PUT user by ID
   const results = await fetch(`http://localhost:3333/api/whitelist/${id}`, {
      method: "PUT",
      headers: {
         "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify(user),
   })
      .then((res) => {
         switch (res.status) {
            case 200:
               return res.json()
            case 400:
               throw new Error("400 Status Code")
            case 401:
               throw new Error("401 Status Code")
            case 404:
               throw new Error("404 Status Code")
            case 429:
               throw new Error("429 Status Code")
            case 500:
               throw new Error("500 Status Code")
         }
      })
      .then((json) => {
         // If statement to handle alert display on succession && return of json data
         if (json) {
            document.getElementById("whitelist-edit-success").style.display = "flex"
            return json
         }
      })
      .catch((err) => {
         // Handling alert display of errors
         document.getElementById("whitelist-edit-error").style.display = "flex"
         document.getElementById("whitelist-edit-error-message").innerHTML = err
         console.log(err)
      })

   return results
}

export const useEditWhitelist = () => {
   const queryClient = useQueryClient()

   return useMutation(editWhitelist, {
      refetchOnWindowFocus: false,
      onSuccess: () => {
         queryClient.invalidateQueries("whitelist-all")
      },
   })
}
