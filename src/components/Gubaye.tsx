import { ExternalLink } from "@/components/ExternalLink";
import { gatheringSchedule, site } from "@/content/site";

export function Gubaye() {
  const { gathering, contact } = site;
  const meetingUrl = gathering.meetingUrl;
  const hasMeetingUrl = Boolean(meetingUrl);

  return (
    <section
      id="saturday-gubaye"
      className="scroll-mt-24 bg-burgundy-deep text-cream"
    >
      <div className="mx-auto grid max-w-6xl gap-14 px-5 py-20 sm:px-8 lg:grid-cols-12 lg:py-24">
        <div className="lg:col-span-5">
          <p className="text-xs uppercase tracking-[0.2em] text-gold">
            Each week
          </p>
          <h2 className="mt-4 font-serif text-4xl tracking-tight sm:text-5xl">
            {gathering.name}
          </h2>
          <p className="mt-6 text-xl text-cream/90">{gatheringSchedule()}</p>
          <p className="mt-6 leading-relaxed text-cream/85">{gathering.intro}</p>
          <p className="mt-4 leading-relaxed text-cream/85">{gathering.expect}</p>

          {hasMeetingUrl && meetingUrl ? (
            <>
              <ExternalLink
                href={meetingUrl}
                className="mt-8 inline-flex rounded-sm bg-cream px-6 py-3 text-burgundy-deep no-underline hover:bg-parchment"
              >
                Join Saturday Gubaye on Zoom
              </ExternalLink>
              <p className="mt-4 max-w-sm text-sm leading-relaxed text-cream/80">
                {gathering.meetingId ? (
                  <>
                    Meeting ID: {gathering.meetingId}
                    <br />
                  </>
                ) : null}
                {gathering.meetingPassword ? (
                  <>
                    Password:{" "}
                    <span className="font-semibold tracking-wide text-cream">
                      {gathering.meetingPassword}
                    </span>
                  </>
                ) : null}
              </p>
              <p className="mt-3 max-w-sm text-sm text-cream/70">
                Zoom opens in a new tab. Use the password if Zoom asks for one.
              </p>
            </>
          ) : (
            <>
              <ExternalLink
                href={contact.href}
                className="mt-8 inline-flex rounded-sm bg-cream px-6 py-3 text-burgundy-deep no-underline hover:bg-parchment"
              >
                Contact us for gathering details
              </ExternalLink>
              <p className="mt-4 max-w-sm text-sm text-cream/70">
                There is no public meeting link on this page yet. Write through
                the contact form and we will share current details.
              </p>
            </>
          )}
        </div>

        <ol className="lg:col-span-7">
          <li className="border-b border-white/15 pb-3 text-xs uppercase tracking-[0.18em] text-gold">
            In a typical gathering
          </li>
          {gathering.program.map((item, index) => (
            <li
              key={item.name}
              className="grid grid-cols-[auto_1fr] gap-x-5 border-b border-white/10 py-5"
            >
              <span className="font-serif text-2xl text-gold/90">
                {String(index + 1).padStart(2, "0")}
              </span>
              <div>
                <p className="font-serif text-2xl">{item.name}</p>
                <p className="mt-1 text-cream/75">{item.detail}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
