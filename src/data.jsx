import HeroImage from '../src/assets/hero.jpg'
import ChoiceImage from '../src/assets/why_us.jpg'
import SignUp from '../src/assets/signup.jpg'
import Steps from '../src/assets/steps.jpg'
import Review from '../src/assets/review.jpg'
import Submit from '../src/assets/submit.jpg'
import Consultation from '../src/assets/consultation.jpg'

import Logo from '../src/assets/logo.png'
import {FaFacebook, FaHome, FaInstagram, FaLinkedin, FaMobile, FaYoutube} from "react-icons/fa";
import {BsChatDotsFill} from "react-icons/bs";
import {MdEmail} from "react-icons/md";

export const navigationData =  [
    {
        name: 'Why Us',
        href: '#',
    },
    {
        name: 'Procedure',
        href: '#',
    },
    {
        name: 'Services',
        href: '#',
    },
    {
        name: 'Signup',
        href: '#',
    },
];

export const heroData =  {
    // title: 'AI-based Automated Statement of Purpose (SOP) Builder',
    title: 'AI-based Automated SOP Builder',
    subtitle: 'Revolutionizing SOP Creation for Canadian Study Visa and University Admission Application',
    features: [
        'Statement of Purpose (SOP) is the decision maker of your Study Visa and University Admission application approval',
        'Make a well-written, clear, and concise SOP using step-by-step guidance and the power of AI',
        'Our platform guides you through crafting a personalized Statement of Purpose (SOP) incorporating all the important factors for the success of your application',
        'You can also consult and get help from our SOP writing experts',
    ],
    btnText: 'Create Your SOP',
    image: HeroImage,
};

export const choiceData =  {
    title: 'Why Choose SOPGURU?',
    reasons: [
        {
            title: 'Faster Process',
            subtitle: 'Our intuitive platform streamlines the SOP creation process using AI, making it faster and more efficient than ever before'
        },
        {
            title: 'User Friendly Approach',
            subtitle: 'No expertise needed! Our user-friendly interface guides you through each step, ensuring an easy and intuitive SOP writing experience'
        },
    ],
    image: ChoiceImage,
};

export const procedureData =  {
    title: 'How SOPGURU Works',
    subtitle: 'Crafting Your SOP Made Simple',
    procedure: [
        {
            image: SignUp,
            title: 'Sign Up',
            subtitle: 'Create your account in minutes and start your journey towards writing a successful SOP for study visa and university admission',
            position: 'fade-up',
            delay: 400
        },
        {
            image: Steps,
            title: 'Guided Process',
            subtitle: 'Our smart, AI-driven model will lead you through personalized questions, creating a unique SOP tailored to your profile',
            position: 'fade-down',
            delay: 400
        },
        {
            image: Review,
            title: 'Review & Edit',
            subtitle: 'You have the power! Review and edit your SOP to ensure it resonates with your voice and aspirations',
            position: 'fade-up',
            delay: 600
        },
        {
            image: Submit,
            title: 'Download & Submit',
            subtitle: 'Download your professionally crafted SOP, ready for submission. Take control and submit it with confidence',
            position: 'fade-down',
            delay: 600
        },
    ],
};

export const consultData =  {
    title: 'Personal Consultations',
    subtitle: 'Expert Guidance When You Need It',
    points: [
        {
            title: 'More Confidence',
            subtitle: 'Want to build more confidence on your AI generated SOP? You can also take one-on-one consultation from our SOP experts'
        },
        {
            title: 'More Success',
            subtitle: 'Our experts will check thoroughly if all the important factors are incorporated in your SOP for the maximum probability of success'
        },
    ],
    image: Consultation,
};

export const ctaData =  {
    title: 'Start Your Journey Today',
    info: ['Transparent pricing - No hidden fees!', 'Your data is secure with us'],
    btnText1: 'Get Started Now',
    btnText2: 'Request Demo',
};

export const footerData =  {
    logo: Logo,
    info: [
        {
            address: 'Fredericton, NB, Canada',
            icon: <FaHome />,
        },
        {
            email: 'contact@sopguru.com',
            icon: <MdEmail />,
        },
        {
            phone: '(+1)506-460-2020',
            icon: <FaMobile />,
        },
    ],
    list1: [
        {
            name: 'Profile',
            href: '#'
        },
        {
            name: 'Features',
            href: '#'
        },
        {
            name: 'Careers',
            href: '#'
        },
        {
            name: 'SOP News',
            href: '#'
        },
        {
            name: 'Blog',
            href: '#'
        },
    ],
    list2: [
        {
            name: 'Support',
            href: '#'
        },
        {
            name: 'Terms of service',
            href: '#'
        },
        {
            name: 'Guide',
            href: '#'
        },
        {
            name: 'Privacy Policy',
            href: '#'
        },
        {
            name: 'Q&A',
            href: '#'
        },
    ],
    socialList:[
        {
            icon: <FaYoutube />,
            href: '#'
        },
        {
            icon: <FaLinkedin />,
            href: '#'
        },
        {
            icon: <FaInstagram />,
            href: '#'
        },
        {
            icon: <FaFacebook />,
            href: '#'
        },

    ]
};

export const copyrightData = {
    text: 'Copyright © 2024 SOPGURU. All rights reserved.',
    icon: <BsChatDotsFill />
}