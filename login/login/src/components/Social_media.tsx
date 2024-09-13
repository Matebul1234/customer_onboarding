import React from 'react'
import '../assets/common_form.css'
import { useNavigate } from 'react-router-dom';

const Social_media = () => {
    var navigate = useNavigate();
    var formnavigate = "";

    const services_submited= (e:any)=>{
        formnavigate=e;
       
    }
    const submit_form=(e:any)=> {
        console.log("navigate value", formnavigate);
        if(formnavigate === "Website Development & Maintenance"){
            navigate('/websiteform');
        } else if(formnavigate === "Data Visualization"){
            navigate('/datavisualization')
        }else if(formnavigate === "Paid Marketing"){
            navigate('/paid-marketing')
        }else if(formnavigate === "Email Marketing"){
            navigate('/email-marketing')
        }else if(formnavigate === "Branding and Designing"){
            navigate('/branding')
        }
    }
  return (
    <>
    <div className="form_wrapper"> 
        <div className="form_container">
            <div className="title_container">
                <h2 className='text-bold text-underline'>Neoripples Onboarding Processing</h2>
            </div>
            <div className="row clearfix">
                <div className="">
                    <form id="inquiryForm">
                        <div className="input_field">
                            <input type="text" name="Company_Name" placeholder="Company Name" required />
                        </div>
                        <div className="input_field">
                            <input type="text" name="Full_Name" placeholder="Primary Contact Person" required />
                        </div>
                        <div className="input_field">
                            <input type="email" name="email" id="email" placeholder="Email" required />
                        </div>
                        <div className="input_field">
                            <input type="text" name="number" id="number" placeholder="Mobile No" required />
                        </div>
                        <div className="input_field"><input type="text" id="Website"   placeholder="Website" required /></div>
                        <div className="input_field"><input type="text" id="Industry/Niche"   placeholder='Industry/Niche'/></div>
                        <div className="input_field"><input type="text" id="Brief Business"   placeholder='Brief Business Description or Overview (about product/service)'/></div>
                        <div className="input_field"><input type="text" id="Target Audience"   placeholder='Target Audience (Demographics: Age, Gender, Location, Income)'/></div>
                        {/* <div className="input_field"><input type="text" id="Psychographics"  value="Psychographics" placeholder='Psychographics(Interests, Values, Behaviors)'/></div> */}
                        <div className="input_field"><input type="text" id="Describe the products"   placeholder='Describe the products/services you offer'/></div>
                        <div className="input_field"><input type="text" id="List your Competitors"   placeholder='List your Competitors'/></div>
                        <div className="input_field"><input type="text" id="Unique Selling Proposition"  placeholder='Unique Selling Proposition (USP) of your company'/></div>
                        <div className="input_field"><input type="text" id="Key Performance Indicators"   placeholder=" Key Performance Indicators (KPIs)" /></div>

                        <div className="input_field select_option">
                            <select name="Country" required onChange={(e) => services_submited(e.target.value)}>
                                <option value="" disabled selected>Choose services</option>
                                <option value="Website Development & Maintenance" >Website Development & Maintenance</option>
                                <option value="Branding and Designing" >Branding and Designing</option>

                                <option value="Email Marketing">Email Marketing</option>
                                <option value="Paid Marketing">Paid Marketing</option>

                                {/* <option value="Social Media Marketing">Social Media Marketing</option> */}
                                <option value="Data Visualization">Data Visualization</option>
                            </select>
                            <div className="select_arrow"></div>
                        </div>
                        <div className="input_field select_option">
                            <button className="btn btn-sm bg-black text-light w-100" onClick={submit_form}>Next</button>
                        </div>
                        
                    </form>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Social_media
