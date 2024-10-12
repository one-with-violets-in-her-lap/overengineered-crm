import ClientsTable from 'clients-panel/ClientsTable'

function App() {
  return (
    <>
      <h1
        style={{
          backgroundColor: '#000000',
          padding: '3px 12px',
          borderRadius: '10px',
          color: 'white',
          fontFamily: 'Ubuntu'
        }}
      >
        Dashboard
      </h1>
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
    </>
  )
}

export default App
