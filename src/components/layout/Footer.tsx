export const Footer = () => {
  return (
    <footer className="border-t border-white/10 py-10 px-6 mt-20">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">

        <p className="text-white/60 text-sm">
          © {new Date().getFullYear()} Nexus Agency. All rights reserved.
        </p>

        <div className="flex gap-6 text-sm text-white/60">
          <a href="#" className="hover:text-white">Privacy</a>
          <a href="#" className="hover:text-white">Terms</a>
          <a href="#" className="hover:text-white">Contact</a>
        </div>

      </div>
    </footer>
  );
};