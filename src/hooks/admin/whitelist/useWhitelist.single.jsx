import { useQuery } from "react-query"

const fetchSingleWhitelist = async ({ queryKey }) => {
   // Delaying function
   const delay = (ms = 2200) => new Promise((r) => setTimeout(r, ms))
   await delay()

   const id = queryKey[1]

   // If statement to handle existing id
   if (id) {
      // Fetch API GET whitelist by ID
      const results = await fetch(`http://localhost:3333/api/whitelist/${id}`, {
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
            if (document.getElementById("whitelist-edit-error")) {
               // Handling alert display of errors
               document.getElementById("whitelist-edit-error").style.display = "flex"
               document.getElementById("whitelist-edit-error-message").innerHTML = err
            } else if (document.getElementById("whitelist-single-error")) {
               // Handling alert display of errors
               document.getElementById("whitelist-single-error").style.display = "flex"
               document.getElementById("whitelist-single-error-message").innerHTML = err
            }

            console.log(err)
         })

      return results
   }
}

export const useSingleWhitelistData = (id) => {
   return useQuery(["whitelist-single", id], fetchSingleWhitelist, {
      refetchOnWindowFocus: false,
   })
}
