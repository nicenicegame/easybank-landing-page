import React from "react";
import ReactDOM from "react-dom";
import "./styles/index.scss";
import Hambuger from "./images/icon-hamburger.svg";
import Logo from "./images/logo.svg";
import Hero from "./images/image-mockups.png";
import BGMobile from "./images/bg-intro-mobile.svg";
import BGDesktop from "./images/bg-intro-desktop.svg";
import Currency from "./images/image-currency.jpg";
import Budgeting from "./images/icon-budgeting.svg";

const App = () => {
  return (
    <div className="app">
      <header>
        <a class="logo" className="logo" href="#">
          <img src={Logo} alt="logo" />
        </a>
        <nav>
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
            <li>
              <a href="#">Blog</a>
            </li>
            <li>
              <a href="#">Careers</a>
            </li>
          </ul>
        </nav>
        <a className="invite" href="#">
          Request Invite
        </a>
        <img class="hamburger" src={Hambuger} alt="hamburger" />
      </header>
      <main>
        <section className="hero">
          <div className="hero-image">
            <img className="bg" src={BGMobile} alt="bg" />
            <img className="bg-desktop" src={BGDesktop} alt="bg" />
            <img className="mockup" src={Hero} alt="hero img" />
          </div>

          <div className="hero-text">
            <h1>Next generation digital banking</h1>
            <p>
              Take your financial life online. Your Easybank account will be a
              one-stop-shop for spending, saving, budgeting, investing, and much
              more.
            </p>
            <a href="#">Request Invite</a>
          </div>
        </section>
        <section className="why-choose">
          <div className="why-choose-text">
            <h2>Why choose Easybank?</h2>
            <p>
              We leverage Open Banking to turn your bank account into your
              financial hub. Control your finances like never before.
            </p>
          </div>
          <div className="chooses">
            <div className="choose">
              <img src={Budgeting} alt="bud" />
              <h3>Online Banking</h3>
              <p>
                Our modern web and mobile applications allow you to keep track
                of your finances wherever you are in the world.
              </p>
            </div>
            <div className="choose">
              <img src={Budgeting} alt="bud" />
              <h3>Simple Budgeting</h3>
              <p>
                See exactly where your money goes each month. Receive
                notifications when you’re close to hitting your limits.
              </p>
            </div>
            <div className="choose">
              <img src={Budgeting} alt="bud" />
              <h3>Fast Onboarding</h3>
              <p>
                We don’t do branches. Open your account in minutes online and
                start taking control of your finances right away.
              </p>
            </div>
            <div className="choose">
              <img src={Budgeting} alt="bud" />
              <h3>Open API</h3>
              <p>
                Manage your savings, investments, pension, and much more from
                one account. Tracking your money has never been easier.
              </p>
            </div>
          </div>
        </section>
        <section className="articles">
          <h2>Lastest articles</h2>
          <div className="cards">
            <div className="card">
              <img src={Currency} alt="curr" />
              <div className="card-text">
                <span>By Claire Robinson</span>
                <h5>Receive money in any currency with no fees</h5>
                <p>
                  The world is getting smaller and we’re becoming more mobile.
                  So why should you be forced to only receive money in a single
                  …
                </p>
              </div>
            </div>
            <div className="card">
              <img src={Currency} alt="curr" />
              <div className="card-text">
                <span>By Claire Robinson</span>
                <h5>Receive money in any currency with no fees</h5>
                <p>
                  The world is getting smaller and we’re becoming more mobile.
                  So why should you be forced to only receive money in a single
                  …
                </p>
              </div>
            </div>
            <div className="card">
              <img src={Currency} alt="curr" />
              <div className="card-text">
                <span>By Claire Robinson</span>
                <h5>Receive money in any currency with no fees</h5>
                <p>
                  The world is getting smaller and we’re becoming more mobile.
                  So why should you be forced to only receive money in a single
                  …
                </p>
              </div>
            </div>
            <div className="card">
              <img src={Currency} alt="curr" />
              <div className="card-text">
                <span>By Claire Robinson</span>
                <h5>Receive money in any currency with no fees</h5>
                <p>
                  The world is getting smaller and we’re becoming more mobile.
                  So why should you be forced to only receive money in a single
                  …
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="footer"></section>
      </main>
      {/* Home
  About
  Contact
  Blog
  Careers

  Request Invite



  Next generation digital banking

  Take your financial life online. Your Easybank account will be a one-stop-shop 
  for spending, saving, budgeting, investing, and much more.

  Request Invite



  Why choose Easybank?

  We leverage Open Banking to turn your bank account into your financial hub. Control 
  your finances like never before.

  Online Banking
  Our modern web and mobile applications allow you to keep track of your finances 
  wherever you are in the world.

  Simple Budgeting
  See exactly where your money goes each month. Receive notifications when you’re 
  close to hitting your limits.

  Fast Onboarding
  We don’t do branches. Open your account in minutes online and start taking control 
  of your finances right away.

  Open API
  Manage your savings, investments, pension, and much more from one account. Tracking 
  your money has never been easier.

  

  Latest Articles

  By Claire Robinson
  Receive money in any currency with no fees
  The world is getting smaller and we’re becoming more mobile. So why should you be 
  forced to only receive money in a single …

  By Wilson Hutton
  Treat yourself without worrying about money
  Our simple budgeting feature allows you to separate out your spending and set 
  realistic limits each month. That means you …

  By Wilson Hutton
  Take your Easybank card wherever you go
  We want you to enjoy your travels. This is why we don’t charge any fees on purchases 
  while you’re abroad. We’ll even show you …

  By Claire Robinson
  Our invite-only Beta accounts are now live!
  After a lot of hard work by the whole team, we’re excited to launch our closed beta. 
  It’s easy to request an invite through the site ...

  

  About Us
  Contact
  Blog
  Careers
  Support
  Privacy Policy

  Request Invite

  © Easybank. All Rights Reserved */}
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
