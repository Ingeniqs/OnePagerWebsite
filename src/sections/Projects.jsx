import React from "react";
import Masonry from "react-masonry-css";
import WhiteBack from "../layouts/WhiteBack";
import ProjectCard from "../components/ProjectCard";

export default function Projects({ data }) {
  return (
    <WhiteBack title="Proyectos" idx="proyectos">
      <Masonry
        breakpointCols={3}
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
