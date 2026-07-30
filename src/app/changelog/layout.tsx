import { Metadata } from 'next'

export const metadata: Metadata = {
  title: "StrataMetriq Changelog | Product Updates & Releases",
  description: "Track the latest product updates, new features, and bug fixes for StrataMetriq Architecture Intelligence and ID Card Designer.",
  keywords: ["StrataMetriq updates", "DevSecOps changelog", "ID Card Designer release notes", "Architecture Intelligence updates"]
};

export default function ChangelogLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>;
}
