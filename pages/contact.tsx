import Head from "next/head";
import { usePathname } from "next/navigation";

import { Navigation } from "@/components/Navigation";

export default function Contact() {
  return (
    <>
      <Head>
        <title>Cynthia Cheatham Law | Contact</title>
      </Head>

      <Navigation current={usePathname()} />

      {/* <!-- Section: Contact --> */}
      <section id="contact">
        <div className="contact-info text-center">
          <p className="lead">Cynthia Cheatham Law Office</p>
          <div>
            <p>PO Box 90814</p>
            <p>Nashville, TN 37212</p>
          </div>
          <p>Phone: <a href="tel:615-645-5665">(615) 645-5665</a></p>
          <div>
            <p>Hours of Operation</p>
            <p>Mon-Fri: 8:30am - 4:30pm</p>
            <p>Sat &amp; Sun: Closed</p>
          </div>
        </div>
      </section>
    </>
  );
}