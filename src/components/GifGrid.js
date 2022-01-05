import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({category}) => {

    // const [count, setCount] = useState(0);

    // const [images, setImages] = useState([])
    const { data:images, loading} = useFetchGifs(category);


    // useEffect( () => {
    //     // getGifs();
    //     getGifs( category )
    //         .then( setImages )
    // }, [ category ])

    // const getGifs = async() => {

    //     const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=10&api_key=wYK4i70DtcUYtXuH8ZX3ZCQx5AnI4e9J`;
    //     const resp = await fetch(url);
    //     const { data } = await resp.json();

    //     const gifs = data.map( img => {
    //         return {
    //             id: img.id,
    //             title: img.title,
    //             url: img.images?.downsized_medium.url
    //         }
    //     })

    //     console.log(gifs);

    //     setImages(gifs)

    // }


    return (
        <>
            <h3 className=' animate__animated animate__fadeIn'>{ category }</h3>
            { loading && <p className=' animate__animated animate__flash'>Loading</p>}
            {/* <h3>{ count }</h3>
            <button onClick={ ()=>setCount( count + 1 ) }></button> */}
            <div className='card-grid'>
                    {
                        images.map( (img) => (
                            <GifGridItem  
                                key={img.id}
                                { ...img }
                            />
                        ))
                    }
            </div>
        </>
    )
}
