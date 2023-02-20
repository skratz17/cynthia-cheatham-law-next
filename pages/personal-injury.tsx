import { Navigation } from "@/components/Navigation";
import Head from "next/head";
import { usePathname } from "next/navigation";

export default function PersonalInjury() {
  return (
    <>
      <Head>
        <title>Cynthia Cheatham Law | Personal Injury</title>
      </Head>

      <Navigation current={usePathname()} />

      <div className="practice-area-page">
        <h1 className="text-center l-heading py-1"><span className="text-medium">Personal Injury</span> Attorney</h1>

        <div className="container practice-area-content-wrapper">
          <section id="personal-injury">
            <div className="card">
              <div className="card-icon">
                <i className="fas fa-car fa-6x"></i>
              </div>
              <div className="card-content">
                <h3 className="card-heading m-heading text-primary">Motor Vehicle Accident</h3>
                <p className="card-text">You may need a personal injury lawyer after you have been involved in a motor vehicle accident or been injured through no fault of your own. You should contact an attorney immediately, prior to speaking with an insurance investigator or adjuster who is working for the insurance company, not you. Our office will have the accident investigated to determine who was at fault and protect your physical, emotional, and mental well-being.</p>
              </div>
            </div>
            <div className="card">
              <div className="card-icon">
                <i className="fas fa-gavel fa-6x"></i>
              </div>
              <div className="card-content">
                <h3 className="card-heading m-heading text-primary">Wrongful Death</h3>
                <p className="card-text">To determine if you have a case involving the death of a relative follow these guidelines: the death was caused in whole or in part by another person or company, that person/company was negligent or liable causing victim&apos;s demise, there is a spouse, children, or dependents, and monetary damages resulted due to the victim&apos;s demise. Call today for a consultation with a personal injury lawyer.</p>
              </div>
            </div>
          </section>

          <aside id="sidebar">
            <h3 className="s-heading">What to Bring</h3>
            <ul className="list">
              <li><p>Accident Report</p></li>
              <li><p>Insurance Information</p></li>
              <li><p>Driver&apos;s License</p></li>
              <li><p>Medical Records</p></li>
              <li><p>Physician &amp; Hospital Bills</p></li>
              <li><p>Diagnosis &amp; Prognosis</p></li>
              <li><p>If Death Occured, Death Certificate</p></li>
              <li><p>Surviving Relatives or Beneficiaries</p></li>
              <li><p>Monetary Damages</p></li>
            </ul>
          </aside>
        </div>
      </div>
    </>
  );
}