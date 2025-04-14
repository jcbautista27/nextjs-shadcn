import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const items = [
  {
    id: "item-1",
    question: "Eiusmod labore enim laborum cupidatat ex quis.",
    answer:
      "Do velit tempor ut quis dolor reprehenderit cillum exercitation cupidatat ex duis pariatur commodo.",
  },
  {
    id: "item-2",
    question:
      "Sint exercitation deserunt magna fugiat consectetur.",
    answer:
      "Labore et quis deserunt sit esse occaecat voluptate exercitation nisi commodo proident sint ad.",
  },
  {
    id: "item-3",
    question: "Esse deserunt aliqua aute magna occaecat.",
    answer: "Adipisicing duis culpa aute nisi.",
  },
  {
    id: "item-4",
    question:
      "Ut occaecat fugiat proident esse.",
    answer:
      "Labore fugiat ea laborum exercitation laborum dolor cillum fugiat.",
  },
];

export default function Page() {
  return (
    <div>
      <Accordion type="single" collapsible className="w-full">
        {items.map((item) => (
          <AccordionItem value={item.id} key={item.id}>
            <AccordionTrigger>{item.question}</AccordionTrigger>
            <AccordionContent>
              {item.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}
