import { useMutation, useQueryClient } from "react-query"
import { useNavigate } from "react-router-dom"

const deleteUser = async (user) => {
   // Delaying function
   const delay = (ms = 2200) => new Promise((r) => setTimeout(r, ms))
   await delay()

   const id = user.userID

   // Fetch API DELETE user by ID
   await fetch(`http://localhost:3333/api/user/${id}`, {
      method: "DELETE",
      headers: {
         "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify(user),
   })
      .then((res) => {
         switch (res.status) {
            case 200:
               // Handle success alert display
               document.getElementById("user-delete-success").style.display = "flex"
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
         document.getElementById("user-delete-error").style.display = "flex"
         document.getElementById("user-delete-error-message").innerHTML = err
         console.log(err)
      })
}

export const useDeleteUser = () => {
   const queryClient = useQueryClient()
   const navigate = useNavigate()

   return useMutation(deleteUser, {
      refetchOnWindowFocus: false,
      onSuccess: () => {
         queryClient.invalidateQueries("user-all")
         setTimeout(() => navigate("/user/all"), 2500) // Delay on success implementation
      },
   })
}
