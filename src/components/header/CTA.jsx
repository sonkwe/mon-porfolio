import CV from '../../assets/cv.pdf'

const CTA = () => {
    return (
        <div className='cta'>
            <a href={CV} className="btn">Telecharger mon CV</a>
            <a href="#contact" className='btn btn-primary'> Me contacter</a>
        </div>
    );
};

export default CTA;