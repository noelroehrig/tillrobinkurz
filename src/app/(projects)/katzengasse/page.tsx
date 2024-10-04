"use client";
import Header from "../../components/Header";
import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import ProjectPageContent from '../../components/ProjectPageContent';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const project =  {
  title: "Project One",
  images: [
    "/katzengasse.png", // TODO: Pathing does not work??
    "/katzengasse.png",
    "/katzengasse.png",
  ],
  description: "A brief description of Project One. This modern architectural design combines functionality with aesthetic appeal, creating a space that is both practical and visually striking.",
}

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-12">
      <Header />

      <ProjectPageContent project={project} />
    </main>
  );
}
