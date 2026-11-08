import React, { useEffect, useRef, useState } from "react";
import { ChevronDown, Music, Pause, Play, Shuffle, VolumeX } from "lucide-react";
import "./wedding-audio.css";

const tracks = [
  { value: "nasheed_shukran-laka-rabbi.mp3", label: "Shukran Laka Rabbi", src: "/nasheed_shukran-laka-rabbi.mp3" },
  { value: "bruno-mars-marry-you.mp3", label: "Bruno Mars — Marry You", src: "/assets/audio/bruno-mars-marry-you.mp3" },
];

const labels = {
  en: { play: "Play", pause: "Pause", options: "Audio options", none: "No audio", random: "Random audio", playError: "Audio could not play. Please try again.", loadError: "Audio could not load. Please try again." },
  ar: { play: "تشغيل", pause: "إيقاف مؤقت", options: "خيارات الصوت", none: "بدون صوت", random: "صوت عشوائي", playError: "تعذّر تشغيل الصوت. يُرجى المحاولة مجددًا.", loadError: "تعذّر تحميل الصوت. يُرجى المحاولة مجددًا." },
  fr: { play: "Lire", pause: "Mettre en pause", options: "Options audio", none: "Sans audio", random: "Audio aléatoire", playError: "Impossible de lire l’audio. Veuillez réessayer.", loadError: "Impossible de charger l’audio. Veuillez réessayer." },
};

