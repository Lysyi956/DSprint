import Section from "../components/Section";

export default function Contact() {
  return (
    <Section title="Contact & Subscribe" subtitle="Say hi or get cohort announcements via Telegram">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div className="rounded-xl border bg-white p-4 shadow-md">
          <h3 className="text-base font-semibold">Get in touch</h3>
          <p className="mt-2 text-sm text-gray-700">
            Email:{" "}
            <a className="text-dsprint underline" href="mailto:contact@dsprint.academy">
              contact@dsprint.academy
            </a>
          </p>
        </div>
        <div className="rounded-xl border bg-white p-4 shadow-md">
          <h3 className="text-base font-semibold">Subscribe</h3>
          <p className="mt-2 text-sm text-gray-700">Join our Telegram for announcements and links.</p>
          <a
            href="https://t.me/DataScienceSprint"
            target="_blank"
            rel="noreferrer"
            className="mt-3 inline-flex rounded-xl bg-dsprint px-4 py-2 text-sm font-semibold text-white"
          >
            Join Telegram
          </a>
        </div>
      </div>
    </Section>
  );
}
