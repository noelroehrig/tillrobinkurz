"use client"

import { useState } from 'react'
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

interface ImageGalleryProps {
  images: string[]
  title: string
}

export function ImageGallery({ images, title }: ImageGalleryProps) {
  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <div className="w-full max-w-3xl mx-auto">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
        className="rounded-lg overflow-hidden"
        style={{ width: '100%', height: '100%' }} // Ensure Swiper takes full width and height
      >
        {images.map((src, index) => (
          <SwiperSlide key={index} style={{ width: '100%', height: '0', paddingBottom: '75%', position: 'relative' }}>
            <Image
              src={src}
              alt={`${title} - Image ${index + 1}`}
              layout="fill"
              objectFit="cover"
              priority={index === 0}
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <p className="text-sm text-gray-500 mt-2 text-center">
        Image {activeIndex + 1} of {images.length}
      </p>
    </div>
  )
}