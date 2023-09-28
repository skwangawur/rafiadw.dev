function ProjectCardSkeleton() {
    return (
        <div className="group">
            <div className="flex flex-col p-2 border border-dark-slate-gray gap-3 sm:gap-5 rounded-xl border-collapse dark:border-gray-400">
                <div className="rounded overflow-hidden w-full h-[150px]">
                    <div className="w-full h-full bg-gray-700 animate-pulse"></div>
                </div>
                <div className="flex flex-col gap-4">
                    <div className="flex gap-2">
                        <div className="bg-gray-700 rounded h-4 w-16 animate-pulse"></div>
                        <div className="bg-gray-700 rounded h-4 w-16 animate-pulse"></div>
                        <div className="bg-gray-700 rounded h-4 w-16 animate-pulse"></div>
                    </div>
                    <div className="bg-gray-700 rounded h-6 w-40 animate-pulse"></div>
                    <div className="bg-gray-700 rounded h-4 w-full animate-pulse"></div>
                </div>
            </div>
        </div>
    );
}

export default ProjectCardSkeleton;
