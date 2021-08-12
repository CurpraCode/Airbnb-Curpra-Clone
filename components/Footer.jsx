import { Globe, DollarSign, Facebook, Twitter, Instagram } from "react-feather";
function Footer (){
    return(
    <div> 
    <div className="footerInner">
        <span>
          <h2>About</h2>
          <ul>
            <li>How Airbnb works</li>
            <li>Newsroom</li>
            <li>Airbnb 2021</li>
            <li>Investors</li>
            <li>Airbnb Plus</li>
            <li>Airbnb Luxe</li>
            <li className="lg-hidden">HotelTonight</li>
            <li className="lg-hidden">Airbnb for Work</li>
            <li className="lg-hidden">Made possible by Hosts</li>
            <li className="lg-hidden">Careers</li>
            <li className="lg-hidden">Founders&apos; Letter</li>
          </ul>
        </span>
        <span>
          <h2>Community</h2>
          <ul>
            <li>Diversity & Belonging</li>
            <li>Accessibility</li>
            <li>Airbnb Associates</li>
            <li>Frontline Stays</li>
            <li>Guest Referrals</li>
            <li>Airbnb.org</li>
          </ul>
        </span>
        <span>
          <h2>Host</h2>
          <ul>
            <li>Host your home</li>
            <li>Host an Online Experience</li>
            <li>Host an Experience</li>
            <li>Responsible hosting</li>
            <li>Resource Centre</li>
            <li>Community Centre</li>
          </ul>
        </span>
        <span>
          <h2>Support</h2>
          <ul>
            <li>Our COVID-19 Response</li>
            <li>Help Centre</li>
            <li>Cancellation options</li>
            <li>Neighbourhood Support</li>
            <li>Trust & Safety</li>
          </ul>
        </span>
        <span className="footer-bottom">
          <p>
            <ThemeToggle text />
          </p>
          <p>
            <span>
              <Globe className="globe" />
              English
            </span>
            <span>
              <DollarSign className="dollar" />
              USD
            </span>
            <span>
              <Facebook />
            </span>
            <span>
              <Twitter />
            </span>
            <span>
              <Instagram />
            </span>
          </p>
          <p>
            &copy; 2021{" "}
            <a href="https://dashsantosh.me" target="_blank" rel="noreferrer">
              Dash Santosh
            </a>
          </p>
        </span>
      </div>
    </div>
    )
}

export default Footer