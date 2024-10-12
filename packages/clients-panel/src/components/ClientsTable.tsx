import { Client } from '@/types/client'

export default function ClientsTable({ clients }: { clients: Client[] }) {
    return (
        <table>
            <thead>
                <tr>
                    <th>Name</th>

                    <th>Email</th>

                    <th>Status</th>
                </tr>
            </thead>

            <tbody>
                {clients.map((client) => (
                    <tr>
                        <td>{client.name}</td>

                        <td>{client.email}</td>

                        <td>{client.status}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}
