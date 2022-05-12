import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import App from "./App"
import { QueryClient, QueryClientProvider } from "react-query"
import { BrowserRouter } from "react-router-dom"
import { registerSW } from "virtual:pwa-register"

const rootElement = document.getElementById("root")
const root = createRoot(rootElement)
export const queryClient = new QueryClient()

// Register Service Worker
const updateSW = registerSW({
   onOfflineReady() {},
   onNeedRefresh() {},
})

root.render(
   <StrictMode>
      <QueryClientProvider client={queryClient}>
         <BrowserRouter>
            <App />
         </BrowserRouter>
      </QueryClientProvider>
   </StrictMode>
)
