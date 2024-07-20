import React from 'react';

const LearningHoursTable = () => {
  return (
    <table className="table table-striped" style={{ width: '100%', fontSize: '16px', borderCollapse: 'collapse' }}>
      <thead>
        <tr className="bg-primary text-white">
          <th className='text-center text-light' style={{ padding: '16px', border: '1px solid black' }}>Guided Learning Hours</th>
          <th className='text-center text-light' style={{ padding: '16px', border: '1px solid black' }}>CEFR Level</th>
        </tr>
      </thead>
      <tbody className="text-black">
        <tr>
          <td className='text-center' style={{ padding: '16px', border: '1px solid black' }}>Approximately 1,000-1,200</td>
          <td className='text-center' style={{ padding: '16px', border: '1px solid black' }}>C2</td>
        </tr>
        <tr>
          <td className='text-center' style={{ padding: '16px', border: '1px solid black' }}>Approximately 700-800</td>
          <td className='text-center' style={{ padding: '16px', border: '1px solid black' }}>C1</td>
        </tr>
        <tr>
          <td className='text-center' style={{ padding: '16px', border: '1px solid black' }}>Approximately 500-600</td>
          <td className='text-center' style={{ padding: '16px', border: '1px solid black' }}>B2</td>
        </tr>
        <tr>
          <td className='text-center' style={{ padding: '16px', border: '1px solid black' }}>Approximately 350-400</td>
          <td className='text-center' style={{ padding: '16px', border: '1px solid black' }}>B1</td>
        </tr>
        <tr>
          <td className='text-center' style={{ padding: '16px', border: '1px solid black' }}>Approximately 180-200</td>
          <td className='text-center' style={{ padding: '16px', border: '1px solid black' }}>A2</td>
        </tr>
        <tr>
          <td className='text-center' style={{ padding: '16px', border: '1px solid black' }}>Approximately 90-100</td>
          <td className='text-center' style={{ padding: '16px', border: '1px solid black' }}>A1</td>
        </tr>
      </tbody>
    </table>
  );
};

export default LearningHoursTable;
