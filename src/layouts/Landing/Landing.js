import React from 'react';
import {Provider, Heading, Subhead} from 'rebass';
import {
    Hero, CallToAction, ScrollDownIndicator, Section, Checklist
} from 'react-landing-page';

const featherCheckmark = <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24" height="24"
    viewBox="0 0 24 24"
    fill="none" stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
>
    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
    <polyline points="22 4 12 14.01 9 11.01"/>
</svg>;

const Landing = props => (
    <Provider>
        <Hero
            color="black"
            bg="white"
            backgroundImage="https://source.unsplash.com/REKXJ7JhwiI/1600x900"
        >
            <Heading>FamiLink</Heading>
            <Subhead>Linking Family History Data through Blockchain</Subhead>
            <CallToAction href="/getting-started" mt={3}>Get Started</CallToAction>
            <ScrollDownIndicator/>
        </Hero>
        <Section width={1}
                 heading='Why pick FamiLink?'
                 subhead='maybe this will help'>
            <Checklist children={[
                'Reliability',
                'Privacy',
                'Security'
            ]} checkmark={featherCheckmark}/>
        </Section>
    </Provider>
);

export default Landing;