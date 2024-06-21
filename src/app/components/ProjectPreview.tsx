import React from "react";
import Image from "next/image";

const ProjectPreview = ({projectName}) => {
    return (
    <div className="flex place-items-center" style={{flexDirection: "column"}}>
        <h2 className="mb-3 text-2xl font-semibold">projectName</h2>
        <Image 
            src={`/images/${projectName}.png`}
            alt={projectName}
            width={100}
            height={24}
            priority
        />
    </div>
  );
}

export default ProjectPreview