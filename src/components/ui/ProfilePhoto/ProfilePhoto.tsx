import { Link } from "react-router-dom";

interface ProfilePhotoProps {
  url: string;
  alt: string;
}

function ProfilePhoto(props: ProfilePhotoProps) {
  const { url, alt } = props;
  return (
    <Link to="/" className="w-24 h-24 rounded-full overflow-hidden mt-10 ">
      <img
        className="w-full h-full hover:scale-110 transition"
        src={url}
        alt={alt}
      />
    </Link>
  );
}

export default ProfilePhoto;