export default function WeddingAudio({ selection, onSelectionChange, lang = "en", className = "" }) {
  const copy = labels[lang] || labels.en;
  const player = useRef(null);
  const root = useRef(null);
  const wanted = useRef(Boolean(selection?.track));
  const pending = useRef(false);
  const operation = useRef(0);
  const current = useRef(selection);
  current.current = selection;
  const [playing, setPlaying] = useState(false);
  const [open, setOpen] = useState(false);
  const [error, setError] = useState("");
  const selected = tracks.find(track => track.value === selection?.track);

  function pause() {
    wanted.current = false;
    pending.current = false;
    operation.current++;
    player.current?.pause();
    setPlaying(false);
  }

  async function play(track = tracks.find(item => item.value === current.current?.track)) {
    const audio = player.current;
    if (!audio || !track) return;
    const token = ++operation.current;
    wanted.current = true;
    pending.current = true;
    setError("");
    if (audio.getAttribute("src") !== track.src) {
      audio.pause();
      audio.src = track.src;
    }
    audio.muted = false;
    audio.volume = 0.65;
    try {
      await audio.play();
      if (!wanted.current) audio.pause();
      if (token === operation.current) { pending.current = false; setPlaying(!audio.paused); }
    } catch (reason) {
      if (token === operation.current) {
        pending.current = false;
        setPlaying(false);
        if (reason.name !== "AbortError" && reason.name !== "NotAllowedError") setError(copy.playError);
      }
    }
  }

  function choose(track, isRandom = false) {
    setOpen(false);
    if (!track) {
      pause();
      onSelectionChange?.({ track: null, isRandom: false });
      return;
    }
    onSelectionChange?.({ track: track.value, isRandom });
    play(track);
  }

  useEffect(() => {
    const audio = player.current;
    const track = tracks.find(item => item.value === selection?.track);
    if (!track) {
      wanted.current = false;
      operation.current++;
      audio.pause();
      audio.removeAttribute("src");
      audio.load();
      setPlaying(false);
    } else if (audio.getAttribute("src") !== track.src) {
      audio.src = track.src;
    }
  }, [selection?.track]);

  useEffect(() => {
    // Start once on the first invitation interaction, then respect explicit pauses.
    const start = event => {
      if (root.current?.contains(event.target)) return;
      if (wanted.current && current.current?.track) play();
      document.removeEventListener("pointerdown", start);
      document.removeEventListener("keydown", start);
    };
    document.addEventListener("pointerdown", start);
    document.addEventListener("keydown", start);
    const audio = player.current;
    let resume = false;
    const visibility = () => {
      if (document.hidden) {
        resume = wanted.current && !audio.paused;
        operation.current++;
        audio.pause();
      } else {
        if (resume && wanted.current) play();
        resume = false;
      }
    };
    document.addEventListener("visibilitychange", visibility);
    return () => {
      document.removeEventListener("pointerdown", start);
      document.removeEventListener("keydown", start);
      document.removeEventListener("visibilitychange", visibility);
      audio.pause();
    };
  }, []);

  useEffect(() => {
    if (!open) return;
    const dismiss = event => { if (!root.current?.contains(event.target)) setOpen(false); };
    const key = event => {
      if (event.key === "Escape") { setOpen(false); root.current?.querySelector("[aria-haspopup]")?.focus(); }
      if (["ArrowDown", "ArrowUp", "Home", "End"].includes(event.key) && root.current?.contains(event.target)) {
        event.preventDefault();
        const items = [...root.current.querySelectorAll('[role="menuitem"]')];
        const index = items.indexOf(document.activeElement);
        const next = event.key === "Home" ? 0 : event.key === "End" ? items.length - 1 : (index + (event.key === "ArrowDown" ? 1 : -1) + items.length) % items.length;
        items[next]?.focus();
      }
    };
    root.current?.querySelector('[role="menuitem"]')?.focus();
    document.addEventListener("pointerdown", dismiss);
    document.addEventListener("keydown", key);
    return () => { document.removeEventListener("pointerdown", dismiss); document.removeEventListener("keydown", key); };
  }, [open]);

  const label = selection?.isRandom ? copy.random : selected?.label || copy.none;
  return (
    <div className={`wedding-audio ${className}`} ref={root} data-wedding-audio lang={lang} dir={lang === "ar" ? "rtl" : "ltr"}>
      <audio ref={player} loop preload="metadata" data-wedding-player onPlay={() => { if (!wanted.current) player.current.pause(); else setPlaying(true); }} onPause={() => setPlaying(false)} onEnded={() => setPlaying(false)} onError={() => { setPlaying(false); setError(copy.loadError); }} />
      <div className="wedding-audio__controls">
        <button type="button" className="wedding-audio__toggle" aria-label={playing ? `${copy.pause} ${label}` : `${copy.play} ${label}`} aria-pressed={playing} onClick={() => {
          if (!player.current.paused || pending.current) pause();
          else if (selected) play();
          else setOpen(true);
        }}>
          {playing ? <Pause size={15} aria-hidden="true" /> : <Music size={15} aria-hidden="true" />}
          <span>{label}</span>
        </button>
        <button type="button" className="wedding-audio__options" aria-label={copy.options} aria-haspopup="menu" aria-expanded={open} onClick={() => setOpen(value => !value)}><ChevronDown size={14} aria-hidden="true" /></button>
      </div>
      {open && <div role="menu" aria-label={copy.options} className="wedding-audio__menu">
        {tracks.map(track => <button type="button" role="menuitem" key={track.value} onClick={() => choose(track)}><Play size={15} aria-hidden="true" /><span>{track.label}</span>{selected?.value === track.value && !selection?.isRandom && <span aria-label="Selected">✓</span>}</button>)}
        <button type="button" role="menuitem" onClick={() => choose(null)}><VolumeX size={15} aria-hidden="true" /><span>{copy.none}</span>{!selected && <span aria-hidden="true">✓</span>}</button>
        <button type="button" role="menuitem" onClick={() => choose(tracks[Math.floor(Math.random() * tracks.length)], true)}><Shuffle size={15} aria-hidden="true" /><span>{copy.random}</span>{selection?.isRandom && <span aria-hidden="true">✓</span>}</button>
      </div>}
      {error && <p className="wedding-audio__error" role="status">{error}</p>}
    </div>
  );
}
