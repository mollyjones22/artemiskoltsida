export default function Footer() {
  return (
    <footer className="relative min-h-16 bg-white px-4 py-6 sm:min-h-20 sm:px-6 sm:py-8">
      <div className="pointer-events-none absolute inset-x-0 top-1/2 flex -translate-y-1/2 justify-center px-4 text-center">
        <a
          href="mailto:artemis.koltsida@gmail.com"
          className="pointer-events-auto text-sm font-semibold tracking-wider no-underline underline-offset-4 hover:underline sm:text-base"
        >
          artemis.koltsida@gmail.com
        </a>
      </div>
    </footer>
  );
}
