import styles from '@/assets/styles/ClientsTable.module.css'

import { useState } from 'react'
import { Button, Space, Table } from 'antd'
import { PlusOutlined } from '@ant-design/icons'
import { Client } from '@/types/client'
import AddClientFormModal from '@/components/AddClientFormModal'

export default function ClientsTable({ clients }: { clients: Client[] }) {
    const [addClientModalOpened, setAddClientModalOpened] = useState(false)

    return (
        <Space
            direction="vertical"
            className={styles['clients-table-container']}
            size="large"
        >
            <Button
                variant="solid"
                color="primary"
                icon={<PlusOutlined />}
                onClick={() => setAddClientModalOpened(true)}
            >
                Add
            </Button>

            <Table
                bordered
                pagination={{ hideOnSinglePage: true }}
                dataSource={clients}
                columns={[
                    { title: 'Name', dataIndex: 'name', key: 'name' },
                    { title: 'Email', dataIndex: 'email', key: 'email' },
                    { title: 'Status', dataIndex: 'status', key: 'status' },
                ]}
                size="middle"
                className={styles['clients-table']}
            />

            <AddClientFormModal
                opened={addClientModalOpened}
                onClose={() => setAddClientModalOpened(false)}
            />
        </Space>
    )
}
