import { Navigation } from "@/components/Navigation";
import Head from "next/head";
import { usePathname } from "next/navigation";

export default function LegalDisclaimer() {
  return (
    <>
      <Head>
        <title>Cynthia Cheatham Law | Legal Disclaimer and Privacy Policy</title>
      </Head>

      <Navigation current={usePathname()} />

      <div className="container text-center">
        <h2>Privacy Policy</h2>
        <h3>Information We Collect</h3>
        <p>The only information we collect with use of this website, is that which you provide when calling our office. Your information is kept private and never sold or given to third party companies.</p>

        <h2>Legal Disclaimer</h2>
        <p>The law office of Cynthia Cheatham provides information on this website &apos;as is&apos; and the information contained is accurate at the time of publication. In addition, the Law Office of Cynthia Cheatham accepts no liability for any errors or omissions. </p>

        <p>Attorney Cynthia Cheatham nor any of her associates or staff are not liable for any loss of profits or damage of any kind (including consequential or economic loss) because of information contained on this website.</p>

        <p>Please note, there is no client-attorney relationship for visitors using or viewing this website. Nor should you take any information on this website as legal advice or absolute law. Seek the counsel of an attorney for advice or the laws of Tennessee.</p>

        <p>The links to third party sites listed on this website are for informational purposes only, and
        all trademarks, images, and logos are properties of their respective companies and in no way imply any association whatsoever. If you own the copyright to any of them please notify us and we will remove them immediately. </p>

        <p>The Laws of Tennessee will govern for any litigation and/or damages that may arise in relation to, or use of, this website. </p>
      </div>
    </>
  );
}