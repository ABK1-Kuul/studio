// src/app/professionals/layout.tsx
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'HDM Xperts Directory',
  description: 'Find and connect with expert professionals on HDM Xperts.',
};

export default function ProfessionalsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // This class will apply the theme overrides from globals.css
  return <div className="professional-dashboard-theme flex-1">{children}</div>;
}
