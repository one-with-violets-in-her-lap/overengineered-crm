import ClientsTable from 'clients-panel/ClientsTable'
import Heading from 'ui-kit/typography/Heading'
import Button from 'ui-kit/Button'

function App() {
  return (
    <>
      <Heading>Dashboard</Heading>

      <Button onClick={() => window.location.reload()} className="refresh-button">
        Refresh
      </Button>

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
