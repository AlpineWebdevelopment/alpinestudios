'use client'

import Script from 'next/script'

export default function AlpineStudios() {
  return (
    <>
      {/* Header */}
      <div className="header">
        <h1 id="msg" className="pageTitle" data-page="index" data-key="hackMsg" data-value="Our Works, All in One Place!">
          Our Works, All in One Place!
        </h1>
        <div id="toprightlogo">
          <div className="zen-dots-font">Alpine</div>
          <div className="jakarta-sans-font">webdevelopment</div>
        </div>
      </div>

      {/* Image Collage */}
      <div id="image-track" data-mouse-down-at="0" data-prev-percentage="0">
        {[
          { key: 'baker', img: 'BakeRizly-169.png' },
          { key: 'chair', img: 'ChairPage-169.png' },
          { key: 'elegant', img: 'Elegant-169.png' },
          { key: 'marbella', img: 'LuxMarbella-169.png' },
          { key: 'mvp', img: 'MVPHero-169.png' },
          { key: 'secure', img: 'SecurityHub-169.png' },
          { key: 'shoes', img: 'ShoeShop-169.png' },
          { key: 'square', img: 'SquareAgency-169.png' },
        ].map(({ key, img }) => (
          <div className="trackImgCont" key={key}>
            <div className="overlay"></div>
            <div className="txtOverlay" onClick={() => (window as any).openPreview(key)}>
              <h4 data-page="index" data-key="cio">
                <div className="trnslt">Check</div>
                <div className="trnslt">it</div>
                <div className="trnslt">out</div>
                <svg aria-hidden="true" fill="none" strokeWidth="2" stroke="currentColor" viewBox="0 0 24 24">
                  <path d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" strokeLinecap="round" strokeLinejoin="round"></path>
                </svg>
              </h4>
            </div>
            <img className="trackImg" src={`/assets/images/${img}`} draggable={false} />
          </div>
        ))}
      </div>

      {/* Footer */}
      <div className="footer">
        <h4 data-page="index" data-key="footer">© 2025 ALPINE Webdevelopment Studios. All Rights Reserved.</h4>
        <div className="input-wrapper" style={{ margin: 0 }}>
          <div className="select country" id="template">
            <span className="selected country">
              <a data-page="index" data-key="lang">EN</a>
            </span>
            <div className="select-options country">
              <a onClick={() => (window as any).changeLanguage('hu')} data-page="index" data-key="lang1">HU</a>
              <a onClick={() => (window as any).changeLanguage('de')} data-page="index" data-key="lang2">DE</a>
              <a onClick={() => (window as any).changeLanguage('it')} data-page="index" data-key="lang3">IT</a>
            </div>
          </div>
        </div>
        <div id="links">
          <h4 onClick={() => (window as any).openAbout()} data-page="index" data-key="about">About Us</h4>
          <h4 onClick={() => (window as any).openContact()} className="butt" data-page="index" data-key="letsWork">Let&apos;s Work Together</h4>
        </div>
      </div>

      {/* Intro */}
      <div id="body">
        <div id="green-filter"></div>
        <div id="top-gradient" className="gradient"></div>
        <div id="bottom-gradient" className="gradient"></div>
        <div id="logo-wrapper">
          <div id="logo">
            <div id="logo-border" className="absolute-centered"></div>
            <div id="logo-border-inner" className="absolute-centered"></div>
            <div id="logo-text">
              <div>
                <div id="hulu-text" className="zen-dots-font">Alpine</div>
                <div id="originals-text" className="jakarta-sans-font">webdevelopment</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="loading">000</div>
      <div id="cover"></div>

      {/* Blur */}
      <div id="blob"></div>
      <div id="blur"></div>

      {/* Previews */}
      <div id="darkness" className="darkness" style={{ display: 'none', opacity: 0 }}>
        <div className="container">
          <div className="imageContainer" id="imageContainer"></div>
          <div id="newDiv">
            <div className="detailsContainer" id="detailsContainer"></div>
            <h4 className="butt actionButton" id="actionButton" data-value="empty" onClick={(e) => (window as any).openContact((e.currentTarget as HTMLElement).dataset.value)} data-page="index" data-key="prevBtn">I Want Something Similar</h4>
          </div>
        </div>
        <div id="exitButton" onClick={() => (window as any).exitPreview()}>
          <svg aria-hidden="true" fill="none" strokeWidth="2" stroke="currentColor" viewBox="0 0 24 24">
            <path d="M6 18 18 6M6 6l12 12" strokeLinecap="round" strokeLinejoin="round"></path>
          </svg>
        </div>
      </div>

      {/* About */}
      <div id="about" className="darkness mess" style={{ display: 'none', opacity: 0 }}>
        <div className="container mess">
          <h2 id="pagename" data-page="index" data-key="aboutUp">ABOUT US</h2>
          <h4 id="pagedescription" data-page="index" data-key="about1">We are <b>Alpine Studios</b>, a young web development duo dedicated to crafting exceptional digital experiences.</h4>
          <h4 id="pagedescription" data-page="index" data-key="about2">As the <b>Frontend Designer &amp; Client Manager</b>, <i>Balazs Varga</i> creates designs that convert visitors to customers. On the development side, <i>Simon Severin (a.k.a. @severinnHQ)</i>, our expert <b>Web Developer</b>, turns ideas into high-performing, scalable websites.</h4>
          <h4 id="pagedescription" data-page="index" data-key="about3">Together, we specialize in building modern, responsive, and high-performing websites tailored to our clients&apos; needs.</h4>
          <h4 id="pagedescription" data-page="index" data-key="about4">Let&apos;s build something extraordinary!</h4>
          <h4 id="pagedescription" className="last" data-page="index" data-key="about5">Based in <b>Budapest, Hungary</b></h4>
          <div className="socials">
            <a href="https://x.com/severinnHQ" target="_blank" rel="noopener noreferrer">
              <svg viewBox="0 0 512 512"><path fill="#ffffff" d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" /></svg>
            </a>
          </div>
        </div>
        <div id="exitButton" onClick={() => (window as any).exitAbout()}>
          <svg aria-hidden="true" fill="none" strokeWidth="2" stroke="currentColor" viewBox="0 0 24 24">
            <path d="M6 18 18 6M6 6l12 12" strokeLinecap="round" strokeLinejoin="round"></path>
          </svg>
        </div>
      </div>

      {/* Contact */}
      <div id="contact" className="darkness mess" style={{ display: 'none', opacity: 0 }}>
        <div className="container mess">
          <h2 id="pagename" data-page="index" data-key="contact">CONTACT US</h2>
          <h4 id="pagedescription" data-page="index" data-key="contact0">Feel free to send us a message here, we will contact you back on your email address.</h4>
          <form action="" method="POST">
            <div id="contactTitle" className="input-wrapper">
              <label htmlFor="reason" data-page="index" data-key="CI01">Contact Reason</label>
              <div className="select" id="reason">
                <span className="selected" data-page="index" data-key="CI02">Select a reason</span>
                <div className="select-options">
                  <div data-value="offer" data-page="index" data-key="CI03">Offer Request</div>
                  <div data-value="question" data-page="index" data-key="CI04">I have a question (or more)</div>
                  <div data-value="legal" data-page="index" data-key="CI05">Legal Inquiry</div>
                </div>
              </div>
            </div>
            <div id="offer-wrapper">
              <div className="input-wrapper" style={{ width: '50%', paddingRight: '10%' }}>
                <label htmlFor="template" data-page="index" data-key="CI06">Template I want to use</label>
                <div className="select mess" id="template">
                  <span className="selected" data-page="index" data-key="CI07">Choose a Template</span>
                  <div className="select-options">
                    <div data-value="none" data-page="index" data-key="CI08">Don&apos;t want to use templates</div>
                    <div data-value="baker">BAKERIZLY</div>
                    <div data-value="chair">LOGO LOUNGE</div>
                    <div data-value="elegant">PERCEVAL JEWELRY</div>
                    <div data-value="marbella">LUXMARBELLA</div>
                    <div data-value="mvp">SOCHIAL MVP</div>
                    <div data-value="secure">SECHUB SECURITY</div>
                    <div data-value="shoes">SHOESHOP</div>
                    <div data-value="square">SQUARE AGENCY</div>
                  </div>
                </div>
                <label htmlFor="deadline" data-page="index" data-key="CI09">Deadline</label>
                <div className="select mess" id="deadline">
                  <span className="selected" data-page="index" data-key="CI10">Choose a Deadline</span>
                  <div className="select-options">
                    <div data-value="veryUrgent" data-page="index" data-key="CI11">Very Urgent (within 1 week)</div>
                    <div data-value="urgent" data-page="index" data-key="CI12">Urgent (1-2 weeks)</div>
                    <div data-value="notUrgent" data-page="index" data-key="CI13">Not so Urgent (within 1 month)</div>
                    <div data-value="flexible" data-page="index" data-key="CI14">I am Flexible</div>
                    <div data-value="6months" data-page="index" data-key="CI15">6 months</div>
                    <div data-value="1year" data-page="index" data-key="CI16">1 year</div>
                    <div data-value="over1year" data-page="index" data-key="CI17">over 1 year</div>
                  </div>
                </div>
                <label htmlFor="budget" data-page="index" data-key="CI18">Budget Size</label>
                <div className="select mess" id="budget">
                  <span className="selected" data-page="index" data-key="CI19">Choose a Budget</span>
                  <div className="select-options">
                    <div data-value="verylow" data-page="index" data-key="CI20">less than €300</div>
                    <div data-value="low">€300 - €1000</div>
                    <div data-value="med">€1000 - €3000</div>
                    <div data-value="good">€3000 - €5000</div>
                    <div data-value="high">€5000 - €10000</div>
                    <div data-value="veryhigh" data-page="index" data-key="CI21">more than €10000</div>
                  </div>
                </div>
              </div>
              <div className="input-wrapper" style={{ width: '50%', paddingLeft: '10%' }}>
                <label htmlFor="company" data-page="index" data-key="CI22">Company Name (Optional)</label>
                <input type="text" id="company" name="company" placeholder="Company Name (Optional)" />
                <label htmlFor="fullname" data-page="index" data-key="CI23">Full Name</label>
                <input type="text" id="fullname" name="fullname" placeholder="Full Name" required />
                <label htmlFor="email" data-page="index" data-key="CI24">Email Address</label>
                <input type="email" id="email" name="email" placeholder="Email Address" />
              </div>
            </div>
            <div id="question-wrapper">
              <div className="input-wrapper" style={{ width: '50%', paddingRight: '10%' }}>
                <label htmlFor="subject" data-page="index" data-key="CI25">Subject</label>
                <input type="text" id="subject" name="subject" placeholder="Subject" />
                <label htmlFor="fullname2" data-page="index" data-key="CI23">Full Name</label>
                <input type="text" id="fullname2" name="fullname" placeholder="Full Name" required />
                <label htmlFor="email2" data-page="index" data-key="CI24">Email Address</label>
                <input type="email" id="email2" name="email" placeholder="Email Address" required />
              </div>
              <div className="input-wrapper" style={{ width: '50%', paddingLeft: '10%' }}>
                <label htmlFor="message" data-page="index" data-key="CI26">Message</label>
                <textarea id="message" name="message" placeholder="Message here..." required></textarea>
              </div>
            </div>
            <input type="submit" className="butt actionButton" id="submitButton" value="Send" style={{ width: '40%', margin: '0', marginLeft: '60%', display: 'none' }} data-page="index" data-key="sendBtn" />
            <div id="legal-wrapper">
              <h4 id="pagedescription">
                <span data-page="index" data-key="legal2">For any Questions, Offer Requests or Legal Inquiries please email </span>
                <a href="mailto:info.alpinestudios@gmail.com">info.alpinestudios@gmail.com</a>.
              </h4>
            </div>
          </form>
        </div>
        <div id="exitButton" onClick={() => (window as any).exitContact()}>
          <svg aria-hidden="true" fill="none" strokeWidth="2" stroke="currentColor" viewBox="0 0 24 24">
            <path d="M6 18 18 6M6 6l12 12" strokeLinecap="round" strokeLinejoin="round"></path>
          </svg>
        </div>
      </div>

      {/* Scripts */}
      <Script src="/assets/js/lang.js" strategy="beforeInteractive" />
      <Script src="/assets/js/modal.js" strategy="beforeInteractive" />
      <Script src="/assets/js/contact-select.js" strategy="afterInteractive" />
      <Script src="/assets/js/hacked-and-intro.js" strategy="afterInteractive" />
      <Script src="/assets/js/image-collage.js" strategy="afterInteractive" />
      <Script src="/assets/js/bg-blur.js" strategy="afterInteractive" />
      <Script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js" strategy="afterInteractive" />
      <Script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollToPlugin.min.js" strategy="afterInteractive" />
      <Script src="/assets/js/smooth-scroll.js" strategy="afterInteractive" />
      <Script id="mobile-redirect" strategy="afterInteractive">{`
        if (window.innerWidth < 768 && window.innerHeight > window.innerWidth) {
          window.location.href = '/mobile.html';
        }
      `}</Script>
    </>
  )
}
