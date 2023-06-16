import React from 'react'
import { TheName } from '../NavBar/Response'
import ListNavBar from '../NavBar/ListNavBar'
import facebook from '../../Icons/facebook.png'

import whatapp from '../../Icons/whatapp.png'
import instagram from '../../Icons/instagram.png'
import MyImage from '../Screen/Images/index'


export default function TheFooter() {





    return (
        <footer className='flex flex-wrap flex-center margin-topone paddingTo width80 margin backgroundTo style_border'>

            <div className='width50 margin-top'>
                <h2 className='firstClass'>{TheName}</h2>
            </div>

            <div className='width50'>
                <ListNavBar ClassName='flex' />
            </div>
            <div className='Line margin-top' />


            <div className='margin-topone text-align'>
                <p className='font-size option'>© جميع الحقوق محفوظة</p>
            </div>

       

        </footer>

    )
}
