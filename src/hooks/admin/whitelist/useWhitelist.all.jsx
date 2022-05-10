import { useQuery } from "react-query"

const fetchWhitelist = async () => {
   // Delaying function
   const delay = (ms = 1100) => new Promise((r) => setTimeout(r, ms))
   await delay()

   // Fetch API GET White Lists
   const results = await fetch("https://api.technolashes.com/api/whitelists", {
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
            case 404:
               throw new Error("404 Status Code")
            case 429:
               throw new Error("429 Status Code")
            case 500:
               throw new Error("500 Status Code")
         }
      })
      .then((json) => {
         // If statement to handle return json data
         if (json) {
            return json
         }
      })
      .catch((err) => {
         // Handling error display alerts
         document.getElementById("whitelist-all-error").style.display = "flex"
         document.getElementById("whitelist-all-error-message").innerHTML = err
         console.log(err)
      })

   return results
}

export const useWhitelistAllData = () => {
   return useQuery("whitelist-all", fetchWhitelist, {
      refetchOnWindowFocus: false,
   })
}
