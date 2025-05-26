export default function Cards({ title, link, image }) {
  return (
    <div className="flex flex-col justify-center items-center border-2 p-2 border-transparent hover:border-yellow-400">
      <a href={link} target="_blank">
        <div className="aspect-[1920/913] w-full overflow-hidden">
          <img src={image} alt={title} className="w-full h-full object-cover" />
        </div>
        <h1 className="text-center">{title}</h1>
      </a>
    </div>
  );
}
