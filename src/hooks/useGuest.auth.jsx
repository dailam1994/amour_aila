import { useQuery } from "react-query"

const fetchAuth = async () => {
   // Delaying function
   const delay = (ms = 2200) => new Promise((r) => setTimeout(r, ms))
   await delay()

   // Fetch API GET user authentication data
   const results = await fetch("https://user.technolashes.com/api/user/auth", {
      method: "GET",
      headers: {
         "Content-Type": "application/json",
      },
      credentials: "include",
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
         // if statement to handle return json data
         if (json) {
            return json
         }
      })
      .catch((err) => console.log(err))

   return results
}

export const useAuthData = () => {
   return useQuery("guest-auth", fetchAuth, {
      refetchOnWindowFocus: false,
   })
}
