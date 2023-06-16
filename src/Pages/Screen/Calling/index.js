import React from "react";
import { TelefonNumber } from "../../data/response";
import Caling from '../../../Icons/calling.png'
import WhatApp from '../../../Icons/whatapp.png'
import MyImage from '../../Screen/Images/index'

export default function TheCalling() {



    return (

        <div className="fixed flex flex-column flex-center align-items">

            <div className="flex flex-row flex-center align-items" >
                <span className="TEXT__">إتصل الآن</span>
                <div className='devCling cursor '>

                    <a href={`tel:${TelefonNumber.telefon}`} className="Telefon_link" >
                        <MyImage
                            image={Caling}
                            width='30px'
                            height='30px'
                            alt='calling'
                        />
                    </a>
                </div>
            </div>


            <div className="flex flex-row flex-center align-items margin-top cursor" >
                <span className="TEXT__ background-wahtapp">واتساب</span>
                <div className='devCling cursor '>

                    <a href="https://wa.me/+966573129110" className="Telefon_link" target="_blank" >
                        <MyImage
                            image={WhatApp}
                            width='30px'
                            height='30px'
                            alt='whatapp'
                        />
                    </a>
                </div>
            </div>


        </div>


    )
}