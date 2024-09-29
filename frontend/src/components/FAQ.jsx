import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
function FAQ({ value, title, content }) {
  return (
    <AccordionItem value={value}>
      <AccordionTrigger>{title}</AccordionTrigger>
      <AccordionContent>{content}</AccordionContent>
    </AccordionItem>
  );
}

export default FAQ;
