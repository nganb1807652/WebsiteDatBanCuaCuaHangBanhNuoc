import React from 'react'
import '../css/about.css'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader


export default function about() {
    return (
        
        <div className="about">
            <div style={{marginTop:'120px'}}></div>
            <div className ="about-us">
                <h2>ABOUT US</h2>
                <div className="sub-about">
                We love restaurants as much as you do. That’s why we’ve been helping <br></br> them fill tables since 1999. Welcome to elixir restaurant
            </div>
            </div>
            <div className="about-content1">
                <div className="about-left1">
                    <h2>Tea, Coffee and Cakes</h2>
                        <p className="text">
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Owned by a famous Vermont baker, Denise Levine, our place is proud to be <strong style={{color:'#dd0301'}}>one of San Diego, California’s</strong> finest cake and pastry bakeries. Our cake bakery adds only the freshest ingredients to make you get a fresh-out-of-oven like experience. An experience, that simply melts in your mouth.As opposed to our main competitors, we never use any kind of artificial ingredients in all of the sweet goodies that we produce…
                    We’re lucky enough that all of our bakers are talented, dedicated and hard-working masters, whose intricate sense of taste and food artistry contributes to our Bakery’s overall popularity.
                        </p>
                        <p className="text">
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;According to Miss Spang, there is not a shred of evidence for any of it.
                            She said: These legends just get passed on by hearsay and then spiral
                            out of control. Her interest in <strong style={{color:'#dd0301'}}>Boulanger</strong> dates back to a history of
                            food seminar in Paris in the mid-1990s
                        </p>
                </div>
                <div className="about-right1">
                <img src="https://images.pexels.com/photos/7664387/pexels-photo-7664387.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" />
                </div>
            </div>
            <div className="about-content2">
                <div className="about-right2">
                <img src="https://images.pexels.com/photos/7664399/pexels-photo-7664399.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" />
                </div>
                <div className="about-left2">
                    <p className="text">
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Our history reveals even more intimacy in <strong style={{color:'#dd0301'}}>Mr. Boulanger's menu</strong>, which confidently declares that "Boulanger serves delicious <strong style={{color:'#dd0301'}}>coffe, cakes and hot tea</strong> coffe, cakes and hot tea, all thoughtfully presented" .We affirm that most of the store's products are made from fresh and clean ingredients, ensuring quality and nutrition for customers.
                    We’re lucky enough that all of our bakers are talented, dedicated and hard-working masters, whose intricate sense of taste and food artistry contributes to our Bakery’s overall popularity.
                    </p>
                    <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;We have <strong style={{color:'#dd0301'}}>a long story</strong> of development, of cake recipes with unique flavors, suitable for customers' taste buds. We had a hard time in the first days of work, we had a hard time finding a new recipe and now we have the success, the imagination of our customers, that is a big motivator for us. overcome all challenges.
                    </p>
                </div>
            </div>
            <div className="about-content3">
                <div className="about-left3">
                        <p>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;The store is <strong style={{color:'#dd0301'}}>the heart </strong>  of all of us, everyone has an important role, everyone works and treats each other like family, we believe that if you are happy, then you can make it. cakes of happiness, cups of coffee flavored with joy and cups of flowers.
                        </p>
                        <p className="text">
                         &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong style={{color:'#dd0301'}}>We are proud of </strong>what we have done during our business, we are <strong style={{color:'#dd0301'}}>happy </strong>that our cakes and drinks are well received from our customers. We are very <strong style={{color:'#dd0301'}}>grateful</strong>  for this, in the future, we will work and create, giving you more exciting new choices. In addition, we will open more branches across the country, hope to always receive love and support from customers, <strong style={{color:'#dd0301'}}>thank you very much</strong>.
                        </p>
                </div>
                <div className="about-right3">
                 <img src="https://images.pexels.com/photos/8105090/pexels-photo-8105090.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" />
                </div>
            </div>
         </div>
    )
}
