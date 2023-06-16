import { HomeSlider } from "../data/response";
import React from 'react'

import Cover from '../../Icons/jx.png'
import MyImage from '../Screen/Images/index'
import Calling from '../../Icons/calling.png'


export default function FirstSlider() {



    return (
        <div className='flex flex-wrap align-items padding__ width80 margin '>





            <div className='backgroundTo width50 paddingTo border-radius Order__ style_border'>
                <header>
                    <h2>{HomeSlider.title}</h2>
                    <div className='flex flex-column'>
                        <h1 className='font-size margin-top '>{HomeSlider.des}</h1>
                        <div className='flex align-items  margin-top cursor option '>
                            <a href={`tel:${HomeSlider.telefon}`} className="Telefon_link font-size" >
                                {HomeSlider.telefon}

                            </a>


                            <a href={`tel:${HomeSlider.telefon}`} className="Telefon_link margin-right" title={HomeSlider.title2} >
                                <MyImage
                                    image={Calling}
                                    width='30px'
                                    height='30px'
                                    // className='ImageSlider'
                                    alt={HomeSlider.title2}
                                    title={HomeSlider.title3}
                                />


                            </a>



                        </div>
                    </div>
                </header>
            </div>


            <div className="width50">
                <MyImage
                    image={Cover}
                    width='100%'
                    height='400px'
                    className='ImageSlider'
                    alt={HomeSlider.title}
                    title={HomeSlider.titleOnther}
                />
            </div>


        </div>
    )
}