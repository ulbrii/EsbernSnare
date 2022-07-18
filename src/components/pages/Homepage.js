import { Row } from 'react-bootstrap'

import HomeTitle from '../ui/HomeTitle';
import SocialButtons from '../ui/SocialButtons';
import Navigation from '../ui/Navigation';

// Exported to App component
function Homepage() { return (
<>
    <section className="homepage">
        {/* Top Section */}
        <Row className="top-section" />

        {/* Title Section */}
        <HomeTitle />

        {/* Social Bar */}
        <SocialButtons />
    </section>
    <Navigation />
</>
)}

export default Homepage;
