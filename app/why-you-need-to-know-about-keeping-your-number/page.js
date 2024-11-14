"use client"
import { Container, Button } from "react-bootstrap";
import Header from "../components/Header";
import Footer from "../components/Footer";
import HeadBar from "../components/HeadBar";
import React, { useState } from "react";

function SwitchNetwork () {
    
    const [isToggled, setIsToggled] = useState(false);
    const [isOpen, setOpen] = useState(false);
    const toggleView = () => {
        setOpen(!isOpen);
        setIsToggled(!isToggled);
    }

    return (
        <>
        <Header />
        <HeadBar text="Switching Network" />
        <Container className="py-4 redborderbox my-5">
            <p className="body22">To keep your old number and bring it over to ZOIKO, you can follow these 3 straightforward steps:</p>
            <p className="body22"><span className="txtred">Request a PAC in 60 seconds:</span> Obtain your PAC (Porting Authorisation Code) from your current mobile provider. This code is essential for transferring your number.</p>
            <p className="body22"><span className="txtred">Enter your PAC to start your transfer:</span> In your ZOIKO account, enter the PAC you received from your previous provider to initiate the number transfer process.</p>
            <p className="body22"><span className="txtred">Activate your SIM in minutes (If you haven&apos;t already):</span> If you haven&apos;t already done so, activate your ZOIKO SIM to complete the transfer and start using your existing phone number with ZOIKO.</p>
            <p className="body22">That&apos;s all there is to it!</p>
            <p className="bigred">How to Request a PAC for ZOIKO: Essential for Number Transfer</p>
            <p className="body22">When you&apos;re looking to transfer your existing mobile number to ZOIKO, you&apos;ll need to obtain a PAC (Porting Authorisation Code) from your current mobile provider. This PAC is a crucial element in the process of transferring your number, and it ensures a smooth transition to ZOIKO. Here&apos;s a detailed guide on how to request a PAC for ZOIKO:</p>
            {isOpen && (
            <>
            <p className="bigred">Step 1: Contact Your Current Mobile Provider</p>
            <p className="body22">To initiate the process, get in touch with your current mobile provider. You can usually do this by calling their customer service or visiting their website. Inform them that you intend to transfer your number to ZOIKO and request a PAC. They are legally obligated to provide you with the PAC promptly.</p>
            <p className="bigred">Step 2: Receive Your PAC</p>
            <p className="body22">Once you&apos;ve made the request, your current mobile provider will generate a PAC for your number. They will provide you with this unique code, typically via text message, email, or a written letter. Make sure to keep this code in a safe place, as you&apos;ll need it to complete the transfer.</p>
            <p className="bigred">Step 3: Note the Expiry Date</p>
            <p className="body22">PACs come with an expiry date, usually valid for 30 days. It&apos;s essential to be aware of this expiration date. You must provide the PAC to ZOIKO within this time frame for the number transfer to be successful. If the PAC expires, you&apos;ll need to request a new one from your current provider.</p>
            <p className="bigred">Step 4: Share Your PAC with ZOIKO</p>
            <p className="body22">Now that you have your PAC, log in to your ZOIKO account. There, you&apos;ll find an option to enter your PAC to begin the number transfer process. ZOIKO will guide you through the rest of the steps to complete the transfer, which typically involves activating your ZOIKO SIM.</p>
            <p className="bigred">Step 5: Complete the Transfer</p>
            <p className="body22">After entering the PAC and following the provided instructions, ZOIKO will work to complete the number transfer. This process may take a short amount of time, usually within a few hours, but it can take up to 2 working days in some cases. Once the transfer is complete, your old number will be seamlessly integrated with your ZOIKO plan.</p>
            <p className="body22">By obtaining and providing the PAC, you can easily bring your existing phone number over to ZOIKO, allowing you to continue using your preferred number with the convenience of their services.</p>
            <p className="bigred">Entering Your PAC for ZOIKO Number Transfer</p>
            <p className="body22">When you&apos;ve obtained your PAC (Porting Authorisation Code) from your previous mobile provider and are ready to initiate the number transfer process with ZOIKO, follow these detailed steps along with accompanying diagrams:</p>
            <p className="bigred">Step 1: Log In to Your ZOIKO Account</p>
            <p className="body22">Begin by accessing your ZOIKO account. This typically involves visiting the ZOIKO website or using their mobile app. You&apos;ll need your account credentials to log in.</p>
            <p className="body22">Login</p>
            <p className="bigred">Step 2: Find the Number Transfer Section</p>
            <p className="body22">Once you&apos;re logged in, navigate to the section of your ZOIKO account specifically designated for number transfers. This might be labeled as &apos;Number Transfer&apos; or &apos;Port Your Number.&apos;</p>
            <p className="body22">Number Transfer</p>
            <p className="bigred">Step 3: Input Your PAC</p>
            <p className="body22">Within the Number Transfer section, you&apos;ll find a field where you can input your PAC. This is the unique code provided by your previous mobile provider. Enter the code carefully and accurately to ensure a smooth transfer process.</p>
            <p className="body22">Enter PAC</p>
            <p className="bigred">Step 4: Verify Your Details</p>
            <p className="body22">After inputting the PAC, ZOIKO may ask you to verify your personal and account information to confirm the number transfer. This step is important for security and accuracy.</p>
            <p className="body22">Verify Details</p>
            <p className="bigred">Step 5: Confirm and Submit</p>
            <p className="body22">Once your information is verified, review the details of your transfer, including the number you&apos;re moving to ZOIKO. If everything appears correct, you can submit your request to begin the transfer process.</p>
            <p className="body22">Submit</p>
            <p className="body22">Step 6: Wait for Activationa</p>
            <p className="body22">After submitting your request, ZOIKO will work to activate your new plan with your existing number. This process may take a few hours, but it can take up to 2 working days in some cases. During this time, you&apos;ll continue to have service with your old provider.</p>
            <p className="body22">Activation</p>
            <p className="bigred">Step 7: Confirmation</p>
            <p className="body22">Once the transfer is complete, ZOIKO will send you a confirmation notification, typically via email or text message, informing you that your existing number is now successfully integrated with your ZOIKO plan.</p>
            <p className="body22">Confirmation</p>
            <p className="body22">By following these steps and accompanying diagrams, you can smoothly enter your PAC to initiate the number transfer process with ZOIKO, allowing you to continue using your preferred number with their services.</p>
            <p className="bigred">Activating Your ZOIKO SIM for Number Transfer</p>
            <p className="body22">If you haven&apos;t already activated your ZOIKO SIM, this step is essential to complete the number transfer process and start using your existing phone number with ZOIKO. Here&apos;s a detailed guide on how to activate your ZOIKO SIM:</p>
            <p className="bigred">Step 1: Locate Your ZOIKO SIM Card</p>
            <p className="body22">Make sure you have your ZOIKO SIM card on hand. It usually comes in a package with clear instructions.</p>
            <p className="body22">SIM Card</p>
            <p className="bigred">Step 2: Insert the SIM Card</p>
            <p className="body22">Gently remove your current SIM card from your phone and replace it with the ZOIKO SIM card. The SIM card slot location varies depending on your phone model. Consult your phone&apos;s manual if you&apos;re unsure.</p>
            <p className="body22">Insert SIM</p>
            <p className="bigred">Step 3: Power On Your Phone</p>
            <p className="body22">Turn on your phone and ensure it detects the new ZOIKO SIM card. It may take a few moments for your phone to register the new SIM.</p>
            <p className="bigred">Step 4: Activate the SIM</p>
            <p className="body22">If your ZOIKO SIM requires activation (some SIMs may be pre-activated), visit the ZOIKO website or use their mobile app. Log in to your ZOIKO account, and you&apos;ll typically find an option for SIM activation. Click or tap on this option to proceed.</p>
            <p className="body22">Activate SIM</p>
            <p className="bigred">Step 5: Follow Activation Instructions</p>
            <p className="body22">Follow the on-screen instructions provided by ZOIKO to activate your SIM. This may include verifying your account details, confirming your plan, and agreeing to terms and conditions.</p>
            <p className="bigred">Step 6: Restart Your Phone</p>
            <p className="body22">After completing the activation process, it&apos;s a good practice to restart your phone to ensure the changes take effect.</p>
            <p className="bigred">Step 7: Test Your Services</p>
            <p className="body22">Check your phone to make sure you have signal bars and can send/receive calls and texts. You should also test your data connection to confirm that it&apos;s functioning properly.</p>
            <p className="bigred">Step 8: Wait for Confirmation</p>
            <p className="body22">After successfully activating your ZOIKO SIM, you&apos;ll receive a confirmation notification, usually via email or text message, indicating that your SIM is ready for use with your existing phone number.</p>
            <p className="body22">By following these detailed steps, you can quickly activate your ZOIKO SIM and complete the number transfer, allowing you to use your existing phone number with ZOIKO&apos;s services. This ensures a seamless transition to your new provider.</p>
            </>
            )}
            <div className="text-center py-4"><Button variant="outline-danger" onClick={toggleView}>{isToggled ? 'Read Less' : 'Read More'}</Button></div>
        </Container>
        <Footer />
        </>
    );
}
export default SwitchNetwork;