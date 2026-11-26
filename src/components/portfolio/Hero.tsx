import { PROFILE } from "@/lib/data";
import { scrollToTarget } from "@/lib/scroll";

export function Hero() {
  return (
    <section id="top" className="hero" aria-labelledby="hero-title">
      <div className="hero-ghost" aria-hidden>
        {PROFILE.firstName.toUpperCase()}
      </div>

      <div className="hero-stage">
        <div className="hero-mark" aria-hidden>
          <span className="hero-mark-ring" />
          <span className="hero-mark-initials">{PROFILE.initials}</span>
          <span className="hero-mark-role">
            Freelance
            <br />
            Developer
          </span>
        </div>
      </div>

      <div className="wrap hero-copy">
        <div className="hero-left">
          <p
            className="tag hero-anim"
            style={{ "--i": 0 } as React.CSSProperties}
          >
            <b>Hi, I&apos;m {PROFILE.name}</b>
          </p>
          <h1
            id="hero-title"
            className="h-display mt-4 hero-anim"
            style={{ "--i": 1 } as React.CSSProperties}
          >
            Full Stack <span className="accent">Freelancer.</span>
          </h1>
        </div>
        <div
          className="hero-right hero-anim"
          style={{ "--i": 2 } as React.CSSProperties}
        >
          <div className="hero-ctas">
            <a
              href="#work"
              className="btn btn-primary"
              onClick={(e) => {
                e.preventDefault();
                scrollToTarget("#work");
              }}
            >
              Explore services
            </a>
            <a
              href="#contact"
              className="btn btn-ghost"
              onClick={(e) => {
                e.preventDefault();
                scrollToTarget("#contact");
              }}
            >
              Let&apos;s talk
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
