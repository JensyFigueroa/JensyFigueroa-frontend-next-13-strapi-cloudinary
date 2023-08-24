import React from 'react'

interface Props {
    text: string
}

const PageHeader = ({ text }: Props) => {
    return (
        <h1 className='text-5x1 font-extrabold dark:text-black'>
            {text}
        </h1>
    )
}

export default PageHeader