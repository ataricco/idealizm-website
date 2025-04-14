import Link from "next/link";

export default function StickyNavbar() {
  return (
    <nav className="fixed top-0 left-0 z-50 w-full bg-slate-900 bg-opacity-80 rounded-lg text-white md:px-8 py-4 z-30">
      <div className="w-full flex justify-between items-center md:px-8 py-2">
        {/* left 3 links */}
        <section className="flex space-x-40 flex-1">
          <Link href="/consult" className="hover:underline">
            Consult
          </Link>
          <Link href="/collaborate" className="hover:underline">
            Collaborate
          </Link>
        </section>

        {/* icon */}
        <section className="flex justify-center flex-none">
          <Link href="/" className="text-lg font-semibold hover:underline">
            ICON
          </Link>
        </section>

        {/* right 3 links */}
        <section className="flex space-x-40 flex-1 justify-end">
          <Link href="/commingle" className="hover:underline">
            Commingle
          </Link>
          <Link href="/contact" className="hover:underline">
            Contact
          </Link>
        </section>
      </div>
    </nav>
  );
}