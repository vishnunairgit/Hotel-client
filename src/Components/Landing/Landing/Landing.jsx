
import React, { useState, useEffect } from 'react';
import LandingNav from '../Landing-Nav/LandingNav';
import './landing.css';
import drink1 from '../../Assets/9c9a9a113a03f4277d1a5a0488158f1b.png';
import drink2 from '../../Assets/d8f14a138d174cf312c322aee21e5d33.png';
import logo from '../../Assets/logo---12 (1).png';
import phone from '../../Assets/icons8-ringing-phone-22.png';
import mail from '../../Assets/icons8-email-22.png';
import facebook from '../../Assets/icons8-facebook-12.png';
import twitter from '../../Assets/icons8-twitter-12.png';
import youtube from '../../Assets/icons8-youtube-12.png';
import instagram from '../../Assets/icons8-instagram-12.png';
import location from '../../Assets/icons8-location-12.png';
import Loading from '../../Loading/Loading';
import { getAllmenu } from '../../../Api/Menu';

function Landing() {
    const [allmenu, setAllmenu] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

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
    if (error) {
        return <div>Error: {error.message}</div>;
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

                    {/* Order Now Button */}
                    <div>
                        <button type="button" className='button_01'>ORDER NOW</button>
                    </div>

                    {/* Instructions */}
                    <div className='infoBox'>
                        <p>Food may not be refunded. If your food was made incorrectly we will remake it for you.</p>
                        <hr />
                        <p>18% service charge will be added to all checks over $100.</p>
                        <hr />
                        <p>Consuming raw or undercooked meats, poultry, seafood, shellfish or eggs may increase your risk of foodborne illness.</p>
                        <hr />
                    </div>

                    {/* Footer Section */}
                    <div className='bottumnav'>
                        <div className='bottumContact'>
                            <h4 style={{ color: 'blue' }}>CONTACT WITH US</h4>
                            <div><img src={phone} alt="" />+ 470-788-8255</div>
                            <div><img src={mail} alt="" />email@42barandgrill.com</div>
                        </div>

                        <div className='bottumLogo'>
                            <img className='bottum-logo' src={logo} alt="" />
                            <div>
                                <img src={facebook} alt="" />
                                <img src={twitter} alt="" />
                                <img src={youtube} alt="" />
                                <img src={instagram} alt="" />
                            </div>
                        </div>

                        <div className='bottumAddress'>
                            <div>
                                <h4 style={{ color: 'blue' }}>FIND US</h4>
                                <img src={location} alt="" />327 Memorial Dr SE, Atlanta, GA 30312, USA
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
