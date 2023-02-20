import { Navigation } from "@/components/Navigation";
import Head from "next/head";
import { usePathname } from "next/navigation";

export default function FamilyLaw() {
  return (
    <>
      <Head>
        <title>Cynthia Cheatham Law | Family Law</title>
      </Head>

      <Navigation current={usePathname()} />

      <div className="practice-area-page">
        <h1 className="text-center l-heading py-1"><span className="text-medium">Family Law</span> Attorney</h1>

        <div className="container practice-area-content-wrapper">
          <section id="family-law">
            <div className="card">
              <div className="card-icon">
                <i className="fas fa-ring fa-6x"></i>
              </div>
              <div className="card-content">
                <h3 className="card-heading m-heading text-primary">Divorce &amp; Mediation</h3>
                <p className="card-text">A family law attorney not only represents you in a divorce, but may also set up mediation between you, your spouse, and their representative. Alleviating some of the stress, costs, and pain when there are legal family issues is important and we will talk with you concerning all of your options so you can make the right decision. If divorce is inevitable, property division can be highly contested and you will need a professional to help.</p>
              </div>
            </div>
            <div className="card">
              <div className="card-icon">
                <i className="fas fa-child fa-6x"></i>
              </div>
              <div className="card-content">
                <h3 className="card-heading m-heading text-primary">Child Custody</h3>
                <p className="card-text">The state of Tennessee has strict laws concerning child custody, relocation, visitation, child support, and parenting plans. Generally parents want what is best for their children, however their views on this may be different. Many factors are considered when the court grants custodial rights and it is very important that you retain an experienced family law attorney on your side.</p>
              </div>
            </div>
          </section>

          <aside id="sidebar">
            <h3 className="s-heading">Resource Links</h3>
            <ul className="list">
              <li><a href="http://www.tba2.org/tba_files/TCA/2011/schiffnerk_032911.pdf" target="_blank" rel="noopener noreferrer">Alimony Case</a></li>
              <li><a href="http://www.tba2.org/tba_files/TCA/2009/ortegai_030509.pdf" target="_blank" rel="noopener noreferrer">Split Custody Case</a></li>
              <li><a href="http://www.chattanoogan.com/2004/5/11/50424/Protective-Parent-Reform-Act-Is-Major.aspx" target="_blank" rel="noopener noreferrer">Protective Parent Reform Act</a></li>
              <li><a href="http://www.justiceforchildren.org/" target="_blank" rel="noopener noreferrer">National Child Advocacy</a></li>
              <li><a href="https://www.apsac.org/" target="_blank" rel="noopener noreferrer">Society on the Abuse of Children</a></li>
            </ul>
          </aside>
        </div>
      </div>
    </>
  );
}