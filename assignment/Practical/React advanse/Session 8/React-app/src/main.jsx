import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { ThemeProvider } from "./Componets/ThemeContext.jsx"
import { UserProvider } from './Componets/UserContext.jsx'
import { FavoritesProvider } from './Componets/FavoritesContext.jsx'
import { PlayerProvider } from './context/PlayerContext.jsx'
import { AuthProvider } from './Componets/AuthContext.jsx'
import { CartContext, CartProvider } from './Componets/CartContext.jsx'

createRoot(document.getElementById('root')).render(
 <CartProvider>
    <AuthProvider>
     <PlayerProvider>
       <UserProvider>
        <FavoritesProvider>
         <ThemeProvider>
           <App/>
         </ThemeProvider>
         </FavoritesProvider>
        </UserProvider>
     </PlayerProvider>
   </AuthProvider>
</CartProvider>
 
)
