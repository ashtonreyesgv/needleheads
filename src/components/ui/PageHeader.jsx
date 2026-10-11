// the top of every page except home: label, big title, a sentence or two, then the awning underneath
import Awning from './Awning.jsx';
import SectionHeading from './SectionHeading.jsx';

export default function PageHeader({ eyebrow, title, children }) {
    return (
        <header className="weave">
            <div className="mx-auto max-w-6xl px-5 pb-14 pt-14 sm:pb-16 sm:pt-20">
                <SectionHeading as="h1" eyebrow={eyebrow} title={title}>
                    {children}
                </SectionHeading>
            </div>
            <Awning />
        </header>
    );
}
