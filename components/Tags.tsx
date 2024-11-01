import React from "react";

interface TagType {
  name: string;
  color: string;
  size: string;
}

const Tags: React.FC<TagType> = ({ name, color, size }) => {
  return (
    <div
      className="text-white px-3 py-1 mt-3 rounded-full flex justify-center"
      style={{ backgroundColor: `#${color}`, fontSize: `${size}` }}
    >
      #{name}
    </div>
  );
};

export default Tags;
