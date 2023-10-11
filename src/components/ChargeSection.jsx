export const ChargeSection = () => {
    return (
      <section className="bg-black h-screen w-screen relative overflow-hidden text-center">
          <div className="z-30 relative h-full flex flex-col">
              <header  className="flex flex-col">
                  <h2 className="text-black pt-40 text-[40px] font-medium">Model Y</h2>
                  <p className="text-black text-sm underline">
                    Concertar una prueba de conduccion
                  </p>
              </header>
              <footer className=" flex flex-grow flex-nowrap justify-end flex-col pb-24">
                  <div className="gap-x-4 flex mx-auto">
                      <a 
                          className="font-medium px-12 py-2 inline-block bg-gray-700 text-white rounded"
                          href="#">
                            Explorar inventario
                    </a>
                    <a 
                        className="text-black font-medium rounded px-12 py-2 inline-block bg-white"
                        href="#">
                            Pedido personalizado
                    </a>
                  </div>
              </footer>
          </div>
  
          <div className="absolute top-0 bottom-0 z-10 h-full w-full">
                <img 
                    src="/model-y.avif"
                    alt="Model Y"
                    className="h-full w-full object-center object-cover"
                />
          </div>
      </section>
    )
  }
  