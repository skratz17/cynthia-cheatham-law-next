import Head from "next/head";
import { usePathname } from "next/navigation";

import { Navigation } from "@/components/Navigation";

export default function About() {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" key="viewport" />
        <title>Cynthia Cheatham Law | About Us</title>
      </Head>

      <Navigation current={usePathname()} />

      <section id="about-main" className="container text-center">
        <h1 className="l-heading">
          <span className="text-primary">About</span> Cynthia Cheatham Law
        </h1>
        <p>Cynthia Cheatham’s practice focuses on difficult family law cases, many involving “protective parents,” i.e. parents who are victims of domestic violence or whose children are victims of child abuse, or both. Cynthia’s first “protective parent” case involved a family member and Cynthia was able to turn a devastating family court decision into a complete victory for the parent. To this end, Ms. Cheatham has consulted with, and used, experts throughout the country in the field of interpersonal violence and trauma.</p>
        <p>Cynthia also handles appeals, in addition to trial work and strives to obtain “amicus briefs” (friend of the court) from nationally recognized organizations such as the Leadership Council, DVLEAP, and Child Justice.</p>
      </section>

      {/* <!-- Section: Attorneys --> */}
      <section id="attorneys" className="py-1">
        <div className="container">
          <h2 className="text-center m-heading">
            <span className="text-primary">Our</span> Team
          </h2>
          <div className="attorney">
            <img src="img/team/cynthia.jpg" alt="Cynthia Cheatham" className="attorney-img" />
            <div className="attorney-content">
              <h3 className="text-center"><span className="text-primary">Cynthia</span> Cheatham</h3>
              <h5 className="text-center">Attorney</h5>
              <div className="line-primary"></div>
              <p>Attorney Cynthia Cheatham graduated from Roger Williams School of Law in Bristol, Rhode Island in 2004 after spending many years in litigation over services for her own disabled child. Previously, she worked for the Tennessee Department of Correction as a probation officer and alter as an advocate for parents of children with severe disabilities. While at Roger Williams, Cynthia received a Dean’s scholarship for scholastic achievement and a Callie Award for the highest performance in the Public Interest Law Seminar.</p>
              <p>Since graduating from Roger Williams, Ms. Cheatham has been admitted to the Tennessee Bar, the Middle and Eastern District US. District Courts, the Massachusetts Bar, the Nashville Bar, and the United States Supreme Court. Additionally, Ms. Cheatham taught from 2010-2016 as an Adjunct Professor as Middle Tennessee State University, teaching Women and the Law. Ms. Cheatham has also served as a Commissioner for the Tennessee Lawyer’s Assistance Program (TLAP) from 2006-2015. She served as the Co-Chair for the last 2 years of TLAP service.  Ms. Cheatham also serves on the board for the Middle Tennessee Legal Aid Society.</p>
              <p>Ms. Cheatham primarily represents victims of interpersonal violence and belongs to national and international organizations, such as the American Professional Society on the Abuse of Children (APSAC) and attends international conferences, such as the Institute on Violence Abuse and Trauma (IVAT). She has an office in Nashville, Tennessee.</p>
            </div>
          </div>
          <div className="attorney">
            <img src="img/team/valerie.jpg" alt="Valerie Crabtree" className="attorney-img" />
            <div className="attorney-content">
              <h3 className="text-center"><span className="text-primary">Valerie</span> Crabtree</h3>
              <h5 className="text-center">Paralegal</h5>
              <div className="line-primary"></div>
              <p>Valerie Crabtree graduated from Brown Mackie College with an associate degree in paralegal studies. Ms. Crabtree has been working in the legal field for 17 years, primarily for family law attorneys. Ms. Crabtree enjoys gardening and cooking. She loves to read and spend time with her dog.</p>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- Section: Testimonials --> */}
      <section id="testimonials">
        <h2 className="m-heading text-center">Testimonials</h2>
        <div className="testimonials-wrapper">
          <div className="testimonial">
            <i className="fas fa-quote-left fa-2x"></i>
            <p className="testimonial-content">
                After going through two attorneys who pretty much said our case was hopeless... Cynthia came along and gave a spark of life to us that turned into a fire that could not be contained. She was not afraid to stand up to the judges and fight for what she knew to be an injustice. We will forever be grateful for her relentless fight for us. Should you need an attorney, you will not find a better one than Cynthia Cheatham! She is awesome!
            </p>
            <i className="fas fa-quote-right fa-2x"></i>
            <p className="testimonial-attribution">- Brenda B.</p>
          </div>
          <div className="testimonial">
            <i className="fas fa-quote-left fa-2x"></i>
            <p className="testimonial-content">
                Absolutely the best. Very thorough, very caring. No one has better knowledge of how to get things done! She leaves no stone unturned. True professional and the most compassionate heart. Child advocate all the way! She is God Sent for children and mothers. Sincerely interested in your family. Love her!
            </p>
            <i className="fas fa-quote-right fa-2x"></i>
            <p className="testimonial-attribution">- Kimberley R.</p>
          </div>
          <div className="testimonial">
            <i className="fas fa-quote-left fa-2x"></i>
            <p className="testimonial-content">
                Ms. Cheatham has represented my family and has fought for the best care for our special need son.  She has been passionate and has provided nothing but the best service!  She has always gone out of her way to prepare me and advise me of our rights and stood by me through our legal battles- I would recommend her and her services to anyone needing legal help!!!
            </p>
            <i className="fas fa-quote-right fa-2x"></i>
            <p className="testimonial-attribution">- Janie C.</p>
          </div>
        </div>
      </section>
    </>
  );
}