import React from 'react'

const Character = (props) => {
    //console.log(props);
    return (
        <div className="max-w-sm flex-auto rounded overflow-hidden shadow-lg">
            <img className="w-full" src={props.image} alt="Sunset in the mountains" />
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">nombre: {props.name}</div>
                <p className="text-gray-700 text-base">
                    raza: {props.race}
                </p>
            </div>
            <div className="px-6 pt-4 pb-2">
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
            </div>
            <button className='text-blue-300 bg-grey-300' >ver mas</button>
        </div>
    )
}

export default Character