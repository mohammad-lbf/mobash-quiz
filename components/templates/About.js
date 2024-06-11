import Skills from '../modules/About/Skills';
import WorkSamples from '../modules/About/WorkSamples';
import HomeAbout from '../modules/HomePage/HomeAbout'
const About = () => {
    return (
        <div className='container'>
            <div className='row justify-content-center'>
                <div className='col-lg-12 col-xl-10'>
                    <HomeAbout />
                    <Skills />
                    <WorkSamples />
                </div>
            </div>
        </div>
    );
};

export default About;