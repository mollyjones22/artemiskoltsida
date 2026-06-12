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
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 z-10 bg-[url('/bgtitle.png')] bg-cover bg-top bg-no-repeat"
      />
      <div className="pointer-events-none fixed inset-0 z-20">
        <section
          aria-label="Seminar title"
          className="absolute left-[31.33%] top-[20.5%] max-w-[42rem] font-sans leading-tight text-[#021263]"
        >
          <h1 className="whitespace-nowrap text-[7.2px] font-bold sm:text-[0.9rem]">
            Seminar Series in Greek Rhetoric, Law, and Society
          </h1>
          <p className="mt-1 whitespace-nowrap text-[6.4px] font-normal sm:text-[0.8rem]">
            Organizer:{" "}
            <a
              href="https://florida.academia.edu/IfigeneiaGiannadaki"
              className="pointer-events-auto underline underline-offset-2"
            >
              Ifigeneia Giannadaki
            </a>{" "}
            (University of Florida)
          </p>
        </section>
      </div>
      <div className="h-screen sm:h-[150vh]" />
    </div>
  );
}
