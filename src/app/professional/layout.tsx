// src/app/professional/layout.tsx
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Professional Space - HDM Xperts',
  description: 'Manage your professional profile and activities on HDM Xperts.',
};

export default function ProfessionalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="professional-dashboard-theme flex-1">{children}</div>;
}
