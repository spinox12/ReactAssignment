import React,{ useState } from "react";

const Form=()=>{

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
        
       
       <div>
        <form className="form1" onSubmit={handleSubmit}>
           <div className="form-group">
               
               <input type="text" name="fullName" className="form-control"
               placeholder="Saniyo Joseph" value={formField.fullName} onChange={handleChange}/>
               <input type="number" name="mobile" className="form-control"
               placeholder="8277357248" value={formField.mobile} onChange={handleChange}/>
               <input type="number" name="pincode" className="form-control"
               placeholder="pincode" value={formField.pincode} onChange={handleChange}/>
               <button type="submit" className="btn btn-primary">Continue</button>
           </div>
       </form>
       </div>
        
    )
}

export default Form;
