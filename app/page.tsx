import Navigation from "./components/Navigation";

export default function Home() {
  return (
    <div
      className="relative min-h-screen text-white"
      style={{
        backgroundColor: "#231e59",
        backgroundImage: "url('/bgsite.png')",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "top center",
      }}
    >
      <Navigation />
      <div className="relative h-[150vh] sm:h-[200vh]">
        <div className="pointer-events-none sticky top-0 z-10 h-screen">
          <section
            aria-label="Seminar title"
            className="absolute top-[50%] z-20 flex max-w-[calc(100vw-1.5rem)] -translate-y-1/2 items-center gap-3 font-sans leading-tight text-[#021263] sm:max-w-[calc(100vw-2rem)] sm:gap-5"
            style={{
              left: "max(1.5rem, calc((100vw - 72rem) / 2 + 6.5rem))",
            }}
          >
            <img
              src="/icon.png"
              alt=""
              aria-hidden="true"
              className="h-14 w-14 shrink-0 object-contain sm:h-24 sm:w-24"
            />
            <div className="rounded-sm bg-white px-3 py-2 shadow-[0_0_18px_rgba(255,255,255,0.65)] sm:px-5 sm:py-4">
              <h1 className="text-[11.2px] font-bold sm:text-[1.4rem] lg:whitespace-nowrap">
                Seminar Series in Greek Rhetoric, Law, and Society
              </h1>
              <p className="mt-1 text-[10.4px] font-normal sm:text-[1.3rem] lg:whitespace-nowrap">
                Organizer:{" "}
                <a
                  href="https://florida.academia.edu/IfigeneiaGiannadaki"
                  className="pointer-events-auto underline underline-offset-2"
                >
                  Ifigeneia Giannadaki
                </a>{" "}
                (University of Florida)
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
