import { Navigation } from "@/components/Navigation";
import Head from "next/head";
import { usePathname } from "next/navigation";

export default function Probate() {
  return (
    <>
      <Head>
        <title>Cynthia Cheatham Law | Probate</title> 
      </Head>

      <Navigation current={usePathname()} />

      <div className="practice-area-page">
        <h1 className="text-center l-heading py-1"><span className="text-medium">Probate</span> Attorney</h1>

        <div className="container practice-area-content-wrapper">
          <section id="probate">
            <div className="card">
              <div className="card-icon">
                <i className="fas fa-scroll fa-6x"></i>
              </div>
              <div className="card-content">
                <h3 className="card-heading m-heading text-primary">Estate Planning</h3>
                <p className="card-text">An attorney can assist in dealing with the hard decisions that arise in your or a loved one’s lives. To assist in these decisions, an attorney can draft a will, a durable power of attorney, a healthcare power of attorney, and a living will. We will discuss all issues that may arise and help determine what the best decisions are for your situation.</p>
              </div>
            </div>
            <div className="card">
              <div className="card-icon">
                <i className="fas fa-balance-scale fa-6x"></i>
              </div>
              <div className="card-content">
                <h3 className="card-heading m-heading text-primary">Probate</h3>
                <p className="card-text">During tumultuous times, it may be hard to find the resources you need to properly probate an estate. There are many factors that will determine how to properly probate an estate including whether or not there is a will in place. Our office can assist in probating an estate to ensure that all the proper steps are taken.</p>
              </div>
            </div>
          </section>

          <aside id="sidebar">
            <h3 className="s-heading">What to Bring</h3>
            <ul className="list">
              <li><p>Any Previous Wills</p></li>
              <li><p>Deeds</p></li>
              <li><p>Car Titles</p></li>
              <li><p>Any Effective Living Wills</p></li>
            </ul>
          </aside>
        </div>
      </div>
    </>
  );
}