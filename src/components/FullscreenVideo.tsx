

export function FullscreenVideo({ src, onEnd }: { src: string; onEnd: () => void }) {
  return (
    <div className="fixed inset-0 z-50 bg-black flex items-center justify-center">
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
