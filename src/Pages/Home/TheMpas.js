import React from 'react'
import GoogleMapReact from 'google-map-react';
import { MpaStyles } from './Mapstyles'
import TheMpasOne from '../../Icons/ww.png'
import { TheMapInf, MyAddress, TelefonNumber, TelefonNumber2 } from '../data/response';
import MyImage from '../Screen/Images/index'
import Calling from '../../Icons/calling.png'
export default function TheMpas() {

    const defaultProps = {
        center: {
            lat: 24.843049,
            lng: 46.656977
        },
        zoom: 15
    };

    const AnyReactComponent = ({ text }) => {

        return (
            <div className=''>
                <MyImage
                    image={TheMpasOne}

                    alt='the map'
                    width='50px'
                    height='50px'
                    title='the map'

                />

                {text}
            </div>

        )
    };



    const ArrayCalling = [
        {
            _id: 1,
            title: TelefonNumber.title,
            telefon: TelefonNumber.telefon,
            image: Calling

        },

    ]




    return (

        <div>

            <h2 className='text-align margin-bottom margin-top2'>{TheMapInf.title}</h2>


            <div className='Maps position' >

                <div className=' paddingTo width50 mapsText' >
                    <h2>{MyAddress.title}</h2>
                    <div className='margin-topOneee'>
                        <p className='font-size '>{MyAddress.address}</p>
                    </div>



                    {ArrayCalling.map((item, index) => (
                        <div key={index} >
                            <h2 className='margin-top '>{item.title}</h2>

                            <div className='flex flex-column'>

                                <div className='flex align-items  margin-top cursor option font-size'>
                                    <a href={`tel:${item.telefon}`} className="Telefon_link " >
                                        {item.telefon}

                                    </a>


                                    <a href={`tel:${item.telefon}`} className="Telefon_link margin-right" title='mahmsdfadsf' >
                                        <MyImage
                                            image={Calling}
                                            width='30px'
                                            height='30px'
                                            // className='ImageSlider'
                                            alt={item.telefon}
                                            title={item.telefon}
                                        />


                                    </a>



                                </div>
                            </div>
                        </div>
                    ))}
                </div>


                <GoogleMapReact
                    bootstrapURLKeys={{ key: "AIzaSyCEB_-tQr1NNxJRvK8xyfRbz4dO8a-JQxA" }}
                    defaultCenter={defaultProps.center}
                    defaultZoom={defaultProps.zoom}
                    defaultOptions={{ styles: MpaStyles }}

                >
                    <AnyReactComponent
                        lat={24.843049}
                        lng={46.656977}
                        text="نجار - للديكور الخشبي"


                    />

                </GoogleMapReact>
            </div>
        </div>






    )
}