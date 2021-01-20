import React, { useState } from 'react';
import { Document, Page } from 'react-pdf/dist/umd/entry.webpack';

import Button from '../Button/Button';

export default function PDFViewer(props) {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [showNavigation, setNavigation] = useState(false);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
    setPageNumber(1);
    setNavigation(true);

    props.onSuccess();
  }
  function onDocumentLoadFailure() {
    setNavigation(false);
    props.onFailure();
  }

  function changePage(offset) {
    setPageNumber(prevPageNumber => prevPageNumber + offset);
  }

  function previousPage() {
    changePage(-1);
  }

  function nextPage() {
    changePage(1);
  }

  var pageNavigation = <div/>
  if (showNavigation) {
    pageNavigation =    <div>
                            <p>Page {pageNumber || (numPages ? 1 : '--')} of {numPages || '--'}</p>
                            <Button value="Previous" disabled={pageNumber <= 1} onClick={previousPage} />
                            <Button value="Next" disabled={pageNumber >= numPages} onClick={nextPage} />
                        </div>;
  }

  return (
    <div className="pdfObject">
      <Document file={props.pdf} onLoadSuccess={onDocumentLoadSuccess} onLoadError={onDocumentLoadFailure}>
        <Page pageNumber={pageNumber} scale={0.5} />
      </Document>
      { pageNavigation } 
    </div>
  );
}