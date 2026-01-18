'use client';

import React, { useState, useEffect } from 'react';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

interface FAQ {
  _id: string;
  question: string;
  answer: string;
}

function FAQ() {
  const [faqs, setFaqs] = useState<FAQ[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchFAQs = async () => {
      try {
        const response = await fetch('/api/faqs');
        const result = await response.json();

        if (result.success) {
          setFaqs(result.data);
        } else {
          setError('Failed to fetch FAQs');
        }
      } catch (err) {
        setError('Error fetching FAQs');
        console.error('Error:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchFAQs();
  }, []);

  if (loading) {
    return (
      <div className="w-full h-64 flex items-center justify-center">
        <div className="text-lg">Loading FAQs...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="w-full h-64 flex items-center justify-center">
        <div className="text-lg text-red-500">{error}</div>
      </div>
    );
  }

  return (
    <div className='w-full h-auto'>
      <div className='w-2/3 h-auto flex flex-col mx-auto my-44 gap-8'>
        <h1 className='text-6xl'>FAQ</h1>
        <Accordion
          type="single"
          collapsible
          className="w-full"
          defaultValue={faqs.length > 0 ? `item-${faqs[0]._id}` : undefined}
        >
          {faqs.length === 0 ? (
            <div className="text-lg text-gray-500">No FAQs found</div>
          ) : (
            faqs.map((faq, _index) => (
              <AccordionItem key={faq._id} value={`item-${faq._id}`}>
                <AccordionTrigger>{faq.question}</AccordionTrigger>
                <AccordionContent className="flex flex-col gap-4 text-balance">
                  <p>{faq.answer}</p>
                </AccordionContent>
              </AccordionItem>
            ))
          )}
        </Accordion>
      </div>
    </div>
  );
}

export default FAQ;