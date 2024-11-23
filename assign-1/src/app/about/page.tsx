function AboutUs() {
  return (
    <div className="w-full min-h-screen tracking-wider text-white bg-blue-600">
      <div className=" py-6 bg-blue-600 text-white  px-6 ">
        <h1 className="text-4xl font-bold text-white mb-6 text-center">
          About Next.js Learning Classes
        </h1>
        <p className="text-lg text-white text-center mb-8">
          Learn, Build, and Grow with the Best Next.js Curriculum.
        </p>

        <div className="mb-8">
          <h2 className="text-3xl font-semibold text-white mb-4">
            What We Offer
          </h2>
          <p className="text-white">
            Our Next.js Learning Classes are designed to empower developers with
            the latest techniques in web development. Whether {`you're`} a beginner
            or an experienced developer, our structured lessons, hands-on
            projects, and expert guidance will help you master Next.js.
          </p>
        </div>

        <div className="mb-8">
          <h2 className="text-3xl font-semibold text-white mb-4">
            Key Features
          </h2>
          <ul className="list-disc list-inside text-white space-y-2">
            <li>Beginner-friendly content.</li>
            <li>Hands-on projects.</li>
            <li>
              Latest Next.js features like Server Components and Middleware.
            </li>
            <li>Responsive web design practices with Tailwind CSS.</li>
            <li>Expert mentorship and resources.</li>
          </ul>
        </div>

        <div className="mb-8">
          <h2 className="text-3xl font-semibold text-white mb-4">
            Meet Our Instructors
          </h2>
          <p className="text-white">
            Our instructors are seasoned developers with years of experience in
            frontend development and Next.js. Their real-world expertise ensures
            you receive practical and industry-relevant knowledge.
          </p>
        </div>

        <div className="mb-6">
          <h2 className="text-3xl font-semibold text-white mb-4">
            What {`You'll`} Learn
          </h2>
          <ul className="list-disc list-inside text-white space-y-2">
            <li>Build production-ready Next.js applications.</li>
            <li>Master data fetching and API routes.</li>
            <li>Implement modern design with Tailwind CSS.</li>
            <li>Optimize for performance and SEO.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
