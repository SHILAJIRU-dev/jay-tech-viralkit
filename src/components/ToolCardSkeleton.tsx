const ToolCardSkeleton = () => {
  return (
    <div className="p-6 bg-brand-light-blue rounded-xl shadow-lg border border-brand-border-blue">
      <div className="animate-pulse flex flex-col h-full">
        {/* Lottie Animation Placeholder */}
        <div className="w-full h-32 mb-4 bg-brand-border-blue/50 rounded-lg"></div>
        
        {/* Title Placeholder */}
        <div className="h-6 bg-brand-border-blue/50 rounded-md w-3/4 mb-3"></div>
        
        {/* Description Placeholder */}
        <div className="h-4 bg-brand-border-blue/50 rounded-md w-full mb-2"></div>
        <div className="h-4 bg-brand-border-blue/50 rounded-md w-5/6"></div>
        
        {/* Arrow Placeholder (bottom right) */}
        <div className="h-6 w-16 bg-brand-border-blue/50 rounded-md mt-auto self-end"></div>
      </div>
    </div>
  );
};

export default ToolCardSkeleton;