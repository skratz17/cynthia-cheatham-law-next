import Link from "next/link";

interface NavigationProps {
  current: string | null;
}

export const Navigation = (props: NavigationProps) => {
  const { current } = props;

  const getClassName = (path: string) => {
    return current === path ? 'current' : '';
  };

  return (
    <nav id="main-nav" className="py-1">

        {/* <!-- Hamburger Menu (Mobile Nav) --> */}
        <div className="menu-wrap">
          <label htmlFor="toggler">Hamburger Menu Active?</label>
          <input type="checkbox" className="toggler" id="toggler" />
          <div className="hamburger"><div></div></div>
          <div className="menu">
            <div>
              <div>
                <ul>
                  <li><Link href="/">Home</Link></li>
                  <li><Link href="/about">About Us</Link></li>
                  <li><Link href="/family-law">Family Law</Link></li>
                  <li><Link href="/probate">Probate</Link></li>
                  <li><Link href="/personal-injury">Personal Injury</Link></li>
                  <li><Link href="/media">Media</Link></li>
                  <li><Link href="/contact">Contact</Link></li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* <!-- Link List (Desktop Nav) --> */}
        <div className="container">
          <div className="nav-content text-center">
            <h1 className="logo">
              <Link href="/">
                <p className=""><span className="text-primary">Cynthia A.</span> Cheatham</p>
                <p>Family Law</p>
              </Link>
            </h1>
            <ul>
              <li><Link href="/" className={getClassName('/')}>Home</Link></li>
              <li><Link href="/about" className={getClassName('/about')}>About Us</Link></li>
              <li className="dropdown"><span>Practice Areas</span>
                <ul className="dropdown-content">
                  <li><Link href="/family-law" className={getClassName('/family-law')}>Family Law</Link></li>
                  <li><Link href="/probate" className={getClassName('/probate')}>Probate</Link></li>
                  <li><Link href="/personal-injury" className={getClassName('/personal-injury')}>Personal Injury</Link></li>
                </ul>
              </li>
              <li><Link href="/media" className={getClassName('/media')}>Media</Link></li>
              <li><Link href="/contact" className={getClassName('/contact')}>Contact</Link></li>
            </ul>
          </div>
        </div>
      </nav>
  );
};