const Image = ({ src, alt }: { src: string; alt: string }) => (
    <img src={src} alt={alt} className="w-full h-auto mt-4" />
);

export default Image;
