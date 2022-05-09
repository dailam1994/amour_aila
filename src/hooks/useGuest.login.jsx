import { useMutation } from "react-query"

const loginGuest = async (guest) => {
   // Delaying function
   const delay = (ms = 1100) => new Promise((r) => setTimeout(r, ms))
   await delay()

   // Fetch API POST User Login Data
   await fetch("https://api.technolashes.com/api/user/login", {
      method: "POST",
      headers: {
         "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify(guest),
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
         // If statement to handle json message and redirect
         if (json) {
            alert(json.message)
            window.location.href = "https://technolashes.com"
         }
      })
      .catch((err) => alert(err))
}

export const useLoginGuest = () => {
   return useMutation("guest-login", loginGuest, {
      refetchOnWindowFocus: false,
   })
}
