import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";

export const useFetchGifts = (category) => {

    const [images, setImages] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    const getImages = async () => {
        const resp = await getGifs(category);
        setImages(resp)
        setIsLoading(false)
    }

    useEffect(() => {
        getImages()
    }, [] )

  return {
    images,
    isLoading
  }
}
