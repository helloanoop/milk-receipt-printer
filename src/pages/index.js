import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import MonthSelector from 'components/MonthSelector';
import YearSelector from 'components/YearSelector';
import * as XLSX from 'xlsx';
import uuid from 'utils/uuid';

function parseExcelFile(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();

    reader.onload = (e) => {
      try {
        const data = new Uint8Array(e.target.result);
        const workbook = XLSX.read(data, { type: 'array' });

        // Assuming that the Excel sheet is named 'Sheet1'
        const sheetName = workbook.SheetNames[0];
        const sheet = workbook.Sheets[sheetName];

        // Convert the sheet data to JSON
        const jsonData = XLSX.utils.sheet_to_json(sheet);

        // Process the JSON data to the desired format
        const customers = [];

        for (const row of jsonData) {
          const customer = {
            uuid: uuid(),
            name: row.Name,
            phone: row.Phone,
            milk: parseFloat(row.Milk),
            curd: parseFloat(row.Curd),
            buttermilk: parseFloat(row.ButterMilk),
            ghee: parseFloat(row.Ghee),
            butter: parseFloat(row.Butter),
            milkEntries: []
          };

          for(let date = 1; date <= 31; date++) {
            customer.milkEntries.push({
              date: Number(date),
              value: parseFloat(row[`${date}`])
            });
          }

          customers.push(customer);
        }

        resolve(customers);
      } catch (error) {
        reject(error);
      }
    };

    reader.readAsArrayBuffer(file);
  });
};

const isValidQty = (qty) => {
  return !isNaN(qty) && qty >= 0;
};

const isMilkDateValid = (date) => {
  return date >= 1 && date <= 31 && Number.isInteger(date);
};

const isCustomersListValid = (customers) => {
  let isValid = {
    status: true,
    message: ''
  };

  for (let i = 0; i < customers.length; i++) {
    let customer = customers[i];
    if (!customer.name || !customer.name.trim().length) {
      isValid.status = false;
      isValid.message = 'Customer name is missing - Row ' + (i + 2);
      break;
    }

    if (!isValidQty(customer.milk)) {
      isValid.status = false;
      isValid.message = 'Invalid milk quantity - Row ' + (i + 2);
      break;
    }

    if (!isValidQty(customer.curd)) {
      isValid.status = false;
      isValid.message = 'Invalid curd quantity - Row ' + (i + 2);
      break;
    }

    if (!isValidQty(customer.buttermilk)) {
      isValid.status = false;
      isValid.message = 'Invalid buttermilk quantity - Row ' + (i + 2);
      break;
    }

    if (!isValidQty(customer.ghee)) {
      isValid.status = false;
      isValid.message = 'Invalid ghee quantity - Row ' + (i + 2);
      break;
    }

    if (!isValidQty(customer.butter)) {
      isValid.status = false;
      isValid.message = 'Invalid ghee quantity - Row ' + (i + 2);
      break;
    }

    for(let j = 0; j < customer.milkEntries.length; j++) {
      let milkEntry = customer.milkEntries[j];
      if (!isMilkDateValid(milkEntry.date)) {
        isValid.status = false;
        isValid.message = 'Invalid milk date - Row ' + (i + 2);
        break;
      }

      if (!isValidQty(milkEntry.value)) {
        isValid.status = false;
        isValid.message = 'Invalid milk quantity - Row ' + (i + 2);
        break;
      }
    }
  }

  return isValid;
};

export default function Index() {
  const router = useRouter();
  const [month, setMonth] = useState('');
  const [year, setYear] = useState('');
  const [customers, setCustomers] = useState([]);
  const [errorMsg, setErrorMsg] = useState(null);

  useEffect(() => {
    // Get the current month as a string, e.g., 'January', 'February', etc.
    const currentMonth = new Date().toLocaleDateString('en-US', { month: 'long' });
    setMonth(currentMonth);

    // Set the current year
    const currentYear = new Date().getFullYear();
    setYear(currentYear);
  }, []);

  const handleFileUpload = async (e) => {
    const selectedFile = e.target.files[0];
    let isValid = false;
    try {
      const customers = await parseExcelFile(selectedFile);
      isValid = isCustomersListValid(customers);
      console.log(customers);
      console.log(isValid);

      if(isValid && isValid.status) {
        setErrorMsg(null);
        setCustomers(customers);
        localStorage.setItem('customers', JSON.stringify(customers));
      } else {
        setErrorMsg(isValid.message);
      }
    } catch (error) {
      console.error('Error parsing Excel file:', error);
      setErrorMsg(error.message || 'Error parsing Excel file');
    }
  };

  const handleNext = () => {
    //  navigate to /report route with month and year as query params
    //  e.g., /report?month=January&year=2021
    router.push({
      pathname: '/report',
      query: {
        month,
        year
      }
    });
  };

  return (
    <>
      <Head>
        <title>Milk Receipt Printer</title>
        <meta name="Milk Receipt Printer" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="page page-home">
        <div className="container mx-auto py-8">
          <img src="/cow.png" alt="Sree Shankara Milk Dairy Farm" className="w-32 mb-4" />
          <header className="text-4xl font-bold mb-8">Sree Shankara Milk Dairy Farm</header>
          <div className="bg-white p-4 rounded shadow-md">
            <h2 className="text-xl font-semibold mb-4">Upload Receipt Data</h2>
            <form>
              <div className="mb-4">
                <label htmlFor="month" className="block text-sm font-bold text-gray-700 mb-2">
                  Month
                </label>
                <MonthSelector selectedMonth={month} onChange={setMonth} />
              </div>
              <div className="mb-4">
                <label htmlFor="year" className="block text-sm font-bold text-gray-700 mb-2">
                  Year
                </label>
                <YearSelector selectedYear={year} onChange={setYear} />
              </div>
              <div className="mb-4">
                <label htmlFor="file" className="block text-sm font-bold text-gray-700 mb-2">
                  Upload XLSX File
                </label>
                <input
                  type="file"
                  id="file"
                  accept=".xlsx"
                  className="form-input mb-2"
                  onChange={handleFileUpload}
                  style={{ fontSize: 13 }}
                />
              </div>

              {errorMsg && (
                <div className="text-red-500 text-sm mb-4">{errorMsg}</div>
              )}
              
              {customers && customers.length > 0 && (
                <div className="mb-4">
                  <div className="mb-2">
                    <span
                      className='text-blue-500 font-bold'
                    >
                      {customers.length}
                    </span> customers found
                  </div>
                  <button
                    type="button"
                    onClick={handleNext}
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                  >
                    Next
                  </button>
                </div>
              )} 
            </form>
          </div>
        </div>
      </main>

      <footer>
      </footer>
    </>
  );
};
