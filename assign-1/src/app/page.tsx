import Image from "next/image";

function Home (){
  return (
    <div className=" tracking-widest bg-blue-600 text-white px-6">
          {/* MAIN HWADING */}
      <h1 className="text-5xl font-extrabold text-center mb-6 py-6 shadow-inner">
       Next.js Jouney Started.
      </h1>
            {/* SUB-HEADING */}
      <h2 className="text-2xl font-bold text-white underline mt-2 py-2 inline-block bg-blue-600  mb-6">
      Next.js Adventure Begins Here!
      </h2>
            {/* PARAGRAPH AND IMAGE */}
      <div>
        <div className="flex justify-between font-sans mb-10 w-full">
          <p className="flex flex-col  items-center w-[50%] tracking-widest text-justify">
            Welcome to the beginning of an exciting journey with Next.js! Here,
            you will explore the world of modern web development.Next.js Journey
            Started.marks the beginning of your path to mastering modern web
            development. This platform is designed to guide you step by step,
            starting from the basics and gradually moving to advanced topics
            Learn about file-based routing, a core feature that simplifies
            navigation in your apps.
            <br />
            Explore server-side rendering (SSR) to
            create dynamic web pages with exceptional performance. Dive into
            static site generation (SSG) for building blazing-fast, SEO-friendly
            websites. Understand the power of API routes and integrate them into
            your projects effortlessly. With Next.js, you’ll unlock the
            potential to create scalable, production-ready applications. Our
            course is tailored to make learning smooth, whether {`you're`} a
            beginner or brushing up on your skills. We provide hands-on examples
            and practical insights to enhance your understanding. By the end,
            {`you'll`} confidently build responsive, dynamic, and professional web
            applications. Join us and turn your ideas into reality as we explore
            Next.js together. This journey is your gateway to becoming a
            proficient frontend developer!
          </p>

          <Image
              src="/img1.jpg"
              alt="class_image"
              width={350}
              height={200}
              className=" rounded-lg w-[45%] h-[325px]"
            />
        </div>

  <div className=" font-sans">
    
    <h1 className="text-4xl font-bold text-white  mb-8 text-center inline-block ">Next.js Topics</h1>

    <div className="mb-10">
      <h2 className="text-3xl font-semibold text-white mb-4 underline bg-blue-600 inline-block">1. Introduction to Next.js</h2>
      <ul className="list-disc list-inside text-white space-y-2">
        <li><strong>What is Next.js, and why is it used?</strong></li>
        <li><strong>Comparison of React and Next.js</strong></li>
      </ul>
    </div>

   
    <div className="mb-10">
      <h2 className="text-3xl font-semibold text-white mb-4 underline bg-blue-600 inline-block">2. Project Setup</h2>
      <ul className="list-disc list-inside text-white space-y-2">
        <li><strong>How to set up a Next.js project</strong></li>
        <li><strong>Introduction to the folder structure</strong></li>
      </ul>
    </div>

   
    <div className="mb-10">
      <h2 className="text-3xl font-semibold text-white mb-4 underline bg-blue-600 inline-block">3. Pages and Routing</h2>
      <ul className="list-disc list-inside text-white space-y-2">
        <li><strong>File-based routing in Next.js</strong></li>
        <li><strong>Dynamic routes (`[slug].js`)</strong></li>
        <li><strong>Catch-all routes (`[...slug].js`)</strong></li>
      </ul>
    </div>

      
    <div className="mb-10">
      <h2 className="text-3xl font-semibold text-white mb-4 underline bg-blue-600 inline-block">4. Components and Layouts</h2>
      <ul className="list-disc list-inside text-white space-y-2">
        <li><strong>Creating reusable components</strong></li>
        <li><strong>Setting up layouts (`_app.js` and `_document.js`)</strong></li>
      </ul>
    </div>

    
    <div className="mb-10">
      <h2 className="text-3xl font-semibold text-white mb-4 underline bg-blue-600 inline-block">5. Styling in Next.js</h2>
      <ul className="list-disc list-inside text-white space-y-2">
        <li><strong>Using CSS Modules</strong></li>
        <li><strong>Integrating Tailwind CSS</strong></li>
        <li><strong>Global and scoped styling</strong></li>
      </ul>
    </div>

    
    <div className="mb-10">
      <h2 className="text-3xl font-semibold text-white mb-4 underline bg-blue-600 inline-block">6. Data Fetching</h2>
      <ul className="list-disc list-inside text-white space-y-2">
        <li><strong>`getStaticProps` (Static Site Generation - SSG)</strong></li>
        <li><strong>`getServerSideProps` (Server Side Rendering - SSR)</strong></li>
        <li><strong>`getStaticPaths` (Dynamic static generation)</strong></li>
      </ul>
    </div>

    
    <div className="mb-10">
      <h2 className="text-3xl font-semibold text-white mb-4 underline bg-blue-600 inline-block">7. API Routes</h2>
      <ul className="list-disc list-inside text-white space-y-2">
        <li><strong>Introduction to Next.js API routes</strong></li>
        <li><strong>Creating custom APIs</strong></li>
      </ul>
    </div>

    
    <div className="mb-10">
      <h2 className="text-3xl font-semibold text-white mb-4 underline bg-blue-600 inline-block">8. Image Optimization</h2>
      <ul className="list-disc list-inside text-white space-y-2">
        <li><strong>Using the `next/image` component</strong></li>
        <li><strong>Automatic image resizing and optimization</strong></li>
      </ul>
    </div>

    
    <div className="mb-10">
      <h2 className="text-3xl font-semibold text-white mb-4 underline bg-blue-600 inline-block">9. Middleware</h2>
      <ul className="list-disc list-inside text-white space-y-2">
        <li><strong>Introduction to Middleware</strong></li>
        <li><strong>Handling the request lifecycle</strong></li>
      </ul>
    </div>

    
    <div className="mb-10">
      <h2 className="text-3xl font-semibold text-white mb-4 underline bg-blue-600 inline-block">10. Authentication</h2>
      <ul className="list-disc list-inside text-white space-y-2">
        <li><strong>Implementing authentication with NextAuth.js</strong></li>
        <li><strong>Integrating JWT and OAuth 2.0</strong></li>
      </ul>
    </div>


  
<div className="mb-10">
  <h2 className="text-3xl font-semibold text-white mb-4 underline bg-blue-600 inline-block">11. Internationalization (i18n)</h2>
  <ul className="list-disc list-inside text-white space-y-2">
    <li><strong>Setting up multi-language support</strong></li>
    <li><strong>Implementing locales</strong></li>
  </ul>
</div>


<div className="mb-10">
  <h2 className="text-3xl font-semibold text-white mb-4 underline bg-blue-600 inline-block">12. Performance Optimization</h2>
  <ul className="list-disc list-inside text-white space-y-2">
    <li><strong>Code splitting and lazy loading</strong></li>
    <li><strong>Choosing between static and dynamic rendering</strong></li>
  </ul>
</div>


<div className="mb-10">
  <h2 className="text-3xl font-semibold text-white mb-4 underline bg-blue-600 inline-block">13. Deployment</h2>
  <ul className="list-disc list-inside text-white space-y-2">
    <li><strong>Deploying to Vercel</strong></li>
    <li><strong>Custom servers and hosting options</strong></li>
  </ul>
</div>


<div className="mb-10">
  <h2 className="text-3xl font-semibold text-white mb-4 underline bg-blue-600 inline-block">14. Advanced Features</h2>
  <ul className="list-disc list-inside text-white space-y-2">
    <li><strong>Route Groups and Nested Layouts (Next.js 13+)</strong></li>
    <li><strong>App Router and Server Components</strong></li>
    <li><strong>Advanced use cases of Middleware</strong></li>
  </ul>
</div>


<div className="mb-10">
  <h2 className="text-3xl font-semibold text-white mb-4 underline bg-blue-600 inline-block">15. Testing in Next.js</h2>
  <ul className="list-disc list-inside text-white space-y-2">
    <li><strong>Unit testing and integration testing</strong></li>
    <li><strong>Using tools like Jest and React Testing Library</strong></li>
  </ul>
</div>


<div className="mb-8">
  <h2 className="text-3xl font-semibold text-white mb-4 underline bg-blue-600 inline-block">16. SEO in Next.js</h2>
  <ul className="list-disc list-inside text-white space-y-2">
    <li><strong>Adding metadata with `next/head`</strong></li>
    <li><strong>Canonical URLs and structured data</strong></li>
  </ul>
</div>

  </div>




        <div className="flex justify-between  w-[100%] py-20 space-x-2">
          <Image
            className="rounded-lg w-300 h-100"
            src="/imgdd.png"
            alt="students Image"
            width={300}
            height={100}
          />

          <Image
            className="rounded-lg"
            src="/tech.jpg"
            alt="Image"
            width={300}
            height={100}
          />

          <Image
            className="rounded-lg"
            src="/imgcc.webp"
            alt="Image"
            width={300}
            height={100}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;