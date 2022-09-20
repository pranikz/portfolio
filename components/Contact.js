export default function Contact() {
  const Divider = () => {
    return (
      <div className="border border-gray-200 dark:border-gray-600 w-full my-8" />
    );
  };

  return (
    <div className="border border-blue-200 rounded p-6 my-4 w-full dark:border-gray-800 bg-blue-50 dark:bg-blue-opaque">
      <h5 className="text-lg md:text-xl font-bold text-gray-900 dark:text-gray-100">
        Want to hire me? Let's discuss.
      </h5>
      <p className="my-1 text-gray-800 dark:text-gray-200">
        Drop your message and let's discuss.
      </p>
      <a
        href="https://wa.me/917008901249?text=I want to work on a project with you"
        className="mt-4 px-4 text-center w-full font-bold h-8 bg-green-400 dark:bg-green-400 text-gray-900 py-1 dark:text-gray-900 rounded"
        type="submit"
      >
        Chat on WhatsApp
      </a>

      <Divider />
      <p className="my-1 text-gray-800 dark:text-gray-200">
        Drop in your email ID and I will get back to you.
      </p>
      <a
        href="mailto:pratyushmahapatra2000@gmail.com"
        className="mt-4 px-4 text-center w-full font-bold h-8 bg-red-400 dark:bg-red-600 text-gray-900 py-1 dark:text-gray-900 rounded"
        type="submit"
      >
        Mail me
      </a>
    </div>
  );
}
