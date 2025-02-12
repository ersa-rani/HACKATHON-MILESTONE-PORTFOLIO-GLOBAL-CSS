import Footer from "@/footer";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div 
      className="bg-cover bg-center h-screen"
      style={{ backgroundImage: "url('/bg-home.jpeg')" }}
    >
      <div className="div-intro">
        <div className="puff-in-center">
          <p>
            Hey There,
            <br />
            I am ERSA <b>RANI</b>!
          </p>
          <p className="over-view">
            I am a Creative UI/UX Designer
            <br /> From kARACHI...
          </p>
          <p>
            <Link href="/contact-page" passHref>
              <button className="hire-me">HIRE ME!</button>
            </Link>
          </p>
          <Image
            src="/profile.jpeg"
            alt="Profile picture"
            className="profile-pic"
            width={150} // Set appropriate width
            height={150} // Set appropriate height
          />
        </div>
      </div>
      <Footer />
    </div>
  );
}
