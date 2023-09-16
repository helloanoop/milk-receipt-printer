import React, { useState, useEffect } from 'react';
import Receipt from './Receipt';
import Modal, { ModalContent, ModalFooter} from 'components/Modal';

export const PrintContext = React.createContext();

export const PrintProvider = props => {
  const [showCustomerReceipt, setShowCustomerReceipt] = useState(null);
  const [options, setOptions] = useState({});
  const handleModalClose = () => setShowCustomerReceipt(null);

  const value = {
    print: (customer, options) => {
      setShowCustomerReceipt(customer);
      setOptions({
        ...options
      });
    }
  };

  useEffect(() => {
    if (options.print) {
      setTimeout(() => {
        window.print();
      }, 100);
    }
  }, [options]);

  return (
    <PrintContext.Provider value={value} {...props}>
      {showCustomerReceipt && (
        <Modal
          size='lg'
          handleClose={handleModalClose}
        >
          <ModalContent>
            <Receipt customer={showCustomerReceipt}/>
          </ModalContent>
          <ModalFooter
            cancelText='Close' saveText='Print'
            handleCancel={handleModalClose}
            handleSubmit={() => window.print()}
          />
        </Modal>
      )}
      {props.children}
    </PrintContext.Provider>
  );
};

export const usePrint = () =>  {
  const context = React.useContext(PrintContext);

  if (!context) {
    throw new Error(`usePrint must be used within a PrintProvider`);
  }

  return context;
}

export default PrintProvider;
