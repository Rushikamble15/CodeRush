import { Accordion } from "./Accordion";

export const Faq = () => {
    const faqs = [
      {
        "id": 1,
        "question": "Why should I use CodeRush?",
        "answer": "Code Rush: Your one-stop e-commerce destination for a vast product selection, competitive prices, and a user-friendly shopping experience. Shop now and discover the difference!"
      },
      {
        "id": 2,
        "question": "Can I access my eBook on mobile?",
        "answer": "Absolutely! You can access your eBook on your mobile device for convenient and on-the-go reading pleasure. Enjoy your reading experience!"
      },
      {
        "id": 3,
        "question": "Do you offer refunds?",
        "answer": "Yes, we do offer refunds. Please refer to our refund policy on our website for more information."
      },
      {
        "id": 4,
        "question": "Do you support Internation payments?",
        "answer": "Yes, we support international payments. You can make payments from anywhere in the world using various international payment methods."
      }
    ];
    
  return (
    <section className="my-10 p-7 border rounded dark:border-slate-700 shadow-sm">        
      <h1 className="text-2xl text-center font-semibold dark:text-slate-100 mb-3 underline underline-offset-8">Question in mind?</h1>    
            <div className="" id="accordion-flush" data-accordion="collapse" data-active-classes="bg-white dark:bg-gray-900 text-gray-900 dark:text-white" data-inactive-classes="text-gray-500 dark:text-gray-400">
              { faqs.map((faq) => (
                <Accordion key={faq.id} faq={faq} /> 
              )) }
            </div>
      </section>
  )
}
