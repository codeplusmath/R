import React from 'react'
import { FaLocationDot } from "react-icons/fa6";

export default function Card(props){

    return (
        <div className='card'>
            <img src={props.item.imgURL} alt='location best view' className='card--img'></img>
            <div className='card--desc'>
                <div className='card--header'>
                    <FaLocationDot className='cardLoc--logo'/>
                    <p className='card--country'>{props.item.country.toUpperCase()}</p>
                    <a href={props.item.mapLocation} className='card--mapLink' target='_blank' rel='noreferrer'>View on Google Maps</a>
                </div>
                <h1 className='card--title'>{props.item.name}</h1>
                <b className='card--para'>{props.item.duration.startDate} - {props.item.duration.endDate}</b>
                <p className='card--para-desc'>{props.item.description}</p>
            </div>
        </div>
    )
}

// id:3,
//         name:'Geirangerfjord',
//         duration:{
//             startDate:'01 Oct, 2021',
//             endDate:'18 Nov, 2021'
//         },
//         country: 'NORWAY',
//         description: 'The Geiranger Fjord is a fjord in the Sunnmøre region of Møre og Romsdal county, Norway. It is located entirely in the Stranda Municipality.',
//         imgURL: 'https://source.unsplash.com/3PeSjpLVtLg',
//         mapLocation: 'https://maps.app.goo.gl/LMc1wHfB2UcRaJ5fAeibccbdvnivnnjhnidtflkribrdrnguttdhtdbnekjhd'
    