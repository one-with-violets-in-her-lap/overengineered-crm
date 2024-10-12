import ClientsTable from '@/components/ClientsTable'

function App() {
    return (
        <>
            <h1>Clients</h1>

            <ClientsTable
                clients={[
                    {
                        name: 'client 1',
                        email: 'client1@mail.com',
                        status: 'in progress',
                    },

                    {
                        name: 'client 2',
                        email: 'client2@mail.com',
                        status: 'completed',
                    },

                    {
                        name: 'client 3',
                        email: 'client3@mail.com',
                        status: 'completed',
                    },
                ]}
            />
        </>
    )
}

export default App
