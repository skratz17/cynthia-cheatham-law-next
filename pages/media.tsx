import Head from "next/head";
import { usePathname } from "next/navigation";
import ReactPlayer from "react-player/youtube";

import { Navigation } from "@/components/Navigation";
import React, { useState } from "react";

const videos = {
  left: [
    { 
      videoId: '5Cl6AXq2DpA',
      title: '"No Way Out But One" Documentary',
    },
    {
      videoId: 'lxumtGblaIM',
      title: 'Mistakes by Tennessee DCS Threaten Parent-Child Relationships',
    },
    {
      videoId: 'aUNKbwyz8ZQ',
      title: 'The Cost of Recusing a Judge in Tennessee',
    }
  ],

  right: [
    {
      videoId: 'Hup5a_t7SDo',
      title: 'Channel 4 "Dad on Trial"',
    },
    {
      videoId: '6FrAz18cCgo',
      title: 'Channel 4 Report "Mom Becomes Fugitive"',
    },
  ],
};

export default function Media() {
  const [ selectedVideo, setSelectedVideo ] = useState<string>('5Cl6AXq2DpA');

  const renderVideoControls = (videoConfigs: Array<{ videoId: string, title: string }>) => {
    return videoConfigs.map(videoConfig => (
      <button
        key={videoConfig.videoId}
        className={`video-button ${videoConfig.videoId === selectedVideo ? 'btn-medium' : 'btn-dark'}`}
        onClick={() => setSelectedVideo(videoConfig.videoId)}>
          {videoConfig.title}
      </button>
    ));
  };

  return (
    <>
      <Head>
        <title>Cynthia Cheatham Law | Media</title>   
      </Head>

      <Navigation current={usePathname()} />

      <div className="container text-center">
        <h1 className="l-heading"><span className="text-primary">Cynthia Cheatham Law</span> in the Media</h1>
      </div>

      {/* <!-- Section: Youtube Player --> */}
      <section id="youtube-player" className="py-1">
        <h2 className="text-center m-heading">Videos</h2>
        <div className="container">
          <div id="column-left" className="video-button-column">
            { renderVideoControls(videos.left) }
          </div>
          <div id="player">
            <ReactPlayer 
              url={`https://www.youtube.com/watch?v=${selectedVideo}`} 
              width="100%"
              height="100%"
            />
          </div>
          <div id="column-right" className="video-button-column">
            { renderVideoControls(videos.right) }
          </div>
        </div>
        <div className="text-center recusal-text nodisplay">
          <p>A judge who recuses himself or herself, whether on the judge&apos;s own initiative or on motion of a party, shall not participate in selecting his or her successor, absent the agreement of all parties.</p>
          <p>Tenn. Sup. Ct. R. 10B, &sect; 1.04</p>
          <div className="line-primary"></div>
          <p className="italics">Note: This rule re: recusal was passed within approximately three weeks of the certiorari judge dismissing all adverse findings against Ms. Cheatham and restoring her perfect discipline record which remains unblemished.</p>
        </div>
      </section>

      {/* <!-- Section: News Articles --> */}
      <section id="news-articles" className="py-1">

        <div className="container">
          <h2 className="text-center m-heading">News Articles</h2>
          <div className="news-articles-grid">
            <div className="card">
              <div className="card-icon">
                <img src="img/news/fox.jpg" alt="Fox 17 Nashville" />
              </div>
              <div className="card-content">
                <h3 className="card-heading m-heading text-primary"><a href="https://fox17.com/news/ferrier-files/ferrier-files-domestic-violence-victim-mother-of-3-evicted-from-ywca" target="_blank" rel="noopener noreferrer">FERRIER FILES: Domestic violence victim, mother of 3 evicted from YWCA</a></h3>
                <h5 className="text-center">Fox 17 Nashville</h5>
              </div>
            </div>
            <div className="card">
              <div className="card-icon">
                <img src="img/news/usaToday.png" alt="USA Today" />
              </div>
              <div className="card-content">
                <h3 className="card-heading m-heading text-primary"><a href="https://www.usatoday.com/story/news/nation/2013/10/13/tennessee-adoption-woes-special-needs-children/2977289/" target="_blank" rel="noopener noreferrer">Families fight Tenn. child agency for information</a></h3>
                <h5 className="text-center">USA Today</h5>
              </div>
            </div>
            <div className="card">
              <div className="card-icon">
                <img src="img/news/100r.jpg" alt="100 Reporters" />
              </div>
              <div className="card-content">
                <h3 className="card-heading m-heading text-primary"><a href="https://100r.org/2016/12/custody-2/" target="_blank" rel="noopener noreferrer">Custody in Crisis: How Family Courts Nationwide Put Children in Danger</a></h3>
                <h5 className="text-center">100 Reporters</h5>
              </div>
            </div>
            <div className="card">
              <div className="card-icon">
                <img src="img/news/aba.png" alt="ABA" />
              </div>
              <div className="card-content">
                <h3 className="card-heading m-heading text-primary"><a href="http://www.abajournal.com/news/article/were_divorce_lawyers_reasons_for_trying_to_recuse_3_judges_in_one_case_friv/" target="_blank" rel="noopener noreferrer">Were Divorce Lawyer&apos;s Reasons for Seeking Recusal of 3 Judges in One Case Frivolous?</a></h3>
                <h5 className="text-center">ABA Journal</h5>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- Section: Academic and Professional Papers --> */}
      <section id="academic-papers">
        <div className="container">
          <h2 className="m-heading text-center py-1"><span className="text-primary">Additional</span> Resources</h2>
          <div className="academic-papers-grid">
            <div className="academic-papers-grid-item">
              <h3 className="s-heading text-center">Child Abuse and Domestic Violence</h3>
              <ul className="list">
                <li><a href="http://leadershipcouncil.org/1/pas/2.html" target="_blank" rel="noopener noreferrer">Highly Recommended Collection of Articles on This Topic, Compiled by The Leadership Council</a></li>
                <li><a href="http://leadershipcouncil.org/docs/Cheathamthankyouletter.pdf" target="_blank" rel="noopener noreferrer">Cynthia Cheatham&apos;s Thank You Letter to The Leadership Council in re: C.A.R., a Case Regarding Child Abuse</a></li>
                <li><a href="https://www.amazon.com/Coercive-Control-Personal-Interpersonal-Violence/dp/0195384040" target="_blank" rel="noopener noreferrer"><span className="italics">Coercive Control</span> – by Evan Stark</a></li>
                <li><a href="https://www.thechildsurvivor.com/" target="_blank" rel="noopener noreferrer"><span className="italics">Domestic Violence by Proxy</span> – by Joyanna Silberg, PhD</a></li>
                <li><a href="http://www.thelizlibrary.org/liz/2009-NCJFCJ.pdf" target="_blank" rel="noopener noreferrer">2009 NCJFCJ Judges’ Guide to Custody Evaluations in Cases of Abuse</a></li>
                <li><a href="http://www.thelizlibrary.org/site-index/site-index-frame.html#soulhttp://www.thelizlibrary.org/liz/FRtactic.html" target="_blank" rel="noopener noreferrer"><span className="italics">Stalking Through the Courts: The Father’s Rights Movement</span> – by Janet Normal van Breucher</a></li>
                <li><a href="http://lundybancroft.com/articles/understanding-the-batterer-in-custody-and-visitation-disputes/" target="_blank" rel="noopener noreferrer"><span className="italics">Understanding the Batterer in Custody and Visitation Disputes</span> – by Lundy Bancroft</a></li>
                <li><a href="http://www.thelizlibrary.org/liz/turkat.pdf" target="_blank" rel="noopener noreferrer"><span className="italics">Fairness and Accuracy in Evaluations of Domestic Violence and Child Abuse in Custody Determinations</span> - by Rita Smith and Pamela Coukos</a></li>
                <li><a href="http://leadershipcouncil.org/docs/Paine%202002.pdf" target="_blank" rel="noopener noreferrer"><span className="italics">Factors Influencing Children to Self-Disclose Sexual Abuse</span> - by Mary L. Paine and David J. Hansen</a></li>
              </ul>
            </div>
            <div className="academic-papers-grid-item">
              <h3 className="s-heading text-center">Guardians ad Litem (GALs) / Parenting Coordinators / Custody Cases</h3>
              <ul className="list">
                <li><a href="http://www.thelizlibrary.org/liz/DucotearticleJuly2002.pdf" target="_blank" rel="noopener noreferrer"><span className="italics">Guardians ad Litem in Custody Litigation: The Case for Abolition</span> – by Richard Ducote</a></li>
                <li><a href="http://www.thelizlibrary.org/site-index/site-index-frame.html#soulhttp://www.thelizlibrary.org/liz/mental-health-professionals-family-court.html" target="_blank" rel="noopener noreferrer"><span className="italics">Proper Role of Mental Health Professionals in Domestic Violence Cases</span> – by Barry Goldstein</a></li>
                <li><a href="http://www.thelizlibrary.org/liz/dalton.html" target="_blank" rel="noopener noreferrer"><span className="italics">When Paradigms Collide: Protecting Battered Parents and Their Children in the Family Court System</span> - Clare Dalton</a></li>
                <li><a href="http://leadershipcouncil.org/1/res/cust_myths.html" target="_blank" rel="noopener noreferrer">Collection of Custody Myths, Compiled by The Leadership Council</a></li>
                <li><a href="http://www.thelizlibrary.org/site-index/site-index-frame.html#soulhttp://www.thelizlibrary.org/bad-custody-evaluation/bad-custody-evaluation.html" target="_blank" rel="noopener noreferrer"><span className="italics">Custody Evaluations: Ten Signs of Questionable Practices</span> – by Joel V. Klass M.D.</a></li>
                <li><a href="http://www.thelizlibrary.org/liz/gender-neutrality-is-not-gender-equality-in-family-court.html" target="_blank" rel="noopener noreferrer"><span className="italics">Family Court is Not a Family-Friendly Place</span> – by Lisa Marie Macci</a></li>
                <li><a href="http://www.thelizlibrary.org/bruch/BruchFLQSummer06.pdf" target="_blank" rel="noopener noreferrer"><span className="italics">Sound Research or Wishful Thinking in Custody Cases?</span> – by Carol S. Bruch</a></li>
                <li><a href="http://www.thelizlibrary.org/liz/Dore-friendly-parent.pdf" target="_blank" rel="noopener noreferrer"><span className="italics">The “Friendly Parent” Concept: A Flawed Factor For Child Custody</span> - by Margaret K. Dore</a></li>
              </ul>
            </div>
            <div className="academic-papers-grid-item">
              <h3 className="s-heading text-center">Parental Alienation Syndrome / Hostile-Aggressive Parenting</h3>
              <ul className="list">
                <li><a href="http://www.thelizlibrary.org/site-index/site-index-frame.html#soulhttp://www.thelizlibrary.org/parental-alienation/index.html" target="_blank" rel="noopener noreferrer"><span className="italics">About “PAS” – Why Is It So Often Used Against Mothers?</span> – by John E. B. Myers</a></li>
                <li><a href="http://www.leadershipcouncil.org/docs/Hoult.pdf" target="_blank" rel="noopener noreferrer"><span className="italics">Evidentiary Admissibility of Parental Alienation Syndrome</span> – by Jennifer Hoult</a></li>
                <li><a href="http://www.thelizlibrary.org/liz/Dore-friendly-parent.pdf" target="_blank" rel="noopener noreferrer"><span className="italics">Friendly Parent Concept: A Flawed Factor</span> – by Margaret Dore</a></li>
                <li><a href="http://www.thelizlibrary.org/therapeutic-jurisprudence/" target="_blank" rel="noopener noreferrer"><span className="italics">Richard Gardner and “Parental Alienation Syndrome”</span> – Trish Wilson</a></li>
                <li><a href="http://www.leadershipcouncil.org/1/res/dallam/2.html" target="_blank" rel="noopener noreferrer"><span className="italics">Richard A. Gardner pedophilia quotes</span> – orig. compiled by Stephanie J. Dallam</a></li>
                <li><a href="http://www.thelizlibrary.org/liz/Dangers-of-Presumptive-Joint-Custody.pdf" target="_blank" rel="noopener noreferrer"><span className="italics">The Dangers of Presumptive Joint Physical Custody</span></a></li>
                <li><a href="http://www.thelizlibrary.org/bruch/bruch.pdf" target="_blank" rel="noopener noreferrer"><span className="italics">Parental Alienation Syndrome and Parental Alienation: Getting It Wrong in Child Custody Cases</span> - by Carol S. Bruch</a></li>
                <li><a href="https://www.psychologytoday.com/us/blog/the-love-wisdom/201512/the-strange-advocacy-parental-alienation-syndrome" target="_blank" rel="noopener noreferrer"><span className="italics">The Strange Advocacy for “Parental Alienation Syndrome”</span> - by Jennifer Baker Ph.D.</a></li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}