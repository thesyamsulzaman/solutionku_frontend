import Image from "next/image";

const Hero = () => {
  return (
    <section className="relative px-3 bg-teal-900 py-5 h-100 w-100 ">
      <div className="xl:max-w-7xl mx-auto flex flex-col items-center md:flex-row-reverse md:justify-center md:items-center">
        <div className="">
          <Image
            src="/images/illustration.jpg"
            width={540}
            height={300}
            objectFit="cover"
            alt="Illustration"
            className="rounded-lg shadow-2xl"
          />
        </div>

        <div className="py-5 md:pr-5 max-w-xl">
          <h1 className="text-3xl text-left text-gray-600 font-semibold">
            Marketplace has never been this affordable
          </h1>
          <p className="mt-3 text-gray-500 leading-tight">
            Context is designed to share data that can be considered global for
            a tree of React components, such as the current authenticated user,
            theme, or preferred language. For example, in the code below we
            manually thread through a “theme” prop in order to style the Button
            component:
          </p>

          <div className="mt-3">
            <button className="bg-blue-500 block hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Button
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Hero;
