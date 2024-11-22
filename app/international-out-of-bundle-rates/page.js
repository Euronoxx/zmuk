"use client"
import { Container, Table } from "react-bootstrap";
import Header from "../components/Header";
import Footer from "../components/Footer";
import HeadBar from "../components/HeadBar";

export default function OutOfBundleRates () {
    return (
        <>
        <Header />
        <HeadBar text="International Out-of-Bundle Rates" />
        <Container className="p-5">
            <p className="bigred text-center">International Out-of-Bundle Rates (Calls, Texts & MMS)-Overage Rates</p>
            <Table striped bordered hover responsive className="text-center mb-5">
                <thead>
                    <tr className="body22">
                        <td scope="col" class="col-2" style={{backgroundColor:'#DF1E5A',color:'white',verticalAlign:'top'}}>Zones</td>
                        <td scope="col" class="col-4" style={{backgroundColor:'#DF1E5A',color:'white',verticalAlign:'top'}}>Countries</td>
                        <td scope="col" class="col-2" style={{backgroundColor:'#DF1E5A',color:'white',verticalAlign:'top'}}>Call Charge Per Minute (£)</td>
                        <td scope="col" class="col-2" style={{backgroundColor:'#DF1E5A',color:'white',verticalAlign:'top'}}>Charge Per SMS (£)</td>
                        <td scope="col" class="col-2" style={{backgroundColor:'#DF1E5A',color:'white',verticalAlign:'top'}}>Charge Per MMS (£)</td>
                    </tr>
                </thead>
                <tbody>
                    <tr className="body22">
                        <td className="p-3">Zone 1 - Ireland, Isle of Man &amp; Channel Islands</td>
                        <td className="p-3">Ireland Guernsey Jersey Isle of Man</td>
                        <td className="p-3">£0.1000</td>
                        <td className="p-3">£0.1000</td>
                        <td className="p-3">£0.4500</td>
                    </tr>
                    <tr className="body22">
                        <td className="p-3">Zone 2 - Europe</td>
                        <td className="p-3">Albania Andorra Austria Belgium Bulgaria Canary Islands Croatia Cyprus (Greek) Czech Republic Denmark Estonia Finland France Germany Gibraltar Greece Hungary Iceland Italy Kosovo Liechtenstein Lithuania Luxembourg Macedonia Malta Monaco Montenegro Netherlands Norway Poland Portugal Romania San Marino Serbia Slovakia Slovenia Spain Sweden Transnistria.</td>
                        <td className="p-3">£0.3500</td>
                        <td className="p-3">£0.20000</td>
                        <td className="p-3">£0.4500</td>
                    </tr>
                    <tr className="body22">
                        <td className="p-3">Zone 3 - Asia &amp; Pacific</td>
                        <td className="p-3">Australia China Hong Kong Japan Malaysia New Zealand Philippines Singapore Thailand</td>
                        <td className="p-3">£0.6500</td>
                        <td className="p-3">£0.2000</td>
                        <td className="p-3">£0.4500</td>
                    </tr>
                    <tr className="body22">
                        <td className="p-3">Zone 4 - USA</td>
                        <td className="p-3">USA</td>
                        <td className="p-3">£0.2500</td>
                        <td className="p-3">£0.2000</td>
                        <td className="p-3">£0.4500</td>
                    </tr>
                    <tr className="body22">
                        <td className="p-3">Zone 5 - Middle East</td>
                        <td className="p-3">Algeria Cyprus (Turkish) Egypt Iran Iraq Israel Jordan Kuwait Lebanon Libya Morocco Oman Qatar Saudi Arabia Tunisia Turkey United Arab Emirates</td>
                        <td className="p-3">£0.7500</td>
                        <td className="p-3">£0.2000</td>
                        <td className="p-3">£0.4500</td>
                    </tr>
                    <tr className="body22">
                        <td className="p-3">Zone 6 - Rest of the World</td>
                        <td className="p-3"><p>Abkhazia Afghanistan Aland Islands American Samoa Angola Anguilla Antarctica Antigua and Barbuda Argentina Armenia Aruba Ascension Island Azerbaijan Bahamas Bahrain Bangladesh Barbados Belarus Belize Benin Bermuda</p><p>Bhutan Bolivia Bosnia and Herzegovina Botswana Brazil British Indian Ocean Territory Brunei Darussalam Burkina Faso Burundi Cambodia Cameroon Canada Cape Verde Caribbean Netherlands Cayman Islands Central African Republic Ceuta and Melilla Chad Chile Christmas Island Cocos - Keeling Island Colombia Comoros Congo DR Congo-Brazzaville Cook Islands Costa Rica Côte D'Ivoire Cuba Curacao Diego Garcia Djibouti Dominica Dominican Republic Ecuador El Salvador Equatorial Guinea Eritrea Ethiopia Falkland Islands Faroe Islands Fiji French Guiana French Polynesia French Southern and Antarctic Lands Gabon Gambia Georgia Ghana Greenland Grenada Guadeloupe Guam Guatemala Guinea Guinea-Bissau Guyana Haiti Honduras India Indonesia Jamaica Kazakhstan Kenya Kiribati Korea North Korea South Kyrgyzstan Laos Latvia Lesotho Liberia Macau Madagascar Malawi Maldives Mali Marshall Islands Martinique Mauritania Mauritius Mayotte Melilla Mexico Micronesia Moldova Mongolia Montserrat Mozambique Myanmar Nagorno-Karabakh Namibia Nauru Nepal Netherlands Antilles New Caledonia Nicaragua Niger Nigeria Niue Norfolk Island Northern Mariana Islands Pakistan Palau Palestine Panama Papua New Guinea Paraguay Peru Pitcairn Islands Puerto Rico Reunion Russia Rwanda Saint Barthelemy Saint Helena Ascension and Tristan da Cunha Saint Kitts and Nevis Saint Lucia Saint Martin Saint Pierre and Miquelon Saint Vincent and the Grenadines Samoa São Tomé and Príncipe Senegal Seychelles Sierra Leone Sint Maarten Solomon Islands Somalia Somaliland South Africa South Ossetia South Ossetia South Sudan Sri Lanka Sudan Suriname Svalbard and Jan Mayen Swaziland Switzerland Syria Taiwan Tajikistan Tanzania Timor-Leste Togo Tokelau Tonga Trinidad and Tobago Tristan da Cunha Turkmenistan Turks and Caicos Islands Tuvalu Uganda Ukraine United States Minor Outlying Islands Uruguay Uzbekistan Vanuatu Vatican City Venezuela Vietnam Virgin Islands (British) Virgin Islands (U.S) Wallis and Futuna Islands Western Sahara Yemen Zambia Zimbabwe</p></td>
                        <td className="p-3">£0.9500</td>
                        <td className="p-3">£0.2000</td>
                        <td className="p-3">£0.4500</td>
                    </tr>
                </tbody>
            </Table>
        </Container>
        <Footer />
        </>
    );
}