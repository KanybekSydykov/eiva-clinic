import { ENDPOINTS } from "./api"

export const postApplication = async (data: any) => {
    try {
        const res = await fetch(ENDPOINTS.postApplication(), {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })

        if (!res.ok) {
            throw new Error('Failed to send application')
        }

        return res.status
    } catch (error) {
        throw new Error('Failed to send application')
    }
}