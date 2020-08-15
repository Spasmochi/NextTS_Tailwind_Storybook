import Head from "next/head";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 h-screen flex items-center">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center bg-indigo-600 justify-center py-12 md:px-24 px-20 rounded-md">
              <h1 className="text-center text-3xl leading-10 font-bold  text-gray-200 sm:text-4xl sm:leading-10">
                Happy hacking!
              </h1>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
