

export function FullscreenVideo({ src, onEnd }: { src: string; onEnd: () => void }) {
  return (
    <div className="fixed inset-0 z-50 bg-black flex items-center justify-center">
      <button
        onClick={onEnd}
        className="absolute top-4 right-4 z-[60] bg-white/20 hover:bg-white/40 rounded-full w-12 h-12 flex items-center justify-center text-white text-2xl font-bold backdrop-blur-sm transition-all hover:scale-110"
        aria-label="動画をスキップ"
      >
        ✕
      </button>
      <video
        src={src}
        className="w-full h-full object-cover"
        autoPlay
        onEnded={onEnd}
        controls={false}
      />
    </div>
  );
}
