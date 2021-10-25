import React from "react";
import Masonry from "react-masonry-css";
import WhiteBack from "../layouts/WhiteBack";
import ProjectCard from "../components/ProjectCard";

export default function Projects({ data }) {
  const breakpointColumnsObj = {
    default: 3,
    1100: 3,
    700: 2,
    500: 1,
  };

  return (
    <WhiteBack title="Proyectos" idx="proyectos">
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {data.map((dat) => (
          <ProjectCard data={dat} />
        ))}
      </Masonry>
    </WhiteBack>
  );
}
