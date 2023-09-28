function ExperiencesCardSkeleton() {
    return (
        <div className="flex p-3 border border-dark-slate-gray rounded-2xl gap-6">
            <div className="w-28 h-28 overflow-hidden rounded-md">
                {/* Skeleton loader for image */}
                <div className="w-full h-full bg-gray-700 animate-pulse"></div>
            </div>
            <div className="flex w-[60%] flex-col justify-evenly">
                {/* Skeleton loader for job title */}
                <div className="rounded h-5 bg-gray-700 animate-pulse"></div>
                <div className="flex items-center text-sm lg:text-lg gap-3 text-gray-500">
                    {/* Skeleton loader for company name */}
                    <div className="rounded w-[80%] h-4 bg-gray-700 animate-pulse"></div>
                </div>
                <div className="text-sm lg:text-base">
                    {/* Skeleton loader for date */}
                    <div className="rounded w-[50%] h-4 bg-gray-700 animate-pulse mb-2"></div>
                    {/* Skeleton loader for duration */}
                    <div className="rounded w-12 h-4 bg-gray-700 animate-pulse"></div>
                </div>
            </div>
        </div>
    );
}

export default ExperiencesCardSkeleton;
