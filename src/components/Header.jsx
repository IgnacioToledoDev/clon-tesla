export const Header = () => {
  return (
    <section className="bg-black h-screen w-screen relative overflow-hidden text-center">
      <div className="z-30 relative h-full flex flex-col">
        <header className="flex flex-col">
          <h2 className="text-white pt-40 text-[40px] font-medium">
            Disfrute de Tesla
          </h2>
          <p className="text-white text-sm">
            Programe una prueba de conduccion hoy mismo
          </p>
        </header>
        <footer className="flex flex-grow flex-nowrap justify-end flex-col pb-24">
          <div>
            <a
              className="text-white rounded font-medium border-[3px] px-12 py-2 inline-block hover:bg-white
                        "
              href="#"
            >
              Prueba de conduccion
            </a>
          </div>
        </footer>
      </div>

      <div className="absolute top-0 bottom-0 left-0 right-0 z-10 h-full w-full">
        <video
          src="/video.webm"
          muted
          autoPlay
          loop
          className="object-center object-cover h-full w-full"
        ></video>
      </div>
    </section>
  );
};
