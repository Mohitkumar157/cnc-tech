import React from 'react'
import Breadcrumb from '../ui/BreadCrumb'
import Image from 'next/image'

function MicroScopeGrid({ data }) {
    console.log("Data", data);

    return (
        <section className='pt-25'>
            <div className="container px-4 lg:px-0 py-8 md:py-12 lg:py-16">
                <Breadcrumb productTitle={data.title} />
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {data.images.map((image, index) => (
                        <div
                            key={index}
                            className="group relative aspect-square overflow-hidden rounded-lg
  shadow-md shadow-black/10
  hover:shadow-xl hover:shadow-black/20
  hover:-translate-y-1
  transition-all duration-500"
                        >
                            <Image
                                src={image.src}
                                alt="Microscope image"
                                fill
                                loading="lazy"
                                sizes="(max-width: 767px) 100vw, 50vw"
                                className="object-cover group-hover:scale-110 transition-transform duration-500"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default MicroScopeGrid;
