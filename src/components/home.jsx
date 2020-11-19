import React, { Component } from "react";
import DesktopInt from "../images/bg-intro-desktop.svg";
import Online from "../images/icon-online.svg";
import budget from "../images/icon-budgeting.svg";
import Onboard from "../images/icon-onboarding.svg";
import api from "../images/icon-api.svg";
import currency from '../images/image-currency.jpg'
import resturant from '../images/image-restaurant.jpg'
import plane from '../images/image-plane.jpg'
import confetti from '../images/image-confetti.jpg'
import Devices from '../images/image-mockups.png'


export default class Home extends Component {
    render() {
        return (
            <main>
                <section id="sectionA">
                    <div className="Amobile">
                        <img className='imgAm' src={DesktopInt} alt="destopintro" />
                        <img className='imgBm' src={Devices} alt="devices" />
                    </div>
                    <div className="A1">
                        <h1> Next generation digital banking</h1>
                        <p>
                            Take your financial life online. Your Easybank
                            account will be a one-stop-shop for spending,
                            saving, budgeting, investing, and much more.
                        </p>
                        <button>
                            <a href="#">Request Invite</a>
                        </button>
                    </div>
                    <div className="A2">
                        <img className='imgA' src={DesktopInt} alt="destopintro" />
                        <img className='imgB' src={Devices} alt="devices" />
                    </div>
                </section>

                {/* section with icons */}
                <section id="sectionB">
                    <div className="B1">
                        <h3>Why choose Easybank?</h3>
                        <p>
                            We leverage Open Banking to turn your bank account
                            into your financial hub. Control your finances like
                            never before.
                        </p>
                    </div>
                    <div className="B2">
                        <div>
                            <img src={Online} alt="online" />
                            <h4>Online Banking</h4>
                            <p>
                                Our modern web and mobile applications allow you
                                to keep track of your finances wherever you are
                                in the world.
                            </p>
                        </div>

                        <div>
                            <img src={budget} alt="budgetting" />
                            <h4>Simple Budgeting</h4>
                            <p>
                                See exactly where your money goes each month.
                                Receive notifications when you’re close to
                                hitting your limits.
                            </p>
                        </div>

                        <div>
                            <img src={Onboard} alt="onboard" />
                            <h4>Fast Onboarding</h4>
                            <p>
                                We don’t do branches. Open your account in
                                minutes online and start taking control of your
                                finances right away.
                            </p>
                        </div>

                        <div>
                            <img src={api} alt="api" />
                            <h4> Open API</h4>
                            <p>
                                Manage your savings, investments, pension, and
                                much more from one account. Tracking your money
                                has never been easier.
                            </p>
                        </div>
                    </div>
                </section>

                {/* section with images */}
                <section id="sectionC">
                    <div className="C1">
                        <h3> Latest Articles</h3>
                    </div>
                    <div className="C2">
                        <div>
                            <img src={currency} alt="currency" />
                            <p> By Claire Robinson</p>
                            <h4> Receive money in any currency with no fees</h4>
                            <p>
                                The world is getting smaller and we’re becoming
                                more mobile. So why should you be forced to only
                                receive money in a single …
                            </p>
                        </div>

                        <div>
                            <img src={resturant} alt="resturant" />
                            <p>By Wilson Hutton</p>
                            <h4>Treat yourself without worrying about money</h4>
                            <p>
                                Our simple budgeting feature allows you to
                                separate out your spending and set realistic
                                limits each month. That means you …
                            </p>
                        </div>

                        <div>
                            <img src={plane} alt="plane" />
                            <p>By Wilson Hutton</p>
                            <h4>Take your Easybank card wherever you go</h4>
                            <p>
                                We want you to enjoy your travels. This is why
                                we don’t charge any fees on purchases while
                                you’re abroad. We’ll even show you …
                            </p>
                        </div>

                        <div>
                            <img src={confetti} alt="confetti" />
                            <p>By Claire Robinson</p>
                            <h4>
                                {" "}
                                Our invite-only Beta accounts are now live!
                            </h4>
                            <p>
                                After a lot of hard work by the whole team,
                                we’re excited to launch our closed beta. It’s
                                easy to request an invite through the site ...
                            </p>
                        </div>
                    </div>
                </section>
            </main>
        );
    }
}
