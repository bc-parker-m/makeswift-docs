import * as BaseAccordion from "@radix-ui/react-accordion"
import { ReactNode } from "react";


type accordionProp = {
    accordions: AccordionItem[];
    className: string;
}

type AccordionItem = {
    title: string;
    children?: ReactNode;
}

export function Accordion({ className, accordions }: accordionProp) {
    if (accordions.length === 0) return (<p>No accordions provided.</p>);

    return (

        <div>
            <BaseAccordion.Root type="single" className={className}>
                {accordions.map((accordion, index) => (
                    <BaseAccordion.Item key={index} value={`item-${index}`} className="border-b-2 py-2">
                        <BaseAccordion.Trigger className="py-4">
                            <div className="font-extrabold uppercase">{accordion.title}</div>
                        </BaseAccordion.Trigger>
                        <BaseAccordion.Content className="pb-6">
                            {accordion.children}
                        </BaseAccordion.Content>
                    </BaseAccordion.Item>
                ))}
            </BaseAccordion.Root>
        </div>
    );
}