const ShinyText = ({ text, disabled = false, speed = 5, className = '' }) => (
    <div
      className={`text-[#b5b5b5a4] bg-clip-text inline-block ${disabled ? '' : 'animate-shine'} ${className}`}
      style={{
        backgroundImage: 'linear-gradient(120deg, transparent 40%, rgba(255,255,255,0.8) 50%, transparent 60%)',
        backgroundSize: '200% 100%',
        WebkitBackgroundClip: 'text',
        animationDuration: `${speed}s`,
      }}
    >
      {text}
    </div>
  );
  
  export default ShinyText;
  