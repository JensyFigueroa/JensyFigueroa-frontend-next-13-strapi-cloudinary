import React from 'react'
import { getStrapiURL } from '@/helpers/api-helper';
import Image from 'next/image';
import { Book } from '@/interfaces/book'

interface Props {
    book: Book
}

const PageCardStore = ({ book }: Props) => {
    const { id } = book;
    const { title, description, price, image, stock } = book.attributes;

    const { url, width, height } = image.data[0].attributes.formats.medium;

    // const { addCartProducts } = useContext(cartContext);
    // const router = useRouter();
  
    const handleAddToCart = () => {
    //   addCartProducts({ id, title, price });
    //   router.push("/cart");
    };


    return (
        <div className="bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <Image
                className="rounded-t-lg w-full"
                src={url}
                alt={`imagen de ${title}`}
                width={width}
                height={height}
            />

<div className="p-5">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {title}
        </h5>

        <p className="text-gray-500 mb-2 text-lg">
          Precio:{price /*  ${formatPrice(price)} */}
        </p>
        <p className="text-gray-500 mb-2 text-lg">
          Stock: {stock/* {formatPrice(stock)} */} unidades
        </p>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {description}
        </p>
        <button
        //   onClick={handleAddToCart}
          className={`inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 ${stock === 0 && 'pointer-events-none opacity-50'}`}
        >
          {stock === 0 ? "Sin stock" : "Comprar"}
          <svg
            aria-hidden="true"
            className="w-4 h-4 ml-2 -mr-1"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
              clipRule="evenodd"
            ></path>
          </svg>
        </button>
      </div>

        </div>
    )
}

export default PageCardStore