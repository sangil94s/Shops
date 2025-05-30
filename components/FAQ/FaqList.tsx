import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../ui/accordion';

// FAQ 리스트 보여주는 부분

export default function FaqList() {
  return (
    <div className="m-auto w-10/12">
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger>Is it accessible?</AccordionTrigger>
          <AccordionContent>Yes. It adheres to the WAI-ARIA design pattern.</AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
