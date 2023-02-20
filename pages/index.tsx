import Head from 'next/head'
import { usePathname } from 'next/navigation';

import { Credential } from '@/components/Credential';
import { Navigation } from '@/components/Navigation';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" key="viewport" />
        <title>Cynthia Cheatham Law | Nashville Family Law Attorney</title>
      </Head>

      <Navigation current={usePathname()} />

      {/* <!-- Showcase --> */}
      <header id="header-main">
        <div className="showcase">
          <div className="showcase-content text-center">
            <h2 className="l-heading">When Experience Matters</h2>
            <p className="lead">Committed to Helping Our Clients Succeed</p>
          </div>
        </div>
      </header>

      {/* <!-- Section: Who We Are --> */}
      <section id="who">
        <div className="who-text p-1 text-center">
          <h2>Who We Are</h2>
          <div className="line-light"></div>

          <p>The Law Office of Cynthia A. Cheatham is located in Nashville, TN and takes cases involving all family law matters, including divorce, child custody, termination of parental rights, and adoption. With a primary focus on difficult family law cases, Cynthia has a long track record of being able to turn challenging and complicated situations into complete victories for the parent.</p>

          <p>Cynthia has represented people all across the state of Tennessee, and has collaborated on cases in other states, including Maryland, Georgia, Ohio and Connecticut. Cynthia is also a member of several law organizations, having memberships in the American Bar Association, in the Tennessee Bar Association, on the board of the Legal Aid Society for Middle Tennessee, and more. Cynthia&apos;s level of experience can only be gained from working a large amount of diverse and complex cases. In addition to her impressive credentials, you can feel secure that Cynthia has the knowledge, expertise, and dedication to getting the absolute best outcome for your case.</p>

          <Link href="/about" className="btn-medium">Read More</Link>
        </div>
        <div className="who-img"></div>
      </section>

      {/* <!-- Section: Practice Areas --> */}
      <section id="practice-areas" className="py-2 text-center">
        <div className="container">
          <h2 className="l-heading">Our Practice Areas</h2>
          <div className="practice-area">
            <div className="practice-area-content">
              <i className="fas fa-child fa-4x"></i>
              <div>
                <h3 className="s-heading">Family Law</h3>
                <p>Family / Domestic Law, Divorce, Custody, and Adoption</p>
              </div>
              <Link href="/family-law" className="btn-dark">Read More</Link>
            </div>
          </div>
          <div className="practice-area">
            <div className="practice-area-content">
              <i className="fas fa-scroll fa-3x"></i>
              <div>
                <h3 className="s-heading">Probate</h3>
                <p>Probate and Estate Planning</p>
              </div>
              <Link href="/probate" className="btn-dark">Read More</Link>
            </div>
          </div>
          <div className="practice-area">
            <div className="practice-area-content">
              <i className="fas fa-crutch fa-4x"></i>
              <div>
                <h3 className="s-heading">Personal Injury</h3>
                <p>Personal Injury, Automobile Accidents, and Violence</p>
              </div>
              <Link href="/personal-injury" className="btn-dark">Read More</Link>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- Section: Credentials --> */}
      <section id="credentials" className="py-1">
        <Credential
          href="https://www.americanbar.org/"
          imgSrc="img/memberships/americanBarAssociation.png"
          alt="American Bar Association" />
        <Credential
          href="https://www.tba.org/"
          imgSrc="img/memberships/tennesseeBarAssociation.png"
          alt="Tennessee Bar Association" />
        <Credential
          href="https://las.org/"
          imgSrc="img/memberships/legalAidSociety.png"
          alt="Legal Aid Society for Middle Tennessee" />
        <Credential
          href="https://www.ivatcenters.org/"
          imgSrc="img/memberships/ivat.png"
          alt="Institute on Violence, Abuse, and Trauma" />
        <Credential
          href="https://www.apsac.org/"
          imgSrc="img/memberships/apsac.png"
          alt="American Professional Society on the Abuse of Children" />
        <Credential
          href="http://www.tlap.org/"
          imgSrc="img/memberships/tlap.png"
          alt="Tennessee Lawyers Assistance Program" />
      </section>
    </>
  )
}
