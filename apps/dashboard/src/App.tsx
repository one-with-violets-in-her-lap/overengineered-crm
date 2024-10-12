import React from 'react'
import ClientsTable from 'clients-panel/ClientsTable'

function App() {
  return (
    <React.Suspense fallback="Loading App...">
      <h1>Dashboard</h1>
      123
      <ClientsTable
        clients={[
          {
            name: 'Client 13425',
            status: 'In progress',
            email: 'client13425@mail.com',
          },

          {
            name: 'Client 65',
            status: 'Review',
            email: 'client65@mail.com',
          },

          {
            name: 'Company 12',
            status: 'Completed',
            email: 'company12@mail.com',
          },
        ]}
      />
    </React.Suspense>
  )
}

export default App
