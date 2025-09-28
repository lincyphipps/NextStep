"use client";

export default function RoadmapBox({ id, title, urls, style }) {
  const handleClick = () => {
    if (urls && urls.length > 0) {
      const randomUrl = urls[Math.floor(Math.random() * urls.length)];
      window.open(randomUrl, "_blank"); // open problem in new tab
    }
  };

  return (
    <div
      id={id} // needed for react-xarrows
      onClick={handleClick}
      className="px-4 py-2 bg-blue-600 text-white rounded-md shadow-md hover:bg-blue-500 cursor-pointer absolute text-center"
      style={style}
    >
      {title}
    </div>
  );
}
