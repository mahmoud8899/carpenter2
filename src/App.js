import React from 'react'
import NavBar from './Pages/NavBar'
import './Css/styles.css'
import TheCalling from './Pages/Screen/Calling'
import TheLoading from './Pages/Screen/TheLoading'
const Home = React.lazy(() => import('./Pages/Home'))
const TheFooter = React.lazy(() => import('./Pages/Footer'))




export default function App() {



    return (
        <div>
           
           <TheCalling   />
            <NavBar />
            <React.Suspense fallback={<TheLoading  />}>
            <Home />
            </React.Suspense>

            <React.Suspense fallback={<TheLoading  />}>
            <TheFooter />
            </React.Suspense>
    
    


        </div>
    )
}