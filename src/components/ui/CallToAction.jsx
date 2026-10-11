// the band that closes out most pages: the neon sign from the window next to a nudge to get in touch
import { business } from '../../data/business.js';
import Button from './Button.jsx';
import Icon from './Icon.jsx';
import NeonTee from './NeonTee.jsx';

export default function CallToAction({ title = 'Your logo goes here.', children }) {
    return (
        <section className="denim">
            <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 py-16 sm:py-20 md:grid-cols-[auto_1fr] md:gap-16">
                <div className="mx-auto w-52 rounded-[2rem] bg-navy-950 p-6 stitch outline-canvas-50/15 sm:w-60">
                    <NeonTee className="w-full" />
                </div>
                <div className="text-center md:text-left">
                    <h2 className="text-4xl leading-[1.05] text-canvas-50 sm:text-5xl">{title}</h2>
                    <p className="mt-5 max-w-xl text-lg leading-relaxed text-denim-100/85 max-md:mx-auto">
                        {children || 'Tell us what you have in mind and how many you need. We will take it from there.'}
                    </p>
                    <div className="mt-8 flex flex-wrap justify-center gap-4 md:justify-start">
                        <Button to="/contact" variant="red">
                            Get a quote
                            <Icon name="arrow" />
                        </Button>
                        <Button href={business.phoneHref} variant="cream">
                            <Icon name="phone" />
                            {business.phone}
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
}
