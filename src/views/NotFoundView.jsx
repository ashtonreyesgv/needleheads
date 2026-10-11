// shown for any address that doesn't match a page
import Button from '../components/ui/Button.jsx';
import NeonTee from '../components/ui/NeonTee.jsx';

export default function NotFoundView() {
    return (
        <section className="denim">
            <div className="mx-auto flex max-w-2xl flex-col items-center px-5 py-24 text-center sm:py-32">
                <div className="w-48 rounded-[2rem] bg-navy-950 p-6 stitch outline-canvas-50/15">
                    <NeonTee className="w-full" />
                </div>
                <h1 className="mt-10 text-5xl leading-tight text-canvas-50 sm:text-6xl">This page dropped a stitch.</h1>
                <p className="mt-5 text-lg leading-relaxed text-denim-100/85">The link you followed does not go anywhere. The shop is still right here on Myrtle Ave.</p>
                <div className="mt-9 flex flex-wrap justify-center gap-4">
                    <Button to="/">Back to home</Button>
                    <Button to="/contact" variant="cream">
                        Contact the shop
                    </Button>
                </div>
            </div>
        </section>
    );
}
