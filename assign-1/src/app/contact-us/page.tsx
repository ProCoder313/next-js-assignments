function ContactUs() {
  return (
    <div className="w-full min-h-screen bg-blue-600">
      <div className="max-w-6xl mx-auto px-6">
        <h1 className="text-4xl font-bold text-white text-center py-12 ">
          Contact Us
        </h1>
        <p className="text-lg text-white text-center mb-8">
          We’re here to help. Reach out to us for any questions or inquiries.
        </p>
        <div className="mb-10">
          <h2 className="text-3xl font-semibold text-white mb-4">
            Get in Touch
          </h2>
          <form action="#" method="POST" className="space-y-6">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-white"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="mt-2 p-3 border border-gray-300 rounded-md w-full"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-white"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="mt-2 p-3 border border-gray-300 rounded-md w-full"
              />
            </div>
            <div>
              <label
                htmlFor="subject"
                className="block text-sm font-medium text-white"
              >
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                required
                className="mt-2 p-3 border border-gray-300 rounded-md w-full"
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-white"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                required
                className="mt-2 p-3 border border-gray-300 rounded-md w-full"
              ></textarea>
            </div>
            <div className="text-center">
              <button
                type="submit"
                className="px-6 py-3 bg-blue-700 text-white font-semibold rounded-md shadow-md hover:bg-blue-700">
                Send Message
              </button>
            </div>
          </form>
        </div>

        <div className="mb-10">
          <h2 className="text-3xl font-semibold text-white mb-4">
            Contact Information
          </h2>
          <p className="text-lg text-white mb-4">
            If you have any questions, feel free to reach out to us through the
            form above or via the contact information below:
          </p>
          <p className="text-lg text-white">
            <strong>Phone Number:</strong> +123 456 7890
          </p>
          <p className="text-lg text-white">
            <strong>Email:</strong> contact@nextjslearning.com
          </p>
        </div>

        <div className="mb-10">
          <h2 className="text-3xl font-semibold text-white mb-4">Our Office</h2>
          <p className="text-lg text-white">
            Visit us at: 123 Next.js Lane, Web City, Country
          </p>
        </div>

        <div className="py-4 text-center">
          <h2 className="text-3xl font-semibold text-white mb-4">Follow Us</h2>
          <div className="flex justify-center space-x-6">
            <a
              href="https://facebook.com"
              className="text-blue-600 hover:text-blue-700"
            >
              Facebook
            </a>
            <a
              href="https://twitter.com"
              className="text-blue-600 hover:text-blue-700"
            >
              Twitter
            </a>
            <a
              href="https://linkedin.com"
              className="text-blue-600 hover:text-blue-700"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
