import { useEffect, useRef } from "react";

export function useBGM(src: string, play: boolean) {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current = null;
    }
    audioRef.current = new Audio(src);
    audioRef.current.loop = true;
    if (play) {
      audioRef.current.play().catch(() => {});
    }
    return () => {
      audioRef.current?.pause();
    };
    // eslint-disable-next-line
  }, [src]);

  useEffect(() => {
    if (!audioRef.current) return;
    if (play) {
      audioRef.current.play().catch(() => {});
    } else {
      audioRef.current.pause();
    }
  }, [play]);

  return audioRef;
}
