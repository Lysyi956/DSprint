import React from "react";
import Section from "../components/Section";
import Button from "../components/Button";

export default function Telegram() {
  return (
    <Section title="Telegram Channel" subtitle="Announcements, materials, deadlines">
      <p className="text-sm text-gray-700">All cohort announcements and links live here.</p>
      <div className="mt-4">
        <Button href="https://t.me/DataScienceSprint">Join Telegram</Button>
      </div>
    </Section>
  );
}
