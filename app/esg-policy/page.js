"use client"
import Header from "../components/Header";
import HeadBar from "../components/HeadBar";
import Footer from "../components/Footer";
import { Container } from "react-bootstrap";
import Link from "next/link";

export default function esgPolicy () {
    return (
        <>
        <Header />
        <HeadBar text="Environmental, Social, and Governance (ESG) Policy" />
        <Container className="p-5">
            <p className="bigred">1. Introduction of ESG Policy</p>
            <p className="body22">Zoiko Mobile, a registered trademark of Zoiko Telecom Ltd, establishes this Environmental, Social, and Governance (ESG) Policy to formalize our commitment to responsible corporate citizenship and sustainability. This policy outlines our core principles and dedication to ESG principles.</p>
            <p className="bigred">2. Environmental Responsibility</p>
            <p className="body22">Compliance: Zoiko Mobile is committed to strict compliance with all relevant environmental laws and regulations, ensuring that our operations adhere to the highest environmental standards.</p>
            <p className="body22">Resource Efficiency: We will actively work to minimize resource consumption and reduce our carbon footprint by embracing energy-efficient practices and waste reduction.</p>
            <p className="body22">Innovation for Sustainability: Zoiko Mobile will drive innovation in the development of environmentally friendly and energy-efficient products and services, contributing to a more sustainable environment.</p>
            <p className="bigred">3. Social Responsibility</p>
            <p className="body22">Diversity and Inclusion: We are dedicated to fostering a diverse and inclusive work environment where every employee is valued and respected, promoting equality across our workforce.</p>
            <p className="body22">Fair Labour Practices: Zoiko Mobile is committed to maintaining fair labour practices, which include providing fair wages, ensuring safe and healthy working conditions, and respecting workers' rights.</p>
            <p className="body22">Community Engagement: We actively engage with the communities where we operate, supporting social development, philanthropy, and volunteerism to make a positive impact on society.</p>
            <p className="body22">Customer Focus: Our top priority is customer satisfaction. We achieve this by delivering high-quality products and services, maintaining transparency, and conducting our business with the utmost integrity.</p>
            <p className="bigred">4. Governance and Ethics</p>
            <p className="body22">Ethical Conduct: Zoiko Mobile conducts its business with the highest ethical standards, guided by a robust code of conduct that applies to all employees and stakeholders.</p>
            <p className="body22">Board Diversity: Our board of directors strives to be diverse in terms of expertise, gender, and background, encouraging a broader range of perspectives in our decision-making processes.</p>
            <p className="body22">Transparency and Accountability: We are committed to maintaining transparency in financial reporting, corporate governance, and decision-making processes, while adhering to legal and regulatory requirements.</p>
            <p className="body22">Risk Management: Zoiko Mobile actively assesses and manages risks to the business, including those related to ESG issues, to safeguard the long-term interests of our stakeholders.</p>
            <p className="bigred">5. Reporting and Continuous Improvement</p>
            <p className="body22">Zoiko Mobile is committed to regularly assessing and reporting on our ESG performance to ensure transparency and accountability to our stakeholders.</p>
            <p className="body22">We actively seek feedback from stakeholders and engage with them to align our ESG initiatives with their expectations.</p>
            <p className="bigred">6. Compliance</p>
            <p className="body22"><Link href={"https://zoikomobile.co.uk"} target="_blank">Zoiko Mobile</Link> commits to full compliance with all relevant laws, regulations, and industry standards pertaining to ESG issues.</p>
            <p className="bigred">7. Continuous Enhancement</p>
            <p className="body22">We continuously review and enhance our ESG practices, setting increasingly higher standards and achieving better performance in environmental, social, and governance matters.</p>
            <p className="bigred">8. Conclusion</p>
            <p className="body22">This ESG Policy underscores Zoiko Mobile's unwavering commitment to sustainable and responsible business practices, focusing on environmental preservation, social responsibility, and sound governance. Our aim is to be a leader in ESG initiatives, providing value to our stakeholders and contributing to a more sustainable and inclusive world.</p>
        </Container>
        <Footer />
        </>
    );
}