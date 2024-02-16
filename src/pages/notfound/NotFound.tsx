function NotFound() {
    return (
        <div className="text-white flex flex-col justify-center items-center ">
            <h1 className="text-4xl font-extrabold pt-10 pb-10">
                Not Found 404 :')
            </h1>
            <video width={400} height={600} controls autoPlay>
                <source
                    src="https://res.cloudinary.com/dqoyjfyzt/video/upload/v1708102742/WhatsApp_Video_2024-02-16_at_23.56.16_ooqjiv.mp4"
                    type="video/mp4"
                />
            </video>
        </div>
    );
}

export default NotFound;
