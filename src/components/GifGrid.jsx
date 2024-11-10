
import { GifItem } from "./GifItem";

import "../styles.css"

import { useFetchGifts } from "../hooks/useFetchGifts";


export const GifGrid = ({category}) => {

    const { images, isLoading } = useFetchGifts( category );

  return (
    <>
        <h3>{category}</h3>
        {
            isLoading && ( <h2> Cargando... </h2>)
            
        }
        <div className="card-grid">
            { images.map((item) =>
                (
                    <GifItem 
                        key={item.id} 
                        { ...item }
                    />
                ))
            }
        </div>

    </>
  )
}
