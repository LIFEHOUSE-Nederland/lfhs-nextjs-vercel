export default function CommunityLinks() {
  return (
    <section
      id="community"
      aria-label="Community links"
      className="py-16 px-4"
    >
      <div className="max-w-3xl mx-auto space-y-6">
        <h2 className="text-2xl font-bold">Socials</h2>

        <ul className="space-y-3">
          <li>
            Instagram –{" "}
            <a
              href="https://www.instagram.com/lifehouseams/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              @lifehouseams
            </a>
          </li>
          <li>
            Facebook –{" "}
            <a
              href="https://www.facebook.com/lifehouse.amsterdam"
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              LIFEHOUSE Amsterdam
            </a>
          </li>
          <li>
            LFHS Worship –{" "}
            <a
              href="https://www.youtube.com/@LFHSWorship/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              YouTube
            </a>
          </li>
          <li>
            Livestreams –{" "}
            <a
              href="https://www.youtube.com/@GKPBNederland/streams"
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              LIFEHOUSE Nederland
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}
