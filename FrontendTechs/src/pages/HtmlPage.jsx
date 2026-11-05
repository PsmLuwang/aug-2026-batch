import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import { html, htmlSubTopics } from '../data/html'
import CodeExample from '../components/CodeExample'
import { ChevronRight } from 'lucide-react'

const HtmlPage = () => {
  const [displayExampleCode, setDisplayExampleCode] = useState({...htmlSubTopics[0], i: 0});

  return (
    <div>
      <Navbar />


      <main className='max-w-7xl mx-auto p-5 space-y-5'>
        <header className='flex gap-5 py-10'>
          <img 
            src={`/${html.img}`} 
            alt={`/${html.name} image`}  
            className='h-60'
          />

          <div>
            <h1 className='font-bold text-lg'>What is {html.name}?</h1>
            <p>{html.def}</p>
          </div>
        </header>

        <div>
          <h1 className='text-lg font-semibold mb-2'>Example</h1>
          <CodeExample
            code={html.example}
            language="html"
          />
        </div>


        <section className='grid grid-cols-2 gap-5'>
          <div className='space-y-4'>
            <h1 className='text-lg font-semibold mb-4'>Topics</h1>
            
            <div className='space-y-2 overflow-y-scroll h-dvh code-scroll'>
              {htmlSubTopics.map((topic, i) => (
                <div key={i} className={`${i == displayExampleCode.i ? "bg-gray-50 border border-gray-200" : ""} p-3 rounded-lg`}>
                  <div className='flex justify-between items-center pr-2'>
                    <h1 className={`font-semibold text-lg ${i == displayExampleCode.i ? "text-orange-500" : ""}`}>{i+1}. {topic.name}</h1>
                    <button onClick={() => setDisplayExampleCode({...topic, i})} className='cursor-pointer bg-gray-100 rounded-full p-1'>
                      <ChevronRight size={16} />
                    </button>
                  </div>

                  <p>{topic.def}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h1 className='text-lg font-semibold mb-4'>Example</h1>
            <h1 className='text-lg font-semibold mb-4'>{displayExampleCode.i+1}. {displayExampleCode.name}</h1>
            <CodeExample
              code={displayExampleCode.example}
              language="html"
            />
          </div>
        </section>

      </main>
    </div>
  )
}

export default HtmlPage
