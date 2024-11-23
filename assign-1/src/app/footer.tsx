function Footer (){
  return(
<footer className="bg-blue-700 text-white p-6">
  <div className="container mx-auto flex flex-col md:flex-row justify-between">
    <div>
      <h4 className="text-lg font-semibold">Next.js Learning Classes</h4>
      <p>© 2024 Next.js Learning Classes. All rights reserved.</p>
    </div>
    <div>
      <h4 className="text-lg font-semibold">Quick Links</h4>
      <ul className="space-y-2">
        <li><a href="/" className="hover:bg-blue-900  hover:underline">Home</a></li>
        <li><a href="/about" className="hover:bg-blue-900 hover:underline">About Us</a></li>
        <li><a href="/contact-us" className="hover:bg-blue-900 hover:underline">Contact</a></li>
      </ul>
    </div>
    <div>
      <h4 className="text-lg font-semibold">Contact Us</h4>
      <p>Email: info@nextjslearning.com</p>
      <p>Phone: +92-XXX-XXXXXXX</p>
    </div>
  </div>
</footer>
  )
}
export default Footer;