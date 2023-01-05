import './Main.css';
import React,{useState} from 'react';


const Main=()=>{
    
    const [formField,setFormField]=useState({
        fullName:"",
        mobile:"",
        pincode:""
    });

    const handleChange= (e)=>{
        const{name,value}=e.target;
        setFormField({[name]:value});
    }

    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log("handle submit button clicked");
    }

    return(
        <React.Fragment>
        <div className='container'>
        <div className='row'>
        <div className='col-sm-12'>
        <div className="main-1">
        <div className='form-box'>
        <form className="form" onSubmit={handleSubmit}>
           <div className="form-group">
              <div>
                <label htmlFor='name' className='name'>Name</label>
               <input type="text" id="name" name="fullName" className="form-control"
               placeholder="Saniyo Joseph" value={formField.fullName} onChange={handleChange}/>
              </div>
              <div>
              <label htmlFor='mobile' className='mobile'>Phone no</label>
               <input type="number" id="mobile" name="mobile" className="form-control"
               placeholder="8277357248" value={formField.mobile} onChange={handleChange}/>
               </div>
               <div>
               <label htmlFor='pincode' className='pincode'>Pincode</label>
               <input type="number" id="pincode" name="pincode" className="form-control"
               placeholder="pincode" value={formField.pincode} onChange={handleChange}/>
               </div>
               <button type="submit" className="submit-button"><span className='submit-text'>Continue</span></button>
           </div>
       </form>
        </div>
        <div className='content-1'>Are you struggling to sell your HONDA ACTIVA ?</div>
        <div className='content-2'>Are you looking for a better price structure to sell your HONDA CD DELUXE ?</div>
        <div className='content-3'>Introducing to you the one stop solution for any bike related issue - CredR is your answer</div>
        <div className='box'>
        <div className='content-4'>WHAT WE OFFER</div>
        </div>
        <div className='box2'>
            <ul>  
                <li className='list1'><span className='list-1-1'>Submit your bike details</span></li>
                <li className='list2'><span className='list-2-2'>Free verification of the bike</span></li>
                <li className='list3'><span className='list-3-3'>Sell your bike online</span></li>
                <li className='list4'><span className='list-4-4'>Get instant payments</span></li>
                <li className='list5'><span className='list-5-5'>Free 6 months of warranty</span></li>
                <li className='list6'><span className='list-6-6'>Doorstep delivery</span></li>
                <li className='list7'><span className='list-7-7'>No hassle in legal paper work</span></li>
            </ul>
        </div>
        </div>
        <div className='main-2'>
        <img src={require('../../images/buy-leadgeneration-landing-page-removebg-preview.jpg')} alt="hondaactive" className='imghonda'/>
        <div className='content-5' >Sell Honda Activa 125 scooty to CredR</div>
        <div className='content-6' >Swift user-friendly and comfort are the top three benefits of riding <br/>
Sell your Honda Activa scooty  in Bangalore.<br/>
This scooty is available in 3 Variants with Drum BS6 , Drum Alloy BS6 and Disc BS6</div>

    <div className='content-7'>Key Specs</div>
    
    <div><span><img src= {require('../../images/motor.jpg')} alt="shape1" className='imgstyle1'></img></span><span className='spec1'>125 CC</span></div>
    <div><span><img src={require('../../images/power.jpg')} alt="shape2" className='imgstyle2'></img></span><span className='spec2'>8.18 bhp</span></div>
    <div><span><img src={require('../../images/petrol.jpg')} alt="shape3" className='imgstyle3'></img></span><span className='spec3'>48 kmpl</span></div>
    <div><span><img src={require('../../images/transportation.jpg')} alt="shape4" className='imgstyle4'></img></span><span className='spec4'>10.3 Nm</span></div>
    <div><span><img src={require('../../images/racing (1).jpg')} alt="shape5" className='imgstyle5'></img></span><span className='spec5'>Tubeless</span></div>
  
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
                <td><img src={require('../../images/mechanic.jpg')} alt="mechanic" className='mechanicstyle'/><span className='data-1'>Swift and fast service</span></td>
                <td><img src={require('../../images/inspection.jpg')} alt="inspection" className='inspectionstyle'/><span className='data-2'>Transparent inspection procedure</span></td>
            </tr>
            <tr>
                <td><img src={require('../../images/hassle.jpg')} alt="hassle" className='hasslestyle'/><span className='data-3'>Hassle free buy and paper work</span></td>
                <td><img src={require('../../images/payment.jpg')} alt="payment" className='paymentstyle'/><span className='data-4'>Secured payment transactions</span></td>
            </tr>
            <tr>
                <td><img src={require('../../images/doorstep.jpg')} alt="doorstep" className='doorstepstyle'/><span className='data-5'>Timely doorstep service</span></td>
                <td><img src={require('../../images/postcare-assistance.jpg')} alt="postcare-assistance" className='postcare-assistancestyle'/><span className='data-6'>Post-care assistance</span></td>
            </tr>
        </table>
       </div>
        
    </div>
    <div className='main-4'>
        <div className='testimonial'>Customer testimonial</div>
        <img src={require('../../images/right-chevron copy 4.jpg')} alt="leftarrow" className='leftarrowstyle'/>
        <section className='testimonial-1'>
            <div><img src={require('../../images/Bitmap.jpg')} alt="bitmap1" className='bitmap-1'/><span className='bitmap-data-1'>Kishore Kumar</span></div>
            <div className='testimonial-1-data'>It is one of the best service offerd great customer service good service assisted and legal work is very nice and interactive and convincing.</div>
        </section>
        <section className='testimonial-2'>
            <div><img src={require('../../images/Bitmap (1).jpg')} alt="bitmap2" className='bitmap-2'/><span className='bitmap-data-2'>Sandeep Singh</span></div>
            <div className='testimonial-2-data'>"It's worth the wait for the top service you can get." from the CredR .. Great company, great people. I get a lot of my work done by them. Good turn around time and fair pricing. Thanks for the better help.</div>
        </section>
        <section className='testimonial-3'>
            <div><img src={require('../../images/Bitmap (2).jpg')} alt="bitmap3" className='bitmap-3'/><span className='bitmap-data-3'>Pradeep Kumar</span></div>
            <div className='testimonial-3-data'>"It's worth the wait for the top service you can get." from the CredR .. Great company, great people. I get a lot of my work done by them. Good turn around time and fair pricing. Thanks for the better help.</div>
        </section>
        <img src={require('../../images/right-chevron copy 3.jpg')} alt="rightarrow" className='rightarrowstyle'/>

    </div>
    <div className='main-5'>

     <div className='booknow-container'>
        <div className='booknow-data'>Exclusive used Zest scooty for sale at CredR. Book second hand TVS Zest today<span className='booknow-button'><p className='booknow-text'>BOOK NOW</p></span></div>
     </div>
     <div>
        <div className='customers'>Customers</div>
        <div className='customers-count'>3,00,000+</div>
        <div className='customers-text'>Customers delighted with our unmatched benefits and offerings</div>
        <span>
            <div><img src={require('../../images/facebook (1).jpg')} alt="fb-logo" className='facebook-logo'/></div>
            <div className='ratings-1'>Ratings 4.5 / 5</div>
            <div><img src={require('../../images/starrating.jpg')} alt="starrating1" className='starrating-1'/></div>
        </span>
        <span>
            <div><img src={require('../../images/google-plus (2).jpg')} alt="gg-logo" className='google-logo'/></div>
            <div className='ratings-2'>Ratings 4.5 / 5</div>
            <div><img src={require('../../images/starrating (1).jpg')} alt="starrating2" className='starrating-2'/></div>
        </span>
        <span>
            <div className='credr-stores'>CREDER Stores</div>
            <div className='store-count'>8+</div>
            <div className='about-store'>30+ Showrooms across Bangalore, Delhi-NCR, Jaipur, Pune, Kota & Hyderabad, and soon we are expanding to more cities.</div>
            <div></div>
        </span>
        </div>

    </div>

    <div className='main-6'>
    <div className='faqs'>Frequently Asked Questions</div>
     <div className='faq-1-container'>
       <div className='faq-1'>How do I sell my bike on CredR?<span><img src={require('../../images/arrow.jpg')} alt="faq1" className='faq-1-style'/></span></div>
     </div>
     <div className='faq-2-container'>
       <div className='faq-2'>What is the process for selling my old bike?<span><img src={require('../../images/up-arrow.jpg')} alt="faq2" className='faq-2-style'/></span></div>
       <div className='faq-2-2'>The process of selling a bike at CredR is as follows:<br/>
A. Register your bike details via website or WhatsApp<br/>
B. Your bike will be evaluated on 30 critical parameters<br/>
C. Receive a price quote for your bike<br/>
D. Sell to CredR will all legal paperwork and receive instant IMPS payment
</div>
     </div>
     <div className='faq-3-container'>
       <div className='faq-3'>What is the need for an inspection process?<span><img src={require('../../images/arrow.jpg')} alt="faq3" className='faq-3-style'/></span></div>
     </div>
     <div className='faq-4-container'>
       <div className='faq-4'>What documents are required to sell my old bike?<span><img src={require('../../images/arrow.jpg')} alt="faq4" className='faq-4-style'/></span></div>
     </div>
     <div className='faq-5-container'>
       <div className='faq-5'>Can I sell a bike belonging to someone else?<span><img src={require('../../images/arrow.jpg')} alt="faq5" className='faq-5-style'/></span></div>
     </div>
    </div>
    <div className='main-7'>
     
    </div>
    </div>
    </div>
    </div>
        </React.Fragment>
        
    
    )
   
}

export default Main;