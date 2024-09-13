import React from 'react'
import '../assets/common_form.css'
import { useNavigate } from 'react-router-dom';

const Paid_Marketing = () => {
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
        }else if(formnavigate === "Social Media Marketing"){
            navigate('/social-media-marketing')
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
                <h2 className='text-bold text-underline'>Neoripples Onboarding PPC Processing</h2>
            </div>
            <div className="row clearfix">
                <div className="">
                    <form id="inquiryForm">
                        <div className="input_field">
                            <input type="text" name="What are your primary business objectives" placeholder="What are your primary business objectives for PPC?(Increase Sales, Generate Leads, Brand Awareness)" required />
                        </div>
                        <div className="input_field">
                            <input type="text" name="What PPC strategies" placeholder="What PPC strategies do your competitors use (if known)?" required />
                        </div>
                        <div className="input_field">
                            <input type="email" name="Customer Pain Points" id="Customer Pain Points" placeholder="Customer Pain Points" required />
                        </div>
                        <div className="input_field">
                            <input type="text" name="Buyer Personas" id="Buyer Personas" placeholder="Buyer Personas" required />
                        </div>
                        <div className="input_field"><input type="text" id="Brand Guidelines"   placeholder="Brand Guidelines" required /></div>
                        <div className="input_field"><input type="text" id="Have you used PPC"   placeholder='Have you used PPC before? If yes, please provide details of previous campaigns'/></div>
                        <div className="input_field"><input type="text" id="Monthly Ad Spend Budget"   placeholder='Monthly Ad Spend Budget'/></div>
                        <div className="input_field"><input type="text" id="Expected Campaign Duration"   placeholder='Expected Campaign Duration'/></div>
                        {/* <div className="input_field"><input type="text" id="Psychographics"  value="Psychographics" placeholder='Psychographics(Interests, Values, Behaviors)'/></div> */}
                        <div className="input_field"><input type="date" id="Desired Start Date"   placeholder='Desired Start Date'/></div>
                        <div className="input_field"><input type="text" id="Do you have access"   placeholder='Do you have access to your Ads accounts (Google Ads, Facebook, etc.)?'/></div>
                        <div className="input_field"><input type="text" id="Have you set up conversion tracking?"  placeholder='Have you set up conversion tracking?'/></div>
                        <div className="input_field"><input type="text" id="Provide access to Analytics or Remarketing Pixels if applicable."   placeholder="Provide access to Analytics or Remarketing Pixels if applicable." /></div>

                        <div className="input_field select_option">
                            <select name="Country" required onChange={(e) => services_submited(e.target.value)}>
                                <option value="" disabled selected>Choose services</option>
                                <option value="Website Development & Maintenance" >Website Development & Maintenance</option>
                                <option value="Branding and Designing" >Branding and Designing</option>

                                <option value="Email Marketing">Email Marketing</option>
                                {/* <option value="Paid Marketing">Paid Marketing</option> */}

                                <option value="Social Media Marketing">Social Media Marketing</option>
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

export default Paid_Marketing
