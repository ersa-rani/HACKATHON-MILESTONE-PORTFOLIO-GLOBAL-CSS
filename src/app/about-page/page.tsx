import Footer from "@/footer";

export default function About() {
  return (
    <div 
      className="bg-cover bg-center h-screen flex flex-col justify-center items-center px-6 text-center"
      style={{ backgroundImage: "url('/bg-about.jpeg')" }}
    >
      <h1 className="text-3xl font-bold mb-4">Personal Information</h1>

      <div className="puff-in-center max-w-2xl">
        <p className="about-para">
          I am <b>ERSA RANI</b>. I am currently in grade 11, but I am also 
          learning skills like <b>HTML, TypeScript, JavaScript, Next.js, CSS, 
          Tailwind CSS, and Figma</b>. <br />
          I am a participant in the <b>Cloud Applied Generative AI</b> course 
          at the Governor House of Sindh.
        </p>

        <p className="about-para mt-4">
          This is my portfolio website, which includes a navigation menu with 
          three pages and a footer. <br />
          You can contact me via phone or email, and also visit my social 
          accounts—links are provided below in the footer.
        </p>

        <p className="mt-6 font-bold text-lg">
          <span className="block text-center">THANK YOU!</span>
        </p>
      </div>

      <Footer />
    </div>
  );
}
