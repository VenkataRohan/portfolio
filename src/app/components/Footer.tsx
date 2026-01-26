const Footer = () => {
  return (
    <footer className="bg-[#050505] text-center py-8">
      <p className="text-gray-500 text-sm">
        © {new Date().getFullYear()} Venkata Rohan. Built with Next.js.
      </p>
    </footer>
  );
};

export default Footer;
