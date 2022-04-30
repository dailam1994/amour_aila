import React from "react"
import ReactDOM from "react-dom"
import App from "./App"
import { QueryClient, QueryClientProvider } from "react-query"
import { BrowserRouter } from "react-router-dom"
// import { registerSW } from "virtual:pwa-register"

export const queryClient = new QueryClient()

// Register Service Worker
// const updateSW = registerSW({
//    onOfflineReady() {},
//    onNeedRefresh() {},
// })

ReactDOM.render(
   <React.StrictMode>
      <QueryClientProvider client={queryClient}>
         <BrowserRouter>
            <App />
         </BrowserRouter>
      </QueryClientProvider>
   </React.StrictMode>,
   document.getElementById("root")
)
