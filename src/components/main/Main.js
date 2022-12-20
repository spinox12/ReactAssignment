import './Main.css';
import Form from '../form/Form';
import React from 'react';


const Main=()=>{

    return(
        <React.Fragment>
        <div className='container'>
        <div className="main-1">
        <div className='content-1'>Are you struggling to sell your HONDA ACTIVA ?</div>
        <div className='content-2'>Are you looking for a better price structure to sell your HONDA CD DELUXE ?<span className='form-box'><Form/></span></div>
        <div className='content-3'>Introducing to you the one stop solution for any bike related issue - CredR is your answer</div>
        <div className='box'></div>
        <div className='content-4'>WHAT WE OFFER</div>
        <div className='box2'>
            <ul style={{color:"white"}}>  {/*this style is to be removed after applying css in below list */}
                <li className='list1'>Submit your bike details</li>
                <li className='list2'>Free verification of the bike</li>
                <li className='list3'>Sell your bike online</li>
                <li className='list4'>Get instant payments</li>
                <li className='list5'>Free 6 months of warranty</li>
                <li className='list6'>Doorstep delivery</li>
                <li className='list7'>No hassle in legal paper work</li>
            </ul>
        </div>
        </div>
        <div className='main-2'>
        <div className='content-5' >Sell Honda Activa 125 scooty to CredR</div>
        <div className='content-6' >Swift user-friendly and comfort are the top three benefits of riding <br/>
Sell your Honda Activa scooty  in Bangalore.<br/>
This scooty is available in 3 Variants with Drum BS6 , Drum Alloy BS6 and Disc BS6</div>

    <div className='content-7'>Key Specs</div>
    
    <div><span><img src= {require('../../images/motor.jpg')} alt="shape1" className='imgstyle1'></img></span><span className='spec1'>125 CC</span></div>
    <div><span><img src="../../.././public/assets/images/Shape (1).jpg" alt="shape2" className='imgstyle2'></img></span><span className='spec2'>8.18 bhp</span></div>
    <div><span><img src="../../.././public/assets/images/Shape (2).jpg" alt="shape3" className='imgstyle3'></img></span><span className='spec3'>48 kmpl</span></div>
    <div><span><img src="../../.././public/assets/images/Shape (3).jpg" alt="shape4" className='imgstyle4'></img></span><span className='spec4'>10.3 Nm</span></div>
    <div><span><img src="../../.././public/assets/images/Shape (4).jpg" alt="shape5" className='imgstyle5'></img></span><span className='spec5'>Tubeless</span></div>
  
    <div className='about-title'>About Honda Activa</div>
    <div className='about-description'>Honda activa is a motor scooter made by Honda Motor Cycle and scooter India. It is a 109 / 125 cc, 7 bhp scooter. The vehicle has the option of kick and self start. 
          Honda activa 6G with 109.5 cc engine generating 7.68 bhp of power, where as the most expensive model is Honda activa 125 with 124 cc engine generating 8.18 bhp of power. The activa has earned its reputation on the back of its indestructible build and low cost and trouble free maintainance. In addition its mechanicals in different forms also contribute to other non geared offerings in the Honda range.</div>
{/* <div className='imghonda'><img src="../../.././public/assets/images/buy-leadgeneration-landing-page-removebg-preview.jpg" alt="hondaactive"/></div> */}
    </div>
    <div className='main-3'>
        <div>
           <div className='title-8'>Why to choose CredR</div>
           <div className='content-8'>Sell your Honda Activa scooty effortlessly to CredR with the most accurate estimations provided by us. Sell your bike with Joy ! 
We compare ourselves in terms of selling the following ways;</div>
        </div>
       <div>
        <table>
            <tr>
                <td><img src="../../.././public/assets/images/Rectangle (4).jpg" alt="mechanic" className='mechanicstyle'/><span className='data-1'>Swift and fast service</span></td>
                <td><img src="../../.././public/assets/images/Rectangle (5).jpg" alt="inspection" className='inspectionstyle'/><span className='data-2'>Transparent inspection procedure</span></td>
            </tr>
            <tr>
                <td><img src="../../.././public/assets/images/Rectangle (6).jpg" alt="hassle" className='hasslestyle'/><span className='data-3'>Hassle free buy and paper work</span></td>
                <td><img src="../../.././public/assets/images/Rectangle (7).jpg" alt="payment" className='paymentstyle'/><span className='data-4'>Secured payment transactions</span></td>
            </tr>
            <tr>
                <td><img src="../../.././public/assets/images/Rectangle (8).jpg" alt="doorstep" className='doorstepstyle'/><span className='data-5'>Timely doorstep service</span></td>
                <td><img src="../../.././public/assets/images/Rectangle (9).jpg" alt="postcare-assistance" className='postcare-assistancestyle'/><span className='data-6'>Post-care assistance</span></td>
            </tr>
        </table>
       </div>
        
    </div>
    <div className='main-4'>
        <div className='testimonial'>Customer testimonial</div>
        <img src="../../.././public/assets/images/Shape (5).jpg" alt="leftarrow" className='leftarrowstyle'/>
        <section className='testimonial-1'>
            <div><img src="../../.././public/assets/images/Bitmap.jpg" alt="bitmap1" className='bitmap-1'/><span className='bitmap-data-1'>Kishore Kumar</span></div>
            <div className='testimonial-1-data'>It is one of the best service offerd great customer service good service assisted and legal work is very nice and interactive and convincing.</div>
        </section>
        <section className='testimonial-2'>
            <div><img src="../../.././public/assets/images/Bitmap (1).jpg" alt="bitmap2" className='bitmap-2'/><span className='bitmap-data-2'>Sandeep Singh</span></div>
            <div className='testimonial-2-data'>"It's worth the wait for the top service you can get." from the CredR .. Great company, great people. I get a lot of my work done by them. Good turn around time and fair pricing. Thanks for the better help.</div>
        </section>
        <section className='testimonial-3'>
            <div><img src="../../.././public/assets/images/Bitmap (2).jpg" alt="bitmap3" className='bitmap-3'/><span className='bitmap-data-3'>Pradeep Kumar</span></div>
            <div className='testimonial-3-data'>"It's worth the wait for the top service you can get." from the CredR .. Great company, great people. I get a lot of my work done by them. Good turn around time and fair pricing. Thanks for the better help.</div>
        </section>
        <img src="../../.././public/assets/images/Shape (6).jpg" alt="rightarrow" className='rightarrowstyle'/>

    </div>
    <div className='main-5'>
     <div className='booknow-container'>
        <div className='booknow-data'>Exclusive used Zest scooty for sale at CredR. Book second hand TVS Zest today<span className='booknow-button'><button className='booknow-text'>BOOK NOW</button></span></div>
     </div>
    </div>
    <div className='main-6'>
        <div>
        <div className='customers'>Customers</div>
        <div className='customers-count'>3,00,000+</div>
        <div className='customers-text'>Customers delighted with our unmatched benefits and offerings</div>
        <span>
            <div><img src="../../.././public/assets/images/Path (1).jpg" alt="fb-logo" className='facebook-logo'/></div>
            <div className='ratings-1'>Ratings 4.5 / 5</div>
            <div></div>
        </span>
        <span>
            <div><img src="../../.././public/assets/images/Path (2).jpg" alt="gg-logo" className='google-logo'/></div>
            <div className='ratings-2'>Ratings 4.5 / 5</div>
            <div></div>
        </span>
        <span>
            <div className='credr-stores'>CREDER Stores</div>
            <div className='store-count'>8+</div>
            <div className='about-store'>30+ Showrooms across Bangalore, Delhi-NCR, Jaipur, Pune, Kota & Hyderabad, and soon we are expanding to more cities.

</div>
            <div></div>
        </span>
        </div>

    </div>
    <div className='main-7'>
     <div className='faqs'>Frequently Asked Questions</div>
     <div className='faq-1-container'>
       <div className='faq-1'>How do I sell my bike on CredR?<span><img src="../../.././public/assets/images/Oval.jpg" alt="faq1" className='faq-1-style'/></span></div>
     </div>
     <div className='faq-2-container'>
       <div className='faq-2'>What is the process for selling my old bike?<span><img src="../../.././public/assets/images/Oval (1).jpg" alt="faq2" className='faq-2-style'/></span></div>
       <div className='faq-2-2'>The process of selling a bike at CredR is as follows:<br/>
A. Register your bike details via website or WhatsApp<br/>
B. Your bike will be evaluated on 30 critical parameters<br/>
C. Receive a price quote for your bike<br/>
D. Sell to CredR will all legal paperwork and receive instant IMPS payment
</div>
     </div>
     <div className='faq-3-container'>
       <div className='faq-3'>What is the need for an inspection process?<span><img src="../../.././public/assets/images/Oval.jpg" alt="faq3" className='faq-3-style'/></span></div>
     </div>
     <div className='faq-4-container'>
       <div className='faq-4'>What documents are required to sell my old bike?<span><img src="" alt="faq4" className='faq-4-style'/></span></div>
     </div>
    </div>
    </div>
        </React.Fragment>
        
    
    )
   
}

export default Main;