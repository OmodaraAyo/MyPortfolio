const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-gray-900 to-gray-900 mt-20" id="contact">
    <div className="container mx-auto px-4 text-center py-12">
      <h2 className="text-3xl font-bold text-white mb-8">Contacts</h2>
      <div className="flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-8">
        <a
          href="mailto:ayodeleomodara1234@gmail.com"
          className="text-gray-400 hover:text-white transition-colors cursor-pointer"
        >
          Email: ayodeleomodara1234@gmail.com
        </a>
        <a
          href="https://wa.me/2347083352449"
          className="text-gray-400 hover:text-white transition-colors cursor-pointer"
        >
          Phone: +234 70-8335-2449
        </a>
      </div>
    </div>
    <h3 className="text-white py-2 px-3 flex justify-center cursor-pointer">Copyright 2025 &copy; Ayodele All Right Reserved.</h3>
  </footer>
  )
}

export default Footer
