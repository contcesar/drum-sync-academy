Hero media
- dsa.mp4         The home hero background video (real). Muted, autoplay, loop.
- hero-poster.jpg Poster/fallback still, extracted from dsa.mp4. Shown before
                  the video loads and when a visitor prefers reduced motion.

To swap the video later: replace public/dsa.mp4 (keep the name), or upload a
new file and update `videoSrc` in src/components/VideoHero.astro. Regenerate the
poster from any frame if you change the video.
