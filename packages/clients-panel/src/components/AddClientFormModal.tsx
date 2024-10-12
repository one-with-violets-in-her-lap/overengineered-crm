import { Client } from '@/types/client'
import { mustBeEmail, mustBeFilled } from '@/validation-rules'
import { Button, Flex, Form, Input, Modal } from 'antd'

export default function AddClientFormModal({
    opened,
    onClose,
}: {
    opened: boolean
    onClose: () => void
}) {
    return (
        <Modal
            open={opened}
            onCancel={onClose}
            onClose={onClose}
            title="New client"
            footer={null}
        >
            <Form onFinish={(values) => onClose()}>
                <Form.Item<Partial<Client>>
                    label="Name"
                    name="name"
                    rules={[mustBeFilled]}
                >
                    <Input />
                </Form.Item>

                <Form.Item<Partial<Client>>
                    label="Email"
                    name="email"
                    rules={[mustBeEmail]}
                >
                    <Input />
                </Form.Item>

                <Form.Item<Partial<Client>>>
                    <Flex justify="end" gap={10}>
                        <Button
                            variant="solid"
                            color="primary"
                            htmlType="submit"
                        >
                            Add
                        </Button>

                        <Button
                            variant="outlined"
                            htmlType="reset"
                            onClick={onClose}
                        >
                            Cancel
                        </Button>
                    </Flex>
                </Form.Item>
            </Form>
        </Modal>
    )
}
