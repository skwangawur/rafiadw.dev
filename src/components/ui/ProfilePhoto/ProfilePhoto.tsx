interface ProfilePhotoProps {
  url: string;
  alt: string;
}

function ProfilePhoto(props: ProfilePhotoProps) {
  const { url, alt } = props;
  return <img className="w-24  mt-10 h-auto" src={url} alt={alt} />;
}

export default ProfilePhoto;
