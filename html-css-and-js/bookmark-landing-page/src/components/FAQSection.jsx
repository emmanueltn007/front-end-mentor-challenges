import faqs from "../../data/faqs";
import FAQItem from "./FAQItem";

function FAQSection() {

  return (
    <section className="md:pl-64 md:pr-64 pt-8 pb-8 pl-8 pr-8 flex flex-col gap-4">
      <div className="flex flex-col gap-4 text-center">
        <h2 className="text-2xl text-[hsl(229,31%,21%)] font-semibold">
          Frequently Asked Questions
        </h2>
        <p className="text-gray-500 font-medium">
          Here are some of our FAQs. If you have any other questions you'd like
          answered please feel free to email us.
        </p>
      </div>
      <div className="text-[hsl(229,31%,21%)] font-semibold w-full border-t border-gray-500">
       {faqs.map((faq, index) => (
        <FAQItem
            key={index}
            question={faq.question}
            answer={faq.answer}
         />
       ))}
      </div>
    </section>
  );
}

export default FAQSection;
