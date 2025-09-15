'use client'

import { Disclosure } from '@headlessui/react'
import { faqs } from '@/lib/data/faqs'

export default function FAQ() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container-max section-padding">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
          
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <Disclosure key={index}>
                {({ open }) => (
                  <div className="bg-white rounded-lg shadow-sm">
                    <Disclosure.Button className="flex justify-between w-full px-6 py-4 text-left text-sm font-medium text-gray-900 hover:bg-gray-50 focus:outline-none focus-visible:ring focus-visible:ring-primary focus-visible:ring-opacity-75">
                      <span>{faq.q}</span>
                      <svg
                        className={`${
                          open ? 'rotate-180' : ''
                        } h-5 w-5 text-gray-500 transition-transform duration-200`}
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </Disclosure.Button>
                    <Disclosure.Panel className="px-6 pb-4 text-sm text-gray-700">
                      {faq.a}
                    </Disclosure.Panel>
                  </div>
                )}
              </Disclosure>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
