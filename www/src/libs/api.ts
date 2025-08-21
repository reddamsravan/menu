import { RequestMethod } from '@/contants/api/request-method'

const createRequest =
    (method: RequestMethod) =>
    <T = never, R = never>(
        endpoint: string,
        headers?: Record<string, string>
    ) => {
        // Overloading the request function to handle different types of requests
        function request(): Promise<R>
        function request(data: T): Promise<R>

        // Implementation of the request function
        async function request(data?: T): Promise<R> {
            const options: RequestInit = {
                headers: {
                    'Content-Type': 'application/json',
                    ...headers,
                },
                method,
            }

            if (data) {
                options.body = JSON.stringify(data)
            }
            const response = await fetch(endpoint, options)
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`)
            }

            return response.json() as Promise<R>
        }

        return request
    }

export const API = {
    delete: createRequest(RequestMethod.DELETE),
    get: createRequest(RequestMethod.GET),
    patch: createRequest(RequestMethod.PATCH),
    post: createRequest(RequestMethod.POST),
    put: createRequest(RequestMethod.PUT),
}
