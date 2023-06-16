import React, { useState } from 'react'
import CallIcons from '../../Icons/call.png'
import MapsIcons from '../../Icons/map.png'
import ListNavBar from './ListNavBar'
import { ListNavBarTop, TheName } from './Response'
import { MyAddress, TelefonNumber } from '../data/response'
import MyImage from '../Screen/Images/index'


export default function NavBar() {






    const InfoImed = {
        name : 'نجار - للديكور الخشبي',

    }





    return (
        <div className='padding__ background'>

            <div className='flex flex-wrap flex-center margin-topone'>


                <div className='width50 flex flex-center'>
                    <div className='margin-leftOne widthx'>

                        <p className='font-size'>
                            {TelefonNumber.title}
                        </p>
                        <p className='font-size margin-top option cursor'>
                            <a href={`tel:${TelefonNumber.telefon}`} className="Telefon_link" >
                                {TelefonNumber.telefon}
                            </a>
                        </p>

                    </div>
                    <a href={`tel:${TelefonNumber.telefon}`} className="Telefon_link" >

                        <MyImage
                            image={CallIcons}
                            className='CallImage add'
                            alt='the calling'
                            width='40px'
                            height='40px'

                        />
                    </a>

                </div>

                <div className='width50 Extra flex flex-center '>
                    <div className='margin-leftOne widthx'>
                        <p className='font-size'>{MyAddress.title}</p>
                        <p className='font-size margin-top option cursor'>
                            {MyAddress.address}
                        </p>
                    </div>
                    <MyImage
                        image={MapsIcons}
                        className='CallImage'
                        alt='the calling'
                        width='40px'
                        height='40px'

                    />

                </div>

            </div>

            <nav className='margin-top2 text-align'>
                <h2 className='firstClass font-weight cursor'>{InfoImed.name}</h2>

            </nav>


        </div>
    )
}
