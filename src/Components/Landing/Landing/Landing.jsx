
import React, { useState, useEffect } from 'react';
import LandingNav from '../Landing-Nav/LandingNav';
import './landing.css';
import drink1 from '../../Assets/9c9a9a113a03f4277d1a5a0488158f1b.png';
import drink2 from '../../Assets/d8f14a138d174cf312c322aee21e5d33.png';
import logo from '../../Assets/logooo.png';
import phone from '../../Assets/icons8-ringing-phone-20.png';
import mail from '../../Assets/icons8-email-20.png';
import facebook from '../../Assets/icons8-facebook-logo-20.png';
import twitter from '../../Assets/icons8-twitter-logo-20.png';
import youtube from '../../Assets/icons8-youtube-logo-20.png';
import instagram from '../../Assets/icons8-instagram-logo-20.png';
import location from '../../Assets/icons8-location-12.png';
import Loading from '../../Loading/Loading';
import { getAllmenu } from '../../../Api/Menu';

function Landing() {
    const [allmenu, setAllmenu] = useState([]);
    const [loading, setLoading] = useState(true);
    const [ setError] = useState(null);

    useEffect(() => {
        const fetchMenu = async () => {
            try {
                const menudata = await getAllmenu();
                setAllmenu(menudata);
                console.log(menudata);
            } catch (error) {
                setError(error);
            } finally {
                setLoading(false);
            }
        };
        fetchMenu();
    }, []);

    if (loading) {
        return <Loading />;
    }


    // Filter menu items by TypeOff (Drinks and Brunch)
    const drinkItems = allmenu.filter(item => item.TypeOff === 'Drinks');
    const brunchItems = allmenu.filter(item => item.TypeOff === 'Brunch');

    return (
        <div>
            <LandingNav />
            {/* Background image container */}
            <div className="landing-background">
                <div className="landing-text">
                    <h1>MENU</h1>
                    <p className="menu-description">
                        Please take a look at our menu featuring food, drinks, and brunch. If you'd like to place an order, use the "Order Online" button located below the menu.
                    </p>

                    <div className='ItemsButton'>
                        <div className='SubButtons'>
                            <button className="menu-btn">FOOD</button>
                            <button className="menu-btn" style={{ background: '#0056b3' }}>DRINKS</button>
                            <button className="menu-btn">BRUNCH</button>
                        </div>
                    </div>

                    {/* Drinks Section */}
                    <div className="ItemMenuBorder">
                        <div className="images-container">
                            <div>
                                <img src={drink2} alt="Drink Image 1" className="menu-image" />
                            </div>

                            <div className="drink-heading">
                                <span className="line" /> DRINKS <span className="line" />
                            </div>

                            <div>
                                <img src={drink1} alt="Drink Image 2" className="menu-image" />
                            </div>
                        </div>

                        {/* Map through drink items */}
                        <div className="ItemMenu">
                            {drinkItems.map(item => (
                                <div key={item._id} className="menu-item">
                                    <h5>{item.FoodTitle} <span className="price">${item.Amount}</span></h5>
                                    <p className="description">{item.Includes}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Brunch Section */}
                    <div className="ItemMenuBorder">
                        <div className="images-container">
                            <div className="drink-heading">
                                <span className="line" /> BRUNCHES <span className="line" />
                            </div>
                        </div>

                        {/* Map through brunch items */}
                        <div className="ItemMenu">
                            {brunchItems.map(item => (
                                <div key={item._id} className="menu-item">
                                    <h5>{item.FoodTitle} <span className="price">${item.Amount}</span></h5>
                                    <p className="description">{item.Includes}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Hookah Flavors Section (you can fill this with your hookah items if needed) */}
                    <div className="ItemMenuBorder">
                        <div className="images-container">
                            <div className="drink-heading">
                                <span className="line" /> HOOKAH FLAVORS <span className="line" />
                            </div>
                        </div>

                        <div className='drinksItems'>
                            <div>ORANGE MINT</div>
                            <div>BLUE MIST</div>
                            <div>MIGHTY FREEZE</div>
                            <div>LUV 66</div>
                            <div>PEACH</div>
                            <div>WATERMELON</div>
                        </div>
                    </div>


                    {/* Footer Section */}
                    <div className='bottumnav'>
                        <div className='bottumContact'>
                            <h4>CONTACT WITH US</h4>
                            <div className="contactItem">
                                <img src={phone} alt="Phone Icon" className="contactIcon" />
                                <span>+ 470-788-8255</span>
                            </div>
                            <div className="contactItem">
                                <img src={mail} alt="Mail Icon" className="contactIcon" />
                                <span>email@42barandgrill.com</span>
                            </div>
                        </div>


                        <div className="bottumLogo">
                            <img className="footer-logo-img" src={logo} alt="Logo" />
                            <div className="footer-text">
                                <span className="footer-text-deep">DEEP</span>
                                <span className="footer-text-net"> NET</span>
                                <span className="footer-text-soft"> SOFT</span>
                            </div>
                            <div className="footer-icons">
                                <img src={facebook} alt="Facebook Icon" />
                                <img src={twitter} alt="Twitter Icon" />
                                <img src={youtube} alt="YouTube Icon" />
                                <img src={instagram} alt="Instagram Icon" />
                            </div>
                        </div>

                        <div className='bottumAddress'>
                            <h4 style={{ color: 'blue' }}>FIND US</h4>
                            <div className="contactItem">
                                <img src={location} alt="Location Icon" className="contactIcon" />
                                <span>327 Memorial Dr SE, Atlanta, GA 30312, USA</span>
                            </div>
                        </div>
                    </div>


                    {/* Terms & Conditions */}
                    <div className='TermsConditions'>
                        <div>
                            <p>© 2024 42 Bar & Grill. Developed by Deepnetsoft Solutions.</p>
                        </div>

                        <div className='PrivacyPolicy'>
                            <p>Terms & Conditions</p>
                            <p>Privacy Policy</p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Landing;
