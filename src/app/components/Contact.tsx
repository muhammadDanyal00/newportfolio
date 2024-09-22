"use client";

export default function Contact() {
  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold mb-12 text-center">
          Contact Information
        </h2>
        <div className="max-w-2xl mx-auto bg-gray-800 bg-opacity-60 backdrop-blur-md rounded-lg p-8 shadow-lg">
          <div className="space-y-4">
            <div className="border-b border-gray-500 pb-2">
              <h3 className="text-xl font-semibold mb-1">Name</h3>
              <p>Danyal</p>
            </div>
            <div className="border-b border-gray-500 pb-2">
              <h3 className="text-xl font-semibold mb-1">Address</h3>
              <p>Abbottabad, Pakistan</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-1">Email</h3>
              <p>dkdanyal456@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
