import React from 'react'
import HTMLFlipBook from 'react-pageflip';
import { useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import pdf from '/docs/invitation.pdf';

import styles from '../styles';
import { SectionTitle } from '../Components';


pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

const Pages = React.forwardRef((props, ref) => {
    return (
        <div id="invitation" className="bg-white " ref={ref} >
            <div>{props.children}</div>
            {/* <div>Page number: {props.number}</div> */}
            <h3 className={`${styles.ovoParagraph} ${styles.flexCenter} text-rusty-brown sm:pt-[12rem]`}>Click to view invitation</h3>
            
            
        </div>
    );
});

// Pages.displayName = 'Pages';

function Flipbook() {

    const [numPages, setNumPages] = useState();

    

    function onDocumentLoadSuccess({ numPages }) {
        setNumPages(numPages);
    }
    return (
        <div>

            <div className='p-12 sm:py-9 flex flex-col gap-5 justify-center items-center bg-white text-white overflow-hidden '>
                {/* <h1 className='text-3xl text-white text-center font-bold'>FlipBook-</h1> */}
                      <SectionTitle title="Our Invitation" subtitle="We can’t wait to celebrate with you!"  />
                
                <HTMLFlipBook width={400} height={570}>
                    {
                        [...Array(numPages).keys()].map((pNum) => (
                            <Pages key={pNum} number={pNum + 1}>
                                <Document file={pdf} onLoadSuccess={onDocumentLoadSuccess}>
                                    <Page pageNumber={pNum} width={400} renderAnnotationLayer={false} renderTextLayer={false} />
                                </Document>
                                {/* <h1>
                                    Page {pNum} of {numPages}
                                </h1> */}
                            </Pages>
                        ))
                    }
                </HTMLFlipBook>
            </div>
        </div>

    );
}

export default Flipbook