"use client"
import { ImageGallery } from "./ui/image-gallery"


const ProjectPageContent = ({project}) => {
  if (!project) {
    return <div>Project not found</div>
  }

  return (
      <div className="flex-grow container mx-auto px-4 py-8">
        <h2 className="text-2xl font-light mb-6">{project.title}</h2>
        <ImageGallery images={project.images} title={project.title} />
        <p className="text-gray-600 max-w-2xl mx-auto text-center mt-8">
          {project.description}
        </p>
      </div>
  );
}

export default ProjectPageContent;