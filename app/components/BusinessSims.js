import Link from "next/link";
import { Container } from "react-bootstrap";

function BusinessSims () {
    return (
        <Container fluid className="switchnsave">
            <div className="snslink">
                <Link href='/limited-offers'>Find out more</Link>
                <Link href='/zoiko-mobile-switch-save-form'>Switch &amp; Save</Link>
            </div>
        </Container>
    );
}
export default BusinessSims;